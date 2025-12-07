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
    
    // CTA
    launchTransformation: "Launch Your AI Transformation",
    joinCompanies: "Join hundreds of forward-thinking companies leveraging AI to drive innovation, efficiency, and exponential growth.",
    readyToTransform: "Ready to Transform?",
    scheduleFreeConsultation: "Schedule Free Consultation",
    secureConfidential: "Secure & Confidential",
    quickSetup: "Quick Setup",
    provenResults: "Proven Results",
    "cta.trustIndicators.secure": "Secure & Confidential",
    "cta.trustIndicators.quick": "Quick Setup",
    "cta.trustIndicators.proven": "Proven Results",
    
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
    "footer.description": "Transforming businesses through cutting-edge AI solutions. We provide AI Coaching, Workshops, and Automation Services for business transformation.",
    "footer.rights": "All rights reserved",
    
    // Common
    close: "Close",
    exploreServices: "Explore Services",
    
    // Privacy Policy
    "privacyPolicy.nav": "Privacy Policy",
    "privacyPolicy.title": "Privacy Policy",
    "privacyPolicy.lastUpdated": "Last Updated: December 2024",
    "privacyPolicy.introduction.title": "Introduction",
    "privacyPolicy.introduction.content": "We are very pleased that you are interested in our company. Data protection is of particularly high importance to the management of AI Express. Using the internet pages of AI Express is fundamentally possible without providing any personal data. However, if a data subject wishes to make use of special services offered by our company via our website, processing of personal data may become necessary. If processing of personal data becomes necessary and there is no legal basis for such processing, we generally obtain consent from the data subject.",
    "privacyPolicy.scope.title": "Scope of Processing Personal Data",
    "privacyPolicy.scope.content": "We process personal data of our users only insofar as this is necessary for the provision of a functional website as well as our content and services. The processing of personal data of our users is carried out regularly only with the consent of the user. An exception applies in cases where prior consent cannot be obtained for factual reasons and the processing of the data is permitted by law.",
    "privacyPolicy.rights.title": "Rights of the Data Subject",
    "privacyPolicy.rights.item1": "Right of access: You have the right to request confirmation from the controller as to whether personal data concerning you is being processed.",
    "privacyPolicy.rights.item2": "Right to rectification: You have the right to request the controller to rectify any inaccurate personal data concerning you.",
    "privacyPolicy.rights.item3": "Right to erasure: You have the right to request the controller to erase personal data concerning you without undue delay.",
    "privacyPolicy.rights.item4": "Right to restriction of processing: You have the right to request the controller to restrict processing.",
    "privacyPolicy.rights.item5": "Right to object: You have the right to object at any time, for reasons arising from your particular situation, to the processing of personal data concerning you.",
    "privacyPolicy.cookies.title": "Cookies",
    "privacyPolicy.cookies.content": "The internet pages of AI Express use cookies. Cookies are text files stored via an internet browser on the user's computer system. Numerous internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which internet pages and servers can be assigned to the specific internet browser in which the cookie was stored. This enables visited internet pages and servers to distinguish the individual browser of the user from other internet browsers that contain other cookies. A specific internet browser can be recognized and identified again via the unique cookie ID.",
    "privacyPolicy.contact.title": "Contact Possibility",
    "privacyPolicy.contact.content": "The internet pages of AI Express contain information that enables rapid electronic contact with our company as well as direct communication with us, which also includes a general address of the so-called electronic mail (email address). If a data subject contacts the controller by email or via a contact form, the personal data transmitted by the data subject is automatically stored. These personal data transmitted voluntarily by the data subject to the controller are stored for the purposes of processing or contacting the data subject. There is no disclosure of these personal data to third parties.",
    
    // Cookie Policy
    "cookiePolicy.nav": "Cookie Policy",
    "cookiePolicy.title": "Cookie Policy",
    "cookiePolicy.lastUpdated": "Last Updated: December 2024",
    "cookiePolicy.whatAreCookies.title": "What Are Cookies?",
    "cookiePolicy.whatAreCookies.content": "Cookies are small text files that are stored on your computer or mobile device by websites when you visit them. They are widely used to ensure websites function properly, as well as to provide information about how websites are used, which helps us improve their functionality.",
    "cookiePolicy.howWeUse.title": "How We Use Cookies",
    "cookiePolicy.howWeUse.content": "We use cookies to understand and improve various aspects of our website. Our use of cookies includes:",
    "cookiePolicy.howWeUse.item1": "Essential Cookies: These cookies are absolutely necessary for our website to function and enable basic functions such as page navigation and access to secure areas of the website.",
    "cookiePolicy.howWeUse.item2": "Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit most frequently. All information collected by these cookies is aggregated and therefore anonymous.",
    "cookiePolicy.howWeUse.item3": "Functionality Cookies: These cookies enable our website to remember information that affects the way a website behaves or looks, such as your preferred language or the region you are in.",
    "cookiePolicy.thirdParty.title": "Third-Party Cookies",
    "cookiePolicy.thirdParty.content": "In some special cases, we also use cookies from trusted third parties. For example, we might use Google Analytics to understand how you use our website. Google Analytics placements are from Google Inc. The tracking code they use is set up so that it does not collect personal data such as names, email addresses or phone numbers. Instead, we receive anonymized data that helps us improve the website.",
    "cookiePolicy.control.title": "Control Over Cookies",
    "cookiePolicy.control.content": "You can control or even reject cookies by adjusting your browser settings. However, note that disabling cookies may affect the functionality of many websites. Most browsers offer you the ability to manage cookies - for example, by rejecting all cookies or being notified when a cookie is sent. The appropriate settings can usually be found in the 'Options' or 'Preferences' menu of your browser.",
    "cookiePolicy.changes.title": "Changes to This Policy",
    "cookiePolicy.changes.content": "We may update this Cookie Policy from time to time. Any changes will be published on this page. We recommend that you check this page regularly for changes to ensure that you are satisfied with the updated information."
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
    
    // CTA
    launchTransformation: "Starten Sie Ihre KI-Transformation",
    joinCompanies: "Schließen Sie sich hunderten von zukunftsorientierten Unternehmen an, die KI nutzen, um Innovation, Effizienz und exponentielles Wachstum voranzutreiben.",
    readyToTransform: "Bereit für die Transformation?",
    scheduleFreeConsultation: "Kostenlose Beratung vereinbaren",
    secureConfidential: "Sicher & Vertraulich",
    quickSetup: "Schnelle Einrichtung",
    provenResults: "Bewährte Ergebnisse",
    "cta.trustIndicators.secure": "Sicher & Vertraulich",
    "cta.trustIndicators.quick": "Schnelle Einrichtung",
    "cta.trustIndicators.proven": "Bewährte Ergebnisse",
    
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
    "footer.description": "Transformation von Unternehmen durch bahnbrechende KI-Lösungen. Wir bieten KI-Coaching, Workshops und Automatisierungsdienste für Unternehmensumstellungen.",
    "footer.rights": "Alle Rechte vorbehalten",
    
    // Common
    close: "Schließen",
    exploreServices: "Dienste erkunden",
    
    // Privacy Policy
    "privacyPolicy.nav": "Datenschutz",
    "privacyPolicy.title": "Datenschutzerklärung",
    "privacyPolicy.lastUpdated": "Letzte Aktualisierung: Dezember 2024",
    "privacyPolicy.introduction.title": "Einleitung",
    "privacyPolicy.introduction.content": "Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der AI Express. Eine Nutzung der Internetseiten der AI Express ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.",
    "privacyPolicy.scope.title": "Umfang der Verarbeitung personenbezogener Daten",
    "privacyPolicy.scope.content": "Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.",
    "privacyPolicy.rights.title": "Rechte der betroffenen Person",
    "privacyPolicy.rights.item1": "Auskunftsrecht: Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.",
    "privacyPolicy.rights.item2": "Berichtigungsrecht: Sie haben das Recht, von dem Verantwortlichen die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.",
    "privacyPolicy.rights.item3": "Löschungsrecht: Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden.",
    "privacyPolicy.rights.item4": "Einschränkungsrecht: Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen.",
    "privacyPolicy.rights.item5": "Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.",
    "privacyPolicy.cookies.title": "Cookies",
    "privacyPolicy.cookies.content": "Die Internetseiten der AI Express verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf dem Computersystem des Nutzers abgelegt werden. Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, einzelne Browser der Nutzer von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.",
    "privacyPolicy.contact.title": "Kontaktmöglichkeit",
    "privacyPolicy.contact.content": "Die Internetseiten der AI Express enthalten Informationen, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular mit dem für die Verarbeitung Verantwortlichen in Kontakt tritt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Diese personenbezogenen Daten, die eine betroffene Person freiwillig an den für die Verarbeitung Verantwortlichen übermittelt, werden für die Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.",
    
    // Cookie Policy
    "cookiePolicy.nav": "Cookie-Richtlinie",
    "cookiePolicy.title": "Cookie-Richtlinie",
    "cookiePolicy.lastUpdated": "Letzte Aktualisierung: Dezember 2024",
    "cookiePolicy.whatAreCookies.title": "Was sind Cookies?",
    "cookiePolicy.whatAreCookies.content": "Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie diese besuchen. Sie werden weit verbreitet verwendet, um sicherzustellen, dass Websites ordnungsgemäß funktionieren, sowie um Informationen darüber bereitzustellen, wie Websites verwendet werden, was uns hilft, deren Funktion zu verbessern.",
    "cookiePolicy.howWeUse.title": "Wie wir Cookies verwenden",
    "cookiePolicy.howWeUse.content": "Wir verwenden Cookies, um verschiedene Aspekte unserer Website zu verstehen und zu verbessern. Unsere Verwendung von Cookies umfasst:",
    "cookiePolicy.howWeUse.item1": "Notwendige Cookies: Diese Cookies sind für das Funktionieren unserer Website unbedingt erforderlich und ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.",
    "cookiePolicy.howWeUse.item2": "Leistungs-Cookies: Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen, z.B. welche Seiten Sie am häufigsten besuchen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.",
    "cookiePolicy.howWeUse.item3": "Funktionalitäts-Cookies: Diese Cookies ermöglichen es unserer Website, sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Website verhält oder aussieht, wie z.B. Ihre bevorzugte Sprache oder die Region, in der Sie sich befinden.",
    "cookiePolicy.thirdParty.title": "Third-Party Cookies",
    "cookiePolicy.thirdParty.content": "In einigen Sonderfällen verwenden wir auch Cookies von vertrauenswürdigen Drittanbietern. Zum Beispiel könnten wir Google Analytics verwenden, um zu verstehen, wie Sie unsere Website nutzen. Google Analytics-Platzierungen sind von Google Inc. Der von ihnen verwendete Tracking-Code ist so eingestellt, dass er keine persönlichen Daten wie Namen, E-Mail-Adressen oder Telefonnummern sammelt. Stattdessen erhalten wir anonymisierte Daten, die uns helfen, die Website zu verbessern.",
    "cookiePolicy.control.title": "Kontrolle über Cookies",
    "cookiePolicy.control.content": "Sie können Cookies kontrollieren oder sogar ablehnen, indem Sie Ihre Browser-Einstellungen anpassen. Beachten Sie jedoch, dass das Deaktivieren von Cookies die Funktionalität vieler Websites beeinträchtigen kann. Die meisten Browser bieten Ihnen die Möglichkeit, Cookies zu verwalten – zum Beispiel, indem Sie alle Cookies ablehnen oder benachrichtigt werden, wenn ein Cookie gesendet wird. Die entsprechenden Einstellungen finden Sie normalerweise im Menü „Optionen“ oder „Einstellungen“ Ihres Browsers.",
    "cookiePolicy.changes.title": "Änderungen dieser Richtlinie",
    "cookiePolicy.changes.content": "Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Jegliche Änderungen werden auf dieser Seite veröffentlicht. Wir empfehlen Ihnen, diese Seite regelmäßig auf Änderungen zu überprüfen, um sicherzustellen, dass Sie mit den aktualisierten Informationen zufrieden sind."
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