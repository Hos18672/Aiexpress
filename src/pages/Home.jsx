import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import AnimatedLogo from '../components/ui/AnimatedLogo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Newsletter from '../components/ui/Newsletter';
import Testimonials from '../components/ui/Testimonials';
import TeamMemberCard from '../components/about/TeamMemberCard';
import ContactForm from '../components/forms/ContactForm';
import AICoachingCard from '../components/ui/AICoachingCard';
import { 
  Bot, 
  Users, 
  Settings, 
  GraduationCap, 
  Wrench, 
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  User,
  Building,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  Rocket,
  Globe
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Home = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const serviceIcons = {
    coaching: <Bot className="w-8 h-8 text-white" />,
    workshops: <Users className="w-8 h-8 text-white" />,
    automation: <Settings className="w-8 h-8 text-white" />,
    analytics: <TrendingUp className="w-8 h-8 text-white" />,
    custom: <Wrench className="w-8 h-8 text-white" />,
    strategy: <Target className="w-8 h-8 text-white" />
  };

  const teamMembers = [
    {
      name: "Reza Hossaini",
      role: "CTO & Gründer",
      image: "https://muwgjsyjyyzzfmzpwrns.supabase.co/storage/v1/object/sign/photos/reza_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82Yzg3YzMxYS0yOTA0LTQ4OGMtYjczNC1kNWQyMTgxZGQ3MzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvcmV6YV8zLnBuZyIsImlhdCI6MTc2MTE1Nzc2NSwiZXhwIjoxNzkyNjkzNzY1fQ.vT9JW9j3XRRhU4-4nDpRa-h4QBGgI91sSMg5-efoj7Y"
    },
    {
      name: "Hikmatullah Razaghi",
      role: "CTO & Gründer",
      image: "https://muwgjsyjyyzzfmzpwrns.supabase.co/storage/v1/object/sign/photos/Hikmat.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82Yzg3YzMxYS0yOTA0LTQ4OGMtYjczNC1kNWQyMTgxZGQ3MzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvSGlrbWF0LnBuZyIsImlhdCI6MTc2MTE1NzE2NiwiZXhwIjoyMzkxODc3MTY2fQ.GP7XWz53K4IASC63_wA1_KOjr0eLujorkkyyneChErc"
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: {
        en: "Retail Analytics Transformation",
        de: "Einzelhandelsanalyse-Transformation"
      },
      company: "FashionHub",
      industry: "Retail",
      challenge: {
        en: "FashionHub needed to optimize inventory management and personalize customer experiences.",
        de: "FashionHub musste das Bestandsmanagement optimieren und Kundenerlebnisse personalisieren."
      },
      solution: {
        en: "Implemented AI-powered demand forecasting and recommendation engine.",
        de: "Implementierung von KI-gestützter Nachfrageprognose und Empfehlungsmotor."
      },
      results: {
        en: "35% reduction in excess inventory, 28% increase in customer engagement.",
        de: "35% Reduzierung des überschüssigen Bestands, 28% Steigerung der Kundenbindung."
      },
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: {
        en: "Manufacturing Process Automation",
        de: "Automatisierung von Fertigungsprozessen"
      },
      company: "AutoTech Industries",
      industry: "Manufacturing",
      challenge: {
        en: "Manual quality control processes were slow and error-prone.",
        de: "Manuelle Qualitätskontrollprozesse waren langsam und fehleranfällig."
      },
      solution: {
        en: "Deployed computer vision systems for real-time defect detection.",
        de: "Bereitstellung von Computer-Vision-Systemen zur Echtzeit-Fehlererkennung."
      },
      results: {
        en: "99.2% accuracy in defect detection, 40% faster production line.",
        de: "99,2% Genauigkeit bei der Fehlererkennung, 40% schnellerer Produktionsablauf."
      },
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Move contactInfo inside the component to ensure access to the t function
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: t('contact.email') || "Email",
      content: t('contact.info.email') || "contact@aiexpress.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: t('contact.phone') || "Phone",
      content: t('contact.info.phone') || "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t('contact.address') || "Address",
      content: t('contact.info.address') || "123 Tech Street, San Francisco, CA"
    }
  ];

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash
      const hash = '#' + sectionId;
      window.history.pushState(null, null, hash);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <SectionWrapper id="home" className="min-h-screen flex items-center relative">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(79, 156, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 156, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('nextGenSolutions')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {t('heroTitle')}
              </motion.span>
            </h1>

            <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <p className="text-gray-400 mb-10 max-w-2xl text-lg">
              {t('hero.tagline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('contact');
                    }
                  }}
                  size="lg" 
                  className="px-10 py-4 text-lg relative overflow-hidden group bg-gradient-to-r from-primary to-accent"
                  tabIndex={0}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    {t('getStarted')}
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('services')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection('services');
                    }
                  }}
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-4 text-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
                  tabIndex={0}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  {t('exploreServices')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={heroVariants} 
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ perspective: 1000 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full" />
                <AnimatedLogo size="lg" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper id="why-choose-us" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('whyChooseUs')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('whyChooseUs.title')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('whyChooseUs.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex">
              <AICoachingCard 
                title={t('whyChooseUs.items.0.title') || "AI Coaching"}
                subtitle={t('whyChooseUs.items.0.description') || "Personalized coaching to help your team master AI technologies"}
                icon={<Bot className="w-8 h-8 text-white" />}
                accentColor="#64c8ff"
              />
            </div>
            <div className="flex">
              <AICoachingCard 
                title={t('whyChooseUs.items.1.title') || "Workshops"}
                subtitle={t('whyChooseUs.items.1.description') || "Interactive sessions to upskill your entire team"}
                icon={<Users className="w-8 h-8 text-white" />}
                accentColor="#64c8ff"
              />
            </div>
            <div className="flex">
              <AICoachingCard 
                title={t('whyChooseUs.items.2.title') || "Automation"}
                subtitle={t('whyChooseUs.items.2.description') || "Streamline operations by automating repetitive tasks"}
                icon={<Settings className="w-8 h-8 text-white" />}
                accentColor="#64c8ff"
              />
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services" className="relative">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('ourServices')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('comprehensiveSolutions')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('services.tailoredSolutions')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <AICoachingCard 
                  title={service.title[currentLanguage] || service.title.en}
                  subtitle={service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  icon={serviceIcons[service.category] || <Zap className="w-8 h-8 text-white" />}
                  accentColor="#64c8ff"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Case Studies Section */}
      <SectionWrapper id="case-studies" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('successStories')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('realResults')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('caseStudies.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
              >
                <AICoachingCard 
                  title={study.title[currentLanguage] || study.title.en}
                  subtitle={`${study.company} • ${study.industry}`}
                  icon={<Target className="w-8 h-8 text-white" />}
                  accentColor="#64c8ff"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
              >
                <Building className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">{t('about')}</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t('about.title')}
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {t('about.subtitle')}
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                {t('about.founded')}
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="relative flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ perspective: 1000 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-3xl rounded-full" />
                  <AnimatedLogo size="md" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div variants={itemVariants}>
              <AICoachingCard 
                title={t('about.mission.title') || "Our Mission"}
                subtitle={t('about.mission.description') || "To democratize artificial intelligence and make it accessible to businesses of all sizes, enabling them to thrive in the digital age."}
                icon={<Shield className="w-8 h-8 text-white" />}
                accentColor="#64c8ff"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AICoachingCard 
                title={t('about.vision.title') || "Our Vision"}
                subtitle={t('about.vision.description') || "A world where every business leverages AI to drive innovation, efficiency, and growth."}
                icon={<Eye className="w-8 h-8 text-white" />}
                accentColor="#64c8ff"
              />
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('ourTeam')}</span>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('about.team.title')}
              </span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg "
            >
              {t('about.team.subtitle')}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className={`grid gap-8 ${
              teamMembers.length === 1 
                ? 'grid-cols-1' 
                : teamMembers.length === 2 
                  ? 'grid-cols-1 sm:grid-cols-2' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <TeamMemberCard member={member} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-20">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('getInTouch')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto text-lg"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <Card className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative z-10">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">
                          {t('scheduleConsultation')}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {t('contact.bookConsultation')}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            onClick={() => scrollToSection('contact')}
                            size="md" 
                            className="flex items-center bg-gradient-to-r from-primary to-accent"
                          >
                            <Clock className="w-4 h-4 mr-2" />
                            {t('scheduleNow')}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 bg-gray-800/50 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1 text-white">{info.title}</h4>
                          <p className="text-gray-300">{info.content}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
      {/* CTA Section */}
      <SectionWrapper id="cta" className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 border-2 border-primary/20 overflow-hidden"
        >
          {/* Futuristic grid background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(79, 156, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(79, 156, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full" />

          {/* Animated border */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
            >
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('readyToTransform')}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                {t('launchTransformation')}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-10 text-xl leading-relaxed"
            >
              {t('joinCompanies')}
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg" 
                  className="px-12 py-5 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    <User className="w-5 h-5 mr-3" />
                    {t('scheduleFreeConsultation')}
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>{t('cta.trustIndicators.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>{t('cta.trustIndicators.quick')}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>{t('cta.trustIndicators.proven')}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-primary/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />

            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {selectedService.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {selectedService.title[currentLanguage] || selectedService.title.en}
                  </h3>
                </div>
                <motion.button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-3xl leading-none ml-4 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              <div className="mb-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/30">
                  {serviceIcons[selectedService.category] || <Zap className="w-10 h-10 text-white" />}
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {selectedService.description[currentLanguage] || selectedService.description.en}
              </p>

              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent"
                    onClick={() => setSelectedService(null)}
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    {t('getStarted')}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline"
                    className="border-gray-700 hover:border-primary"
                    onClick={() => setSelectedService(null)}
                  >
                    {t('close')}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;