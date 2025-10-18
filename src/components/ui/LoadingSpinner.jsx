import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  // Enhanced spinner animation
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-4 border-primary border-t-transparent`}
        variants={spinnerVariants}
        animate="animate"
      />
    </div>
  );
};

export default LoadingSpinner;