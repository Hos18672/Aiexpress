import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import { Bot } from 'lucide-react';

const LoadingScreen = () => {
  // Enhanced entrance animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };
  
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: 0.3, 
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedLogo size="lg" className="mx-auto mb-8" />
          </motion.div>
          
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 flex items-center justify-center"
          >
            <Bot className="w-8 h-8 mr-2" />
            AI Express
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-gray-400"
          >
            Loading your AI experience...
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;