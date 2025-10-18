import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = false, 
  onClick,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden";
  
  const classes = `${baseClasses} ${className}`;
  
  // Enhanced animation variants matching AICoachingCard
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    hover: hoverEffect ? {
      y: -8,
      scale: 1.02,
      boxShadow: "0 0 40px rgba(79,156,255,0.3)",
      borderColor: "rgba(79,156,255,0.4)",
      transition: { 
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    } : {},
    tap: onClick ? {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.2 }
    } : {}
  };
  
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`${classes} rounded-xl sm:rounded-2xl border border-blue-500/25 bg-transparent shadow-2xl transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(79,156,255,0.3)]`}
      onClick={onClick}
      {...props}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;