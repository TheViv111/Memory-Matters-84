
-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  appointment_type TEXT NOT NULL,
  reason TEXT NOT NULL,
  medications TEXT,
  insurance TEXT,
  previous_patient TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  contact_preference TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making these tables publicly readable for admin purposes
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is an admin-managed system)
CREATE POLICY "Allow public insert on appointments" 
  ON public.appointments 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policies for admin access (you can add authentication later)
CREATE POLICY "Allow public read on appointments" 
  ON public.appointments 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public read on contact_submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (true);
