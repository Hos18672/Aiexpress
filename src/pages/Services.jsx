import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ServiceFilter from '../components/services/ServiceFilter';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/servicesData';
import { staggerContainer } from '../components/animations/motionVariants';

const Services = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {t('ourServices')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            {t('services.tailoredSolutions')}
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Category Filter */}
      <SectionWrapper className="py-8">
        <ServiceFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              currentLanguage={currentLanguage}
              onOpenDetails={setSelectedService}
            />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">
                  {selectedService.title[currentLanguage] || selectedService.title.en}
                </h3>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="text-4xl mb-4 text-center">{selectedService.icon}</div>
              <p className="text-gray-300 mb-6">
                {selectedService.description[currentLanguage] || selectedService.description.en}
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setSelectedService(null)}>{t('close')}</Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;