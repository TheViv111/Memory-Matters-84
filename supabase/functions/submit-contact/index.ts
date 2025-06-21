
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const contactData = await req.json()
    console.log('Received contact data:', contactData)

    // Insert contact submission into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        subject: contactData.subject,
        message: contactData.message,
        contact_preference: contactData.contactPreference
      })
      .select()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log('Contact submission saved successfully:', data)

    // Send email notification using Resend
    const emailData = {
      from: 'Memory Matters Clinic <onboarding@resend.dev>',
      to: ['vivaan.handa@pathwaysschool.in'],
      subject: `New Contact Form Submission - ${contactData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Preferred Contact Method:</strong> ${contactData.contactPreference || 'Not specified'}</p>
          
          <h3>Subject:</h3>
          <p>${contactData.subject}</p>
          
          <h3>Message:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p>${contactData.message}</p>
          </div>
          
          <hr style="margin: 20px 0;">
          <p><small>This message was submitted on ${new Date().toLocaleString()}</small></p>
        </div>
      `
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`
      },
      body: JSON.stringify(emailData)
    })

    if (!emailResponse.ok) {
      console.error('Email sending failed:', await emailResponse.text())
    } else {
      console.log('Email sent successfully')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        submissionId: data[0]?.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
