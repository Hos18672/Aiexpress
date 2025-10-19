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
    
    // Services
    ourServices: "Our Services",
    viewDetails: "View Details",
    comprehensiveSolutions: "Comprehensive AI Solutions",
    
    // Case Studies
    successStories: "Success Stories",
    realResults: "Real Results, Real Impact",
    
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
    "about.mission.title": "Our Mission",
    "about.mission.description": "To democratize artificial intelligence and make it accessible to businesses of all sizes, enabling them to thrive in the digital age.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "A world where every business leverages AI to drive innovation, efficiency, and growth.",
    "about.team.title": "Meet Our Team",
    
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
    
    // Contact with nested structure
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? Get in touch with our AI experts",
    "contact.consultation": "Schedule Free Consultation",
    "contact.info.email": "contact@aiexpress.com",
    "contact.info.phone": "+1 (555) 123-4567",
    "contact.info.address": "123 Tech Street, San Francisco, CA",
    
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
    
    // CTA
    launchTransformation: "Launch Your AI Transformation",
    joinCompanies: "Join hundreds of forward-thinking companies leveraging AI to drive innovation, efficiency, and exponential growth.",
    readyToTransform: "Ready to Transform?",
    scheduleFreeConsultation: "Schedule Free Consultation",
    secureConfidential: "Secure & Confidential",
    quickSetup: "Quick Setup",
    provenResults: "Proven Results",
    
    // Admin
    adminPanel: "Admin Panel",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard",
    manageContent: "Manage Content",
    manageServices: "Manage Services",
    manageTranslations: "Manage Translations",
    
    // Footer
    sections: "Sections",
    
    // Common
    close: "Close",
    exploreServices: "Explore Services"
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
    
    // Services
    ourServices: "Unsere Dienstleistungen",
    viewDetails: "Details anzeigen",
    comprehensiveSolutions: "Umfassende KI-Lösungen",
    
    // Case Studies
    successStories: "Erfolgsgeschichten",
    realResults: "Reale Ergebnisse, echte Auswirkungen",
    
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
    "about.mission.title": "Unsere Mission",
    "about.mission.description": "Künstliche Intelligenz zu demokratisieren und für Unternehmen aller Größen zugänglich zu machen, damit sie im digitalen Zeitalter erfolgreich sind.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description": "Eine Welt, in der jedes Unternehmen KI nutzt, um Innovation, Effizienz und Wachstum voranzutreiben.",
    "about.team.title": "Unser Team kennenlernen",
    
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
    
    // Contact with nested structure
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Haben Sie Fragen? Kontaktieren Sie unsere KI-Experten",
    "contact.consultation": "Kostenlose Beratung vereinbaren",
    "contact.info.email": "kontakt@aiexpress.de",
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
    
    // CTA
    launchTransformation: "Starten Sie Ihre KI-Transformation",
    joinCompanies: "Schließen Sie sich hunderten von zukunftsorientierten Unternehmen an, die KI nutzen, um Innovation, Effizienz und exponentielles Wachstum voranzutreiben.",
    readyToTransform: "Bereit für die Transformation?",
    scheduleFreeConsultation: "Kostenlose Beratung vereinbaren",
    secureConfidential: "Sicher & Vertraulich",
    quickSetup: "Schnelle Einrichtung",
    provenResults: "Bewährte Ergebnisse",
    
    // Admin
    adminPanel: "Admin-Bereich",
    login: "Anmelden",
    logout: "Abmelden",
    dashboard: "Dashboard",
    manageContent: "Inhalte verwalten",
    manageServices: "Dienstleistungen verwalten",
    manageTranslations: "Übersetzungen verwalten",
    
    // Footer
    sections: "Abschnitte",
    
    // Common
    close: "Schließen",
    exploreServices: "Dienste erkunden"
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