import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAnimatedBorder } from '../hooks/useAnimatedBorder';
import { 
  Target, 
  Wrench, 
  TrendingUp, 
  FileText,
  ArrowRight
} from 'lucide-react';

const CaseStudyCard = ({ study, currentLanguage }) => {
  const { borderCanvasRef, isHovered, borderEventHandlers } = useAnimatedBorder();
  
  return (
    <div 
      {...borderEventHandlers}
      className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
      style={{ 
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: isHovered 
          ? '0 30px 60px -12px rgba(100, 200, 255, 0.1), 0 0 100px rgba(100, 200, 255, 0.2)' 
          : '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Animated border canvas */}
      <canvas
        ref={borderCanvasRef}
        className="absolute pointer-events-none"
        style={{ zIndex: 20 }}
      />

      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img 
            src={study.image} 
            alt={study.title[currentLanguage] || study.title.en}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">
                {study.title[currentLanguage] || study.title.en}
              </h3>
              <p className="text-primary">{study.company} • {study.industry}</p>
            </div>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm flex items-center">
              <Wrench className="w-4 h-4 mr-1" />
              AI Solution
            </span>
          </div>
          
          <div className="space-y-4 mb-6 flex-grow">
            <div>
              <h4 className="font-semibold text-gray-300 mb-1 flex items-center">
                <Target className="w-4 h-4 mr-2 text-secondary" />
                Challenge
              </h4>
              <p className="text-gray-400">
                {study.challenge[currentLanguage] || study.challenge.en}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-300 mb-1 flex items-center">
                <Wrench className="w-4 h-4 mr-2 text-accent" />
                Solution
              </h4>
              <p className="text-gray-400">
                {study.solution[currentLanguage] || study.solution.en}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-300 mb-1 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Results
              </h4>
              <p className="text-gray-400">
                {study.results[currentLanguage] || study.results.en}
              </p>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-auto">
            <div className="flex items-center justify-center">
              View Full Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

const CaseStudies = () => {
  const { currentLanguage } = useLanguage();

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
    },
    {
      id: 3,
      title: {
        en: "Financial Risk Assessment",
        de: "Finanzielle Risikobewertung"
      },
      company: "GlobalBank",
      industry: "Finance",
      challenge: {
        en: "Traditional credit scoring methods were inadequate for new customer segments.",
        de: "Traditionelle Kreditscoring-Methoden waren unzureichend für neue Kundensegmente."
      },
      solution: {
        en: "Developed machine learning models for comprehensive risk profiling.",
        de: "Entwicklung von Machine-Learning-Modellen für umfassende Risikoprofilierung."
      },
      results: {
        en: "60% improvement in risk prediction accuracy, 15% increase in loan approval rate.",
        de: "60% Verbesserung der Risikoprognosegenauigkeit, 15% Steigerung der Kreditgenehmigungsrate."
      },
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <SectionWrapper className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <FileText className="w-8 h-8 mr-3" />
              Case Studies
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Real-world examples of how AI Express has transformed businesses across industries.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Case Studies Grid */}
      <SectionWrapper className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CaseStudyCard study={study} currentLanguage={currentLanguage} />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CaseStudies;