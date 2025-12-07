import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  translation: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    whyChooseUs: "Why Choose Us",
    caseStudies: "Case Studies",
    
    // Hero Section
    heroTitle: "Transform Your Business with AI",
    heroSubtitle: "AI Coaching, Workshops & Automation Services",
    hero: {
      tagline: "Empowering businesses through artificial intelligence"
    },
    getStarted: "Get Started",
    nextGenSolutions: "Next-Gen AI Solutions",
    
    // Stats
    clients: "Clients",
    successRate: "Success Rate",
    support: "Support",
    
    // Why Choose Us
    whyChooseUs: "Why Choose Us",
    aiCoaching: "AI Coaching",
    workshops: "Workshops",
    automation: "Automation",
    expertTraining: "Expert Training",
    tailoredSolutions: "Tailored Solutions",
    futureProofing: "Future-Proofing",
    
    // Why Choose Us with items structure
    "whyChooseUs.title": "Why Choose Us",
    "whyChooseUs.subtitle": "We help businesses leverage AI to drive innovation, efficiency, and exponential growth.",
    "whyChooseUs.items.0.title": "AI Coaching",
    "whyChooseUs.items.0.description": "Personalized coaching to help your team master AI technologies",
    "whyChooseUs.items.1.title": "Workshops",
    "whyChooseUs.items.1.description": "Interactive sessions to upskill your entire team",
    "whyChooseUs.items.2.title": "Automation",
    "whyChooseUs.items.2.description": "Streamline operations by automating repetitive tasks",
    
    // Services
    ourServices: "Our Services",
    viewDetails: "View Details",
    comprehensiveSolutions: "Comprehensive AI Solutions",
    "services.tailoredSolutions": "Tailored artificial intelligence solutions designed to transform your business operations",
    
    // Case Studies
    successStories: "Success Stories",
    realResults: "Real Results, Real Impact",
    "caseStudies.subtitle": "Discover how AI Express has transformed businesses across industries with cutting-edge AI solutions",
    
    // About
    mission: "Mission",
    vision: "Vision",
    ourTeam: "Our Team",
    coreValues: "Core Values",
    purpose: "Our Purpose",
    missionVision: "Mission & Vision",
    whatDrivesUs: "What Drives Us",
    
    // Nested About translations
    "about.title": "About AI Express",
    "about.subtitle": "We are a team of AI experts passionate about transforming businesses through cutting-edge artificial intelligence solutions.",
    "about.founded": "Founded in 2020, AI Express has helped over 200 companies leverage AI to drive innovation, efficiency, and sustainable growth.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To democratize artificial intelligence and make it accessible to businesses of all sizes, enabling them to thrive in the digital age.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "A world where every business leverages AI to drive innovation, efficiency, and growth.",
    "about.team.title": "Meet Our Team",
    "about.team.subtitle": "Our experts bring together decades of experience in AI, machine learning, and business transformation",
    
    // Contact
    contactUs: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    scheduleConsultation: "Schedule Free Consultation",
    getInTouch: "Get In Touch",
    startJourney: "Start Your AI Journey",
    scheduleNow: "Schedule Now",
    // Add missing contact keys
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    
    // Contact with nested structure
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? Get in touch with our AI experts",
    "contact.consultation": "Schedule Free Consultation",
    "contact.bookConsultation": "Book a 30-minute consultation with our AI experts to discuss your business needs and opportunities.",
    "contact.info.email": "ai-express@outlook.com",
    "contact.info.phone": "+43 670 5554177",

    
    // Contact Form
    identity: "Identity",
    dataChannel: "Data Channel",
    transmissionContent: "Transmission Content",
    enterName: "Enter your name",
    enterEmail: "your.email@domain.com",
    composeMessage: "Compose your message...",
    transmitting: "Transmitting...",
    sendTransmission: "Send Transmission",
    messageTransmitted: "Message Transmitted",
    responseIncoming: "Your message has been received. Response incoming...",
    initiateContact: "Initiate Contact",
    secureProtocol: "Secure transmission protocol",
    errorOccurred: "Error Occurred",
    errorMessage: "There was an issue sending your message. Please try again."
  }
};

