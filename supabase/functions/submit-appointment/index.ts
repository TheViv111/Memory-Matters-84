
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      dateOfBirth,
      date,
      time,
      type,
      reason,
      medications,
      insurance,
      previousPatient,
      emergencyContact,
      emergencyPhone
    } = await req.json()

    const { data, error } = await supabaseClient
      .from('appointments')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        date_of_birth: dateOfBirth,
        appointment_date: date,
        appointment_time: time,
        appointment_type: type,
        reason: reason,
        medications: medications || null,
        insurance: insurance || null,
        previous_patient: previousPatient || null,
        emergency_contact: emergencyContact || null,
        emergency_phone: emergencyPhone || null,
        status: 'pending'
      })

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit appointment' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
