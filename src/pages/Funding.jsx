import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { AlertTriangle, Calendar, FileText, CheckCircle } from 'lucide-react';

const Funding = () => {
  const { t } = useLanguage();

  const fundingPrograms = [
    {
      title: t('funding.programs.0.title'),
      description: t('funding.programs.0.description'),
      highlight: t('funding.programs.0.highlight')
    },
    {
      title: t('funding.programs.1.title'),
      description: t('funding.programs.1.description')
    },
    {
      title: t('funding.programs.2.title'),
      description: t('funding.programs.2.description')
    }
  ];

  const timelineSteps = [
    {
      title: t('funding.timeline.steps.0.title'),
      description: t('funding.timeline.steps.0.description')
    },
    {
      title: t('funding.timeline.steps.1.title'),
      description: t('funding.timeline.steps.1.description')
    },
    {
      title: t('funding.timeline.steps.2.title'),
      description: t('funding.timeline.steps.2.description')
    },
    {
      title: t('funding.timeline.steps.3.title'),
      description: t('funding.timeline.steps.3.description')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {t('funding.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {t('funding.intro')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-accent">
              <Calendar className="w-5 h-5 mr-2" />
              {t('funding.cta.button')}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10">
              <FileText className="w-5 h-5 mr-2" />
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Alert Section */}
      <SectionWrapper className="py-10 bg-yellow-900/20 border-y border-yellow-500/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">{t('funding.alert.title')}</h3>
              <p className="text-gray-300">{t('funding.alert.description')}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Funding Programs */}
      <SectionWrapper className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('funding.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('funding.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fundingPrograms.map((program, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                {program.highlight && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-primary font-semibold">{program.highlight}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('funding.timeline.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('funding.intro')}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:translate-x-1"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                      <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-gray-900 flex items-center justify-center z-10 transform md:translate-x-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8 md:text-left">
                    {/* Empty for spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('funding.cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('funding.cta.description')}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
            {t('funding.cta.button')}
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Funding;