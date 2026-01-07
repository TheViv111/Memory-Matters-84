
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import PageTransition from "@/components/ui/PageTransition";
import SEO from "@/components/SEO/Helmet";
import StructuredData from "@/components/SEO/StructuredData";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoadingPage from "./components/LoadingPage";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

// Extracted Routes to use useLocation hook inside BrowserRouter context
const AppRoutes = () => {
  const location = useLocation();

  const getSEOProps = (pathname: string) => {
    switch (pathname) {
      case '/':
        return {
          title: 'Memory Matters - Specialist Clinic for Memory & Senior Mental Health',
          description: 'Professional geriatric psychiatric care by Dr. Soumya Hegde. Specialized in memory screening, dementia evaluation, and senior mental health in Bangalore.',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Memory Matters Clinic",
            "description": "Specialist Clinic for Memory & Senior Mental Health",
            "url": "https://memorymattersindia.com",
            "telephone": "+918904418172",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.6, Wind Tunnel Road, Murugeshpalya, Kaveri Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560017",
              "addressCountry": "IN"
            },
            "openingHours": ["Mo-Fr 09:00-16:00", "Sa 09:00-13:00"],
            "specialty": ["Geriatric Psychiatry", "Memory Disorders", "Dementia Care"]
          }
        };
      case '/about':
        return {
          title: 'About Dr. Soumya Hegde - Geriatric Psychiatrist | Memory Matters',
          description: 'Learn about Dr. Soumya Hegde, a leading geriatric psychiatrist specializing in memory disorders, dementia care, and senior mental health in Bangalore.',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Soumya Hegde",
            "jobTitle": "Geriatric Psychiatrist",
            "worksFor": {
              "@type": "Organization",
              "name": "Memory Matters Clinic"
            },
            "description": "Specialized in geriatric psychiatry, memory disorders, and senior mental health care"
          }
        };
      case '/services':
        return {
          title: 'Our Services - Memory Screening, Dementia Care | Memory Matters',
          description: 'Comprehensive memory screening, dementia evaluation, cognitive stimulation therapy, and senior mental health services by Dr. Soumya Hegde.',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Memory Matters Clinic - Services",
            "description": "Comprehensive memory and mental health services",
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Memory Screening",
                "description": "Early detection and monitoring of memory-related concerns"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Dementia Evaluation",
                "description": "Comprehensive assessment for dementia diagnosis"
              }
            ]
          }
        };
      case '/resources':
        return {
          title: 'Patient Resources - Memory Health Information | Memory Matters',
          description: 'Helpful resources for patients and families dealing with memory disorders, dementia, and senior mental health conditions.',
          structuredData: {}
        };
      case '/contact':
        return {
          title: 'Contact Memory Matters Clinic - Dr. Soumya Hegde | Bangalore',
          description: 'Contact Memory Matters Clinic for appointments with Dr. Soumya Hegde. Located in Bangalore, we specialize in geriatric psychiatry and memory care.',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Memory Matters Clinic",
            "telephone": "+918904418172",
            "email": "memorymattersindia@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.6, Wind Tunnel Road, Murugeshpalya, Kaveri Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560017",
              "addressCountry": "IN"
            }
          }
        };
      default:
        return {
          title: 'Memory Matters - Specialist Clinic for Memory & Senior Mental Health',
          description: 'Professional geriatric psychiatric care by Dr. Soumya Hegde. Specialized in memory screening, dementia evaluation, and senior mental health in Bangalore.',
          structuredData: {}
        };
    }
  };

  const seoProps = getSEOProps(location.pathname);

  return (
    <>
      <SEO {...seoProps} canonical={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Index />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <Services />
            </PageTransition>
          } />
          <Route path="/resources" element={
            <PageTransition>
              <Resources />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