// German translations
const deTranslations = {
  translation: {
    // Navigation
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    whyChooseUs: "Warum wir",
    caseStudies: "Fallstudien",
    
    // Hero Section
    heroTitle: "Verwandeln Sie Ihr Unternehmen mit KI",
    heroSubtitle: "KI-Coaching, Workshops und Automatisierungsdienste",
    hero: {
      tagline: "Unternehmen durch künstliche Intelligenz stärken"
    },
    getStarted: "Loslegen",
    nextGenSolutions: "Next-Gen KI-Lösungen",
    
    // Stats
    clients: "Kunden",
    successRate: "Erfolgsrate",
    support: "Support",
    
    // Why Choose Us
    whyChooseUs: "Warum wir",
    aiCoaching: "KI-Coaching",
    workshops: "Workshops",
    automation: "Automatisierung",
    expertTraining: "Experten-Schulung",
    tailoredSolutions: "Maßgeschneiderte Lösungen",
    futureProofing: "Zukunftssicherheit",
    
    // Warum wir with items structure
    "whyChooseUs.title": "Warum wir",
    "whyChooseUs.subtitle": "Wir helfen Unternehmen, KI zu nutzen, um Innovation, Effizienz und exponentielles Wachstum voranzutreiben.",
    "whyChooseUs.items.0.title": "KI-Coaching",
    "whyChooseUs.items.0.description": "Personalisiertes Coaching, um Ihrem Team KI-Technologien zu vermitteln",
    "whyChooseUs.items.1.title": "Workshops",
    "whyChooseUs.items.1.description": "Interaktive Sitzungen zur Qualifizierung Ihres gesamten Teams",
    "whyChooseUs.items.2.title": "Automatisierung",
    "whyChooseUs.items.2.description": "Optimierung der Abläufe durch Automatisierung repetitiver Aufgaben",
    
    // Services
    ourServices: "Unsere Dienstleistungen",
    viewDetails: "Details anzeigen",
    comprehensiveSolutions: "Umfassende KI-Lösungen",
    "services.tailoredSolutions": "Maßgeschneiderte KI-Lösungen zur Transformation Ihrer Geschäftsabläufe",
    
    // Case Studies
    successStories: "Erfolgsgeschichten",
    realResults: "Reale Ergebnisse, echte Auswirkungen",
    "caseStudies.subtitle": "Entdecken Sie, wie AI Express Unternehmen branchenübergreifend mit modernsten KI-Lösungen transformiert hat",
    
    // About
    mission: "Mission",
    vision: "Vision",
    ourTeam: "Unser Team",
    coreValues: "Kernwerte",
    purpose: "Unser Zweck",
    missionVision: "Mission & Vision",
    whatDrivesUs: "Was uns antreibt",
    
    // Nested About translations
    "about.title": "Über AI Express",
    "about.subtitle": "Wir sind ein Team von KI-Experten, die leidenschaftlich daran arbeiten, Unternehmen durch bahnbrechende KI-Lösungen zu transformieren.",
    "about.founded": "Seit 2020 hat AI Express über 200 Unternehmen dabei geholfen, KI zu nutzen, um Innovation, Effizienz und nachhaltiges Wachstum voranzutreiben.",
    "about.mission.title": "Unsere Mission",
    "about.mission.description": "Künstliche Intelligenz zu demokratisieren und für Unternehmen aller Größen zugänglich zu machen, damit sie im digitalen Zeitalter erfolgreich sind.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description": "Eine Welt, in der jedes Unternehmen KI nutzt, um Innovation, Effizienz und Wachstum voranzutreiben.",
    "about.team.title": "Unser Team kennenlernen",
    "about.team.subtitle": "Unsere Experten vereinen jahrzehntelange Erfahrung in KI, maschinellem Lernen und Unternehmensumstellung",
    
    // Contact
    contactUs: "Kontaktieren Sie uns",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    sendMessage: "Nachricht senden",
    scheduleConsultation: "Kostenlose Beratung vereinbaren",
    getInTouch: "Kontakt aufnehmen",
    startJourney: "Beginnen Sie Ihre KI-Reise",
    scheduleNow: "Jetzt vereinbaren",
    // Add missing contact keys
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.address": "Adresse",
    
    // Contact with nested structure
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Haben Sie Fragen? Kontaktieren Sie unsere KI-Experten",
    "contact.consultation": "Kostenlose Beratung vereinbaren",
    "contact.bookConsultation": "Buchen Sie eine 30-minütige Beratung mit unseren KI-Experten, um Ihre Geschäftsanforderungen und -möglichkeiten zu besprechen.",
    "contact.info.email": "ai-express@outlook.com",
    "contact.info.phone": "+49 123 456789",
    "contact.info.address": "Technikstraße 123, Berlin, Deutschland",
    
    // Contact Form
    identity: "Identität",
    dataChannel: "Datenkanal",
    transmissionContent: "Übertragungsinhalt",
    enterName: "Geben Sie Ihren Namen ein",
    enterEmail: "ihre.email@domain.de",
    composeMessage: "Verfassen Sie Ihre Nachricht...",
    transmitting: "Übertragung...",
    sendTransmission: "Senden",
    messageTransmitted: "Nachricht gesendet",
    responseIncoming: "Ihre Nachricht wurde empfangen. Antwort unterwegs...",
    initiateContact: "Kontakt aufnehmen",
    secureProtocol: "Sicherer Übertragungsprotokoll",
    errorOccurred: "Fehler aufgetreten",
    errorMessage: "Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es erneut."
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      de: deTranslations
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;