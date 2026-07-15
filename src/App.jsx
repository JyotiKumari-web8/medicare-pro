import React, { useEffect } from "react";
import { hospitalConfig } from "./hospitalConfig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import EmergencyNumbers from "./components/EmergencyNumbers";
import AppointmentForm from "./components/AppointmentForm";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import GoogleMapSection from "./components/GoogleMapSection";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Inject Custom Brand Theme Colors dynamically from Configuration file
    const root = document.documentElement;
    const { theme } = hospitalConfig.brand;
    
    if (theme) {
      if (theme.primary) root.style.setProperty("--color-primary", theme.primary);
      if (theme.secondary) root.style.setProperty("--color-secondary", theme.secondary);
      if (theme.accent) root.style.setProperty("--color-accent", theme.accent);
      if (theme.bgGradientStart) root.style.setProperty("--color-bg-gradient-start", theme.bgGradientStart);
      if (theme.bgGradientEnd) root.style.setProperty("--color-bg-gradient-end", theme.bgGradientEnd);
    }

    // Inject SEO Meta tags dynamically (Title and Description)
    document.title = hospitalConfig.seo.title;
    
    // Find or create meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = hospitalConfig.seo.description;

    // Find or create meta keywords tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = hospitalConfig.seo.keywords;

  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)] font-sans antialiased overflow-x-hidden">
      
      {/* Structural layout components in order */}
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Doctors />
      <EmergencyNumbers />
      <AppointmentForm />
      <Testimonials />
      <Gallery />
      <GoogleMapSection />
      <FAQ />
      <ContactSection />
      <WhatsAppFloat />
      <Footer />

    </div>
  );
}

export default App;
