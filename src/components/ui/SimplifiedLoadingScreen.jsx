import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const SimplifiedLoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="mb-6"
        >
          <img 
            src={logo} 
            alt="AI Express Logo" 
            className="w-32 h-32 mx-auto object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3"
        >
          AI Express
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="text-gray-400 text-sm"
        >
          Loading your AI experience...
        </motion.p>
        
        {/* Simple progress bar */}
        <motion.div 
          className="w-48 h-1 bg-gray-800 rounded-full mt-6 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SimplifiedLoadingScreen;