import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { api } from '../../utils/api';
import { Languages, Save, Edit, X } from 'lucide-react';

const TranslationManager = () => {
  const [translations, setTranslations] = useState({ en: {}, de: {} });
  const [loading, setLoading] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [editingKey, setEditingKey] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    loadTranslations();
  }, []);

  const loadTranslations = async () => {
    try {
      const enData = await api.getTranslations('en');
      const deData = await api.getTranslations('de');
      setTranslations({ en: enData, de: deData });
    } catch (error) {
      console.error('Error loading translations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (key, value) => {
    setEditingKey(key);
    setEditValue(value);
  };

  const handleSave = async (key) => {
    try {
      await api.updateTranslation(activeLanguage, key, editValue);
      setTranslations({
        ...translations,
        [activeLanguage]: {
          ...translations[activeLanguage],
          [key]: editValue
        }
      });
      setEditingKey(null);
    } catch (error) {
      console.error('Error updating translation:', error);
    }
  };

  const flattenObject = (obj, prefix = '') => {
    const flattened = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, flattenObject(obj[key], `${prefix}${key}.`));
      } else {
        flattened[`${prefix}${key}`] = obj[key];
      }
    }
    return flattened;
  };

  const renderTranslationField = (key, value) => {
    if (editingKey === key) {
      return (
        <div className="flex space-x-2">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-grow px-3 py-1 bg-gray-800 border border-gray-700 rounded"
          />
          <Button size="sm" onClick={() => handleSave(key)} icon={<Save className="w-3 h-3" />}>
            Save
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setEditingKey(null)} icon={<X className="w-3 h-3" />} />
        </div>
      );
    }

    return (
      <div className="flex justify-between items-start">
        <span className="text-gray-300">{value}</span>
        <Button variant="outline" size="sm" onClick={() => handleEdit(key, value)} icon={<Edit className="w-3 h-3" />}>
          Edit
        </Button>
      </div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const flattenedTranslations = flattenObject(translations[activeLanguage]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        variants={itemVariants}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-2xl font-bold flex items-center">
          <Languages className="w-6 h-6 mr-2 text-primary" />
          Manage Translations
        </h2>
        <div className="flex space-x-2">
          <Button 
            variant={activeLanguage === 'en' ? 'primary' : 'secondary'}
            onClick={() => setActiveLanguage('en')}
          >
            English
          </Button>
          <Button 
            variant={activeLanguage === 'de' ? 'primary' : 'secondary'}
            onClick={() => setActiveLanguage('de')}
          >
            Deutsch
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="p-6">
          <div className="space-y-4">
            {Object.entries(flattenedTranslations).map(([key, value]) => (
              <motion.div 
                key={key} 
                variants={itemVariants}
                className="border-b border-gray-800 pb-4"
              >
                <h3 className="font-semibold mb-2">{key}</h3>
                {renderTranslationField(key, value)}
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TranslationManager;