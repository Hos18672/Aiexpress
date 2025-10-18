import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'de' : 'en';
    changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:border-primary transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <motion.span
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        className="font-bold text-white group-hover:text-primary transition-colors duration-300"
      >
        {currentLanguage === 'en' ? 'DE' : 'EN'}
      </motion.span>
    </motion.button>
  );
};

export default LanguageSwitcher;