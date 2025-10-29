import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder';

const ServiceCard = ({ service, currentLanguage, onOpenDetails, icon }) => {
  const { t } = useLanguage();
  const { borderCanvasRef, isHovered, borderEventHandlers } = useAnimatedBorder();
  
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
      {...borderEventHandlers}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
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
      </div>
    </motion.div>
  );
};

export default ServiceCard;