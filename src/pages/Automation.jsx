import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Bot, Zap, Eye, Network, Users, Cpu } from 'lucide-react';

const Automation = () => {
  const { t } = useLanguage();

  const automationServices = [
    {
      title: t('automation.services.0.title'),
      description: t('automation.services.0.description'),
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: t('automation.services.1.title'),
      description: t('automation.services.1.description'),
      icon: <Network className="w-8 h-8" />
    },
    {
      title: t('automation.services.2.title'),
      description: t('automation.services.2.description'),
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: t('automation.services.3.title'),
      description: t('automation.services.3.description'),
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: t('automation.services.4.title'),
      description: t('automation.services.4.description'),
      icon: <Users className="w-8 h-8" />
    },
    {
      title: t('automation.services.5.title'),
      description: t('automation.services.5.description'),
      icon: <Eye className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {t('automation.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-accent">
              {t('contactUs')}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10">
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Automation Services */}
      <SectionWrapper className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('automation.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('services.title')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-primary/50 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  {t('learnMore')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('readyToTransform')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('joinCompanies')}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
            {t('scheduleFreeConsultation')}
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Automation;