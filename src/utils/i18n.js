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
    
    // Hero Section
    heroTitle: "Transform Your Business with AI",
    heroSubtitle: "AI Coaching, Workshops & Automation Services",
    getStarted: "Get Started",
    
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
    
    // About
    mission: "Mission",
    vision: "Vision",
    ourTeam: "Our Team",
    
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
    
    // Contact with nested structure
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? Get in touch with our AI experts",
    "contact.consultation": "Schedule Free Consultation",
    "contact.info.email": "contact@aiexpress.com",
    "contact.info.phone": "+1 (555) 123-4567",
    "contact.info.address": "123 Tech Street, San Francisco, CA",
    
    // Admin
    adminPanel: "Admin Panel",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard",
    manageContent: "Manage Content",
    manageServices: "Manage Services",
    manageTranslations: "Manage Translations"
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
    
    // Hero Section
    heroTitle: "Verwandeln Sie Ihr Unternehmen mit KI",
    heroSubtitle: "KI-Coaching, Workshops und Automatisierungsdienste",
    getStarted: "Loslegen",
    
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
    
    // About
    mission: "Mission",
    vision: "Vision",
    ourTeam: "Unser Team",
    
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
    
    // Contact with nested structure
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Haben Sie Fragen? Kontaktieren Sie unsere KI-Experten",
    "contact.consultation": "Kostenlose Beratung vereinbaren",
    "contact.info.email": "kontakt@aiexpress.de",
    "contact.info.phone": "+49 123 456789",
    "contact.info.address": "Technikstraße 123, Berlin, Deutschland",
    
    // Admin
    adminPanel: "Admin-Bereich",
    login: "Anmelden",
    logout: "Abmelden",
    dashboard: "Dashboard",
    manageContent: "Inhalte verwalten",
    manageServices: "Dienstleistungen verwalten",
    manageTranslations: "Übersetzungen verwalten"
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