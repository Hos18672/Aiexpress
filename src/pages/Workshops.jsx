import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Calendar, Clock, Users, Award, Shield, BookOpen } from 'lucide-react';

const Workshops = () => {
  const { t } = useLanguage();

  const workshopTypes = [
    {
      title: t('workshops.internal.title'),
      description: t('workshops.internal.description'),
      icon: <Users className="w-8 h-8" />
    },
    {
      title: t('workshops.open.title'),
      description: t('workshops.open.description'),
      icon: <Users className="w-8 h-8" />
    }
  ];

  const topics = [
    t('workshops.topics.list.0'),
    t('workshops.topics.list.1'),
    t('workshops.topics.list.2'),
    t('workshops.topics.list.3'),
    t('workshops.topics.list.4')
  ];

  const upcomingWorkshops = [
    {
      title: t('workshops.upcoming.workshops.0.title'),
      description: t('workshops.upcoming.workshops.0.description'),
      duration: t('workshops.upcoming.workshops.0.duration'),
      participants: t('workshops.upcoming.workshops.0.participants'),
      spots: t('workshops.upcoming.workshops.0.spots')
    },
    {
      title: t('workshops.upcoming.workshops.1.title'),
      description: t('workshops.upcoming.workshops.1.description'),
      duration: t('workshops.upcoming.workshops.1.duration'),
      participants: t('workshops.upcoming.workshops.1.participants'),
      spots: t('workshops.upcoming.workshops.1.spots')
    },
    {
      title: t('workshops.upcoming.workshops.2.title'),
      description: t('workshops.upcoming.workshops.2.description'),
      duration: t('workshops.upcoming.workshops.2.duration'),
      participants: t('workshops.upcoming.workshops.2.participants'),
      spots: t('workshops.upcoming.workshops.2.spots')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {t('workshops.overview')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-accent">
              <Calendar className="w-5 h-5 mr-2" />
              {t('bookSession')}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10">
              <BookOpen className="w-5 h-5 mr-2" />
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Workshop Types */}
      <SectionWrapper className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services.workshops.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('services.workshops.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-primary/50 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  {t('learnMore')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Workshop Topics */}
      <SectionWrapper className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('workshops.topics.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('services.workshops.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compliance */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">{t('workshops.compliance.title')}</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">{t('workshops.compliance.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('workshops.compliance.description')}
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
            {t('contactUs')}
          </Button>
        </div>
      </SectionWrapper>

      {/* Upcoming Workshops */}
      <SectionWrapper className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('workshops.upcoming.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('workshops.compliance.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                  <p className="text-gray-300 mb-6">{workshop.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-5 h-5 mr-3" />
                      <span>{workshop.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Award className="w-5 h-5 mr-3" />
                      <span>{workshop.spots}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    {t('bookSession')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Workshops;