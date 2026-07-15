// Universal Hospital Website Configuration
// Modify this file to instantly customize the website for any type of hospital or clinic.

export const hospitalConfig = {
  // Brand & Meta Settings
  brand: {
    name: "Medicare Pro Hospital",
    shortName: "Medicare Pro",
    tagline: "Compassionate Care, Advanced Medicine, Exceptional Service",
    logoIcon: "FaHospital", // Can be FaHospital, FaClinicMedical, FaHeartbeat, etc.
    logoText: "Medicare Pro",
    theme: {
      // These are injected as Tailwind custom values or CSS variables
      primary: "#0ea5e9", // Sky-500
      secondary: "#0f172a", // Slate-900
      accent: "#e11d48", // Rose-600
      bgGradientStart: "#f0f9ff", // Sky-50
      bgGradientEnd: "#ffffff"
    }
  },

  // SEO Settings
  seo: {
    title: "Medicare Pro - Modern Healthcare & Medical Clinic Website",
    description: "Welcome to Medicare Pro Hospital. We offer 24/7 emergency care, 10+ specialized departments, world-class doctors, and online appointment booking.",
    keywords: "hospital, medical clinic, appointment, healthcare, emergency doctor, cardiology, pediatrics, medicine"
  },

  // Contact Info
  contact: {
    phone: "+1 (800) 555-0199",
    email: "info@medicarepro.com",
    address: "123 Healthcare Blvd, Medical District, Suite 400, New York, NY 10001",
    hours: "24/7 Emergency | Outpatients: Mon - Sat: 8:00 AM - 8:00 PM",
    socials: {
      facebook: "https://facebook.com/medicarepro",
      twitter: "https://twitter.com/medicarepro",
      linkedin: "https://linkedin.com/company/medicarepro",
      instagram: "https://instagram.com/medicarepro"
    }
  },

  // Emergency Details
  emergency: {
    hotline: "911",
    ambulance: "+1 (800) 555-0111",
    bloodBank: "+1 (800) 555-0122",
    details: "For immediate life-threatening conditions, call our 24/7 Hotline. Our ambulance dispatch is active in a 25-mile radius."
  },

  // WhatsApp Integration
  whatsapp: {
    number: "18005550199", // International format without + or 00
    defaultMessage: "Hello Medicare Pro, I would like to inquire about booking an appointment."
  },

  // EmailJS Credentials (leave blank to run in mockup mode)
  emailjs: {
    serviceId: "service_medicare",
    templateId: "template_appointment",
    publicKey: "user_key_placeholder"
  },

  // Hero Section
  hero: {
    title: "Your Health Is Our",
    titleHighlight: "Highest Priority",
    description: "Access state-of-the-art medical services, world-class healthcare specialists, and 24/7 immediate response teams right in your neighborhood.",
    ctaBook: "Book Appointment",
    ctaEmergency: "Emergency Services",
    bannerImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Satisfied Patients", count: "45k+", suffix: "" },
      { label: "Professional Doctors", count: "150", suffix: "+" },
      { label: "Medical Departments", count: "12", suffix: "" },
      { label: "Emergency Beds", count: "80", suffix: "+" }
    ]
  },

  // About Section
  about: {
    title: "About Our Healthcare Institution",
    subtitle: "Pioneering Medical Excellence Since 1998",
    description: "Medicare Pro Hospital has stood at the forefront of modern medical care. We combine cutting-edge technology with dedicated medical professionals to deliver diagnostic, therapeutic, and emergency services of the highest standard.",
    image: "https://images.unsplash.com/photo-1584515901367-f1c2a89937c4?auto=format&fit=crop&w=800&q=80",
    values: [
      { title: "Patient-Centered", desc: "Every decision is focused on patient comfort and positive health outcomes." },
      { title: "24/7 Availability", desc: "Round-the-clock emergency room, ICU, laboratories, and pharmacy services." },
      { title: "Leading Specialists", desc: "Highly qualified board-certified doctors across 10+ distinct fields." },
      { title: "Accredited Quality", desc: "Recognized nationally for safety standards, cleanliness, and clinical care." }
    ],
    accreditations: ["JCI Accredited", "ISO 9001 Certified", "Gold Seal of Approval"]
  },

  // Departments (10+ departments)
  departments: [
    {
      id: "cardiology",
      name: "Cardiology",
      icon: "FaHeartbeat",
      shortDesc: "Advanced heart care, diagnostics, and cardiac rehabilitation.",
      fullDesc: "Our Cardiology department provides comprehensive evaluation, consultation, and treatment for patients with all types of heart diseases, including coronary artery disease, valve disorders, heart failure, and arrhythmias. Equipped with state-of-the-art cath labs.",
      services: ["Electrocardiogram (ECG)", "Echocardiogram", "Cardiac Catheterization", "Pacemaker Implantation", "Heart Failure Clinic"],
      schedule: "Mon - Sat: 9:00 AM - 6:00 PM",
      pricing: "Consultation from $60"
    },
    {
      id: "neurology",
      name: "Neurology & Neurosurgery",
      icon: "FaBrain",
      shortDesc: "Comprehensive diagnosis and treatment of brain and nervous system disorders.",
      fullDesc: "We specialize in complex neurological issues including stroke management, epilepsy, Parkinson's, multiple sclerosis, and advanced brain/spinal surgeries using minimally invasive techniques.",
      services: ["EEG & EMG Testing", "Stroke Intervention", "Brain Tumor Resection", "Spine Surgery", "Sleep Disorders Clinic"],
      schedule: "Mon - Fri: 10:00 AM - 5:00 PM",
      pricing: "Consultation from $80"
    },
    {
      id: "pediatrics",
      name: "Pediatrics & Child Health",
      icon: "FaBaby",
      shortDesc: "Dedicated medical care for infants, children, and adolescents.",
      fullDesc: "From routine checkups and vaccinations to specialized critical care, our pediatricians offer warm, kid-friendly environments to ensure the health and growth of your little ones.",
      services: ["Newborn Screening", "Immunizations", "Pediatric ICU (PICU)", "Developmental Screening", "Asthma & Allergy Care"],
      schedule: "Mon - Sat: 8:00 AM - 8:00 PM",
      pricing: "Consultation from $45"
    },
    {
      id: "orthopedics",
      name: "Orthopedics & Joint Care",
      icon: "FaBone",
      shortDesc: "Specialized treatment for bones, joints, ligaments, and sports injuries.",
      fullDesc: "Our orthopedic surgeons offer top-tier bone and joint surgeries, including total knee/hip replacements, arthroscopic sports surgeries, fracture care, and intensive physical therapy.",
      services: ["Knee & Hip Replacement", "Sports Medicine", "Arthroscopic Surgery", "Physical Therapy", "Fracture Clinic"],
      schedule: "Mon - Sat: 9:00 AM - 7:00 PM",
      pricing: "Consultation from $55"
    },
    {
      id: "oncology",
      name: "Oncology & Cancer Care",
      icon: "FaRibbon",
      shortDesc: "State-of-the-art cancer diagnosis, chemotherapy, and immunotherapy.",
      fullDesc: "Offering multidisciplinary cancer care. We provide chemo, radiation therapy, immunotherapy, and cancer screening, combined with psychological support for patients and families.",
      services: ["Chemotherapy", "Immunotherapy", "Radiation Oncology Referral", "Cancer Screening Panels", "Support Groups"],
      schedule: "Mon - Fri: 8:00 AM - 4:00 PM",
      pricing: "Consultation from $75"
    },
    {
      id: "gynecology",
      name: "Gynecology & Obstetrics",
      icon: "FaFemale",
      shortDesc: "Complete care for women's health, pregnancy, and childbirth.",
      fullDesc: "Supporting women through every stage of life. Our maternity wing provides safe, private delivery rooms, neonatal monitoring, prenatal guidance, and gynecological surgeries.",
      services: ["Prenatal & Postnatal Care", "Natural & Cesarean Delivery", "Fertility Counseling", "Menopause Management", "Keyhole Surgeries"],
      schedule: "Mon - Sat: 9:00 AM - 6:00 PM",
      pricing: "Consultation from $50"
    },
    {
      id: "dermatology",
      name: "Dermatology",
      icon: "FaSparkles",
      shortDesc: "Treatment for skin, hair, nails, and advanced cosmetic therapies.",
      fullDesc: "Comprehensive diagnosis for skin allergies, eczema, acne, psoriasis, and skin cancer screening, alongside cosmetic therapies for skin rejuvenation.",
      services: ["Acne & Scar Treatment", "Skin Cancer Screening", "Laser Skin Resurfacing", "Allergy Testing", "Eczema Management"],
      schedule: "Mon - Fri: 11:00 AM - 7:00 PM",
      pricing: "Consultation from $50"
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology & Eye Care",
      icon: "FaEye",
      shortDesc: "Comprehensive eye exams, cataract surgery, and vision correction.",
      fullDesc: "Providing full-range ophthalmic care. Our surgeons perform laser eye procedures, cataract operations, and treat glaucoma and macular degeneration with precision.",
      services: ["Cataract Surgery", "LASIK Vision Correction", "Glaucoma Testing", "Diabetic Eye Care", "Prescription Eyewear"],
      schedule: "Mon - Sat: 9:00 AM - 5:00 PM",
      pricing: "Consultation from $40"
    },
    {
      id: "dental",
      name: "Dental Clinic & Surgery",
      icon: "FaTooth",
      shortDesc: "Root canals, dental implants, teeth whitening, and orthodontics.",
      fullDesc: "State-of-the-art dental care for optimal oral health. We specialize in aesthetic dentistry, implants, orthodontic aligners, and pain-free root canal therapies.",
      services: ["Dental Implants", "Root Canal Therapy", "Teeth Whitening", "Braces & Invisalign", "Pediatric Dentistry"],
      schedule: "Mon - Sat: 9:00 AM - 8:00 PM",
      pricing: "Consultation from $35"
    },
    {
      id: "ent",
      name: "ENT Specialists",
      icon: "FaAssistiveListeningSystems",
      shortDesc: "Care for ear, nose, throat, voice, and balance disorders.",
      fullDesc: "Diagnosing and treating ear infections, hearing loss, allergies, sinusitis, tonsillitis, and sleep apnea. Equipped with microsurgery and audiometry equipment.",
      services: ["Audiometry Testing", "Sinusitis Treatment", "Tonsillectomy", "Hearing Aid Fitting", "Snoring Solutions"],
      schedule: "Mon - Fri: 10:00 AM - 6:00 PM",
      pricing: "Consultation from $45"
    },
    {
      id: "emergency",
      name: "24/7 Emergency Care",
      icon: "FaBriefcaseMedical",
      shortDesc: "Immediate response trauma care, life support, and stabilization.",
      fullDesc: "Our Emergency department is fully staffed 24/7 with trauma surgeons, acute physicians, and nurses. Ready to handle heart attacks, stroke, accidents, and acute respiratory distress.",
      services: ["Trauma Resuscitation", "Acute Cardiac Care", "Poison & Burn Management", "Emergency Surgery", "Rapid Ambulance Dispatch"],
      schedule: "Always Open (24/7/365)",
      pricing: "Emergency Triage is immediate"
    }
  ],

  // Doctors Section
  doctors: [
    {
      id: "doc1",
      name: "Dr. Sarah Jenkins",
      specialty: "Chief Cardiologist",
      departmentId: "cardiology",
      qualification: "MD, FACC - Harvard Medical School",
      experience: 16,
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Jenkins is a national award-winning cardiologist specializing in minimally invasive coronary interventions and heart valve management.",
      schedule: "Mon, Wed, Fri (9:00 AM - 2:00 PM)",
      contact: "ext 104"
    },
    {
      id: "doc2",
      name: "Dr. Robert Chen",
      specialty: "Senior Neurosurgeon",
      departmentId: "neurology",
      qualification: "MD, Ph.D. - Johns Hopkins University",
      experience: 20,
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Chen is a leading expert in micro-neurosurgery and spine stabilization, pioneering complex skull-base surgery techniques.",
      schedule: "Tue, Thu (10:00 AM - 4:00 PM)",
      contact: "ext 109"
    },
    {
      id: "doc3",
      name: "Dr. Michael Foster",
      specialty: "Pediatric Care Director",
      departmentId: "pediatrics",
      qualification: "MD - Stanford School of Medicine",
      experience: 12,
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Foster cares deeply about preventive child healthcare and child-development support, with over a decade of loving care.",
      schedule: "Mon - Thu (8:00 AM - 1:00 PM)",
      contact: "ext 112"
    },
    {
      id: "doc4",
      name: "Dr. Emily Martinez",
      specialty: "Orthopedic & Sports Surgeon",
      departmentId: "orthopedics",
      qualification: "MD - Columbia University",
      experience: 14,
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Martinez specializes in complex joint reconstructions, ligament repairs, and advanced minimally invasive keyhole arthroscopies.",
      schedule: "Wed, Thu, Sat (1:00 PM - 6:00 PM)",
      contact: "ext 115"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: "test1",
      name: "Marcus Vance",
      rating: 5,
      review: "The emergency cardiology team saved my life when I had a sudden cardiac event. The quick response, modern cath lab, and Dr. Jenkins' precision were outstanding.",
      treatedFor: "Angioplasty",
      date: "May 2026"
    },
    {
      id: "test2",
      name: "Helena Rostova",
      rating: 5,
      review: "My daughter was admitted to pediatric care for severe pneumonia. The nurses and Dr. Foster were so patient, kind, and professional. She recovered quickly!",
      treatedFor: "Pediatric Pneumonia",
      date: "June 2026"
    },
    {
      id: "test3",
      name: "David Sterling",
      rating: 5,
      review: "I had a total knee replacement performed by Dr. Martinez. Three months later and I'm walking completely pain-free, hiking, and playing golf. Highly recommend!",
      treatedFor: "Knee Replacement",
      date: "April 2026"
    }
  ],

  // Gallery Images
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1579684389782-64d84b5e902a?auto=format&fit=crop&w=600&q=80",
      category: "Surgery",
      caption: "Advanced Modular Operation Theatre"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
      category: "Equipment",
      caption: "High-Resolution MRI Diagnostics Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
      category: "Ward",
      caption: "Comfortable Private Patient Ward Room"
    },
    {
      url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
      category: "Clinic",
      caption: "Sterilized Dental Surgery Room"
    },
    {
      url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80",
      category: "ICU",
      caption: "24/7 Supervised Neonatal ICU"
    },
    {
      url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=600&q=80",
      category: "Clinic",
      caption: "Main Reception & Patient Check-in Lobby"
    }
  ],

  // Google Maps (Using a public, clean clinical center map coordinates embedding iframe src)
  googleMaps: {
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.424197775586!2d-73.98731968459388!3d40.75797477932697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c1e919e3%3A0xdbd1723ee580ad0a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625010000000!5m2!1sen!2sus",
    directionLink: "https://maps.google.com/?q=Times+Square+NY"
  },

  // FAQ Accordion
  faqs: [
    {
      q: "How can I book an outpatient appointment?",
      a: "You can book an appointment online via our 'Book Appointment' form on this website, call our clinic at +1 (800) 555-0199, or walk into the reception during OPD hours (Mon - Sat: 8:00 AM - 8:00 PM)."
    },
    {
      q: "Do you accept health insurance policies?",
      a: "Yes, we accept major local and international health insurance providers. Please bring your insurance card at check-in or contact our billing desk to confirm coverage before your procedure."
    },
    {
      q: "What emergency response facilities do you have?",
      a: "We feature a 24/7 Level 1 Trauma Center, dynamic intensive care beds, full surgical units, on-call specialist physicians, and our own rapid response cardiac ambulance dispatch team."
    },
    {
      q: "What are the visiting hours for inpatients?",
      a: "General visiting hours are daily from 11:00 AM - 1:00 PM and 4:00 PM - 7:00 PM. For critical care units (ICU/CCU), visits are restricted to immediate family members for 15 minutes per hour."
    },
    {
      q: "How can I get my lab test results online?",
      a: "All diagnostic, pathology, and radiology results are uploaded to our secure patient portal within 24-48 hours. You will receive an SMS and email notification once they are released."
    }
  ]
};
