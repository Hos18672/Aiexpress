import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ 
  children, 
  className = '', 
  id,
  padding = 'py-16 md:py-24' 
}) => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };
  
  return (
    <motion.section
      id={id}
      className={`${padding} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;