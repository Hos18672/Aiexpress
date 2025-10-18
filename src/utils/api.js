// Mock API utility for demonstration purposes
// In a real application, this would connect to your backend

const API_BASE_URL = '/api';

export const api = {
  // Services
  getServices: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return require('../data/servicesData.js').servicesData;
  },

  updateService: async (service) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Updating service:', service);
    return { success: true, data: service };
  },

  deleteService: async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Deleting service:', id);
    return { success: true, id };
  },

  // Translations
  getTranslations: async (language) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const translations = require(`../data/translations/${language}.json`);
      return translations;
    } catch (error) {
      console.error('Error loading translations:', error);
      return {};
    }
  },

  updateTranslation: async (language, key, value) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Updating ${language} translation:`, key, value);
    return { success: true, language, key, value };
  },

  // Contact form
  submitContactForm: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Submitting contact form:', formData);
    return { success: true, message: 'Form submitted successfully' };
  }
};

export default api;