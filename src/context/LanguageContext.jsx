import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nextInstance } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18nextInstance.language || 'en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setCurrentLanguage(storedLang);
    i18nextInstance.changeLanguage(storedLang);
  }, [i18nextInstance]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    i18nextInstance.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;