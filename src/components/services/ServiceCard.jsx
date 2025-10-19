import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

const ServiceCard = ({ service, currentLanguage, onOpenDetails, icon }) => {
  const { t } = useLanguage();
  
  // Animation variants from JSON
  const cardVariants = {
    initial: { opacity: 0, y: 25, scale: 0.95 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(79,156,255,0.35)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <Card 
        className="h-full p-6 flex flex-col cursor-pointer group"
        onClick={() => onOpenDetails(service)}
      >
        <div className="mb-4 group-hover:text-accent transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {service.title[currentLanguage] || service.title.en}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">
          {service.description[currentLanguage] || service.description.en}
        </p>
        <Button variant="outline" className="mt-auto">
          {t('viewDetails')}
        </Button>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;