
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

    const appointmentData = await req.json()
    console.log('Received appointment data:', appointmentData)

    // Insert appointment into database
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        first_name: appointmentData.firstName,
        last_name: appointmentData.lastName,
        email: appointmentData.email,
        phone: appointmentData.phone,
        date_of_birth: appointmentData.dateOfBirth,
        appointment_date: appointmentData.date,
        appointment_time: appointmentData.time,
        appointment_type: appointmentData.type,
        reason: appointmentData.reason,
        medications: appointmentData.medications,
        insurance: appointmentData.insurance,
        previous_patient: appointmentData.previousPatient,
        emergency_contact: appointmentData.emergencyContact,
        emergency_phone: appointmentData.emergencyPhone
      })
      .select()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log('Appointment saved successfully:', data)

    // Send email notification using Resend
    const emailData = {
      from: 'Memory Matters Clinic <onboarding@resend.dev>',
      to: ['vivaan.handa@pathwaysschool.in'],
      subject: `New Appointment Request - ${appointmentData.firstName} ${appointmentData.lastName}`,
      html: `
        <h2>New Appointment Request</h2>
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h3>Patient Information:</h3>
          <p><strong>Name:</strong> ${appointmentData.firstName} ${appointmentData.lastName}</p>
          <p><strong>Email:</strong> ${appointmentData.email}</p>
          <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          <p><strong>Date of Birth:</strong> ${appointmentData.dateOfBirth}</p>
          
          <h3>Appointment Details:</h3>
          <p><strong>Date:</strong> ${appointmentData.date}</p>
          <p><strong>Time:</strong> ${appointmentData.time}</p>
          <p><strong>Type:</strong> ${appointmentData.type}</p>
          <p><strong>Reason:</strong> ${appointmentData.reason}</p>
          
          <h3>Additional Information:</h3>
          <p><strong>Insurance:</strong> ${appointmentData.insurance || 'Not provided'}</p>
          <p><strong>Previous Patient:</strong> ${appointmentData.previousPatient || 'Not specified'}</p>
          <p><strong>Current Medications:</strong> ${appointmentData.medications || 'None specified'}</p>
          <p><strong>Emergency Contact:</strong> ${appointmentData.emergencyContact || 'Not provided'}</p>
          <p><strong>Emergency Phone:</strong> ${appointmentData.emergencyPhone || 'Not provided'}</p>
          
          <hr style="margin: 20px 0;">
          <p><small>This appointment request was submitted on ${new Date().toLocaleString()}</small></p>
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
        message: 'Appointment request submitted successfully',
        appointmentId: data[0]?.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error processing appointment:', error)
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
