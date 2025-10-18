import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { FileText, Save, Edit, X } from 'lucide-react';

const ContentManager = () => {
  const [contentSections, setContentSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({
    title: { en: '', de: '' },
    content: { en: '', de: '' }
  });

  useEffect(() => {
    // Simulate loading content sections
    setTimeout(() => {
      setContentSections([
        {
          id: 1,
          name: "Hero Section",
          title: { en: "Transform Your Business with AI", de: "Verwandeln Sie Ihr Unternehmen mit KI" },
          content: { 
            en: "AI Coaching, Workshops & Automation Services", 
            de: "KI-Coaching, Workshops und Automatisierungsdienste" 
          }
        },
        {
          id: 2,
          name: "Why Choose Us",
          title: { en: "Why Choose Us", de: "Warum wir" },
          content: { 
            en: "We help businesses leverage AI to drive innovation, efficiency, and growth.", 
            de: "Wir helfen Unternehmen, KI zu nutzen, um Innovation, Effizienz und Wachstum voranzutreiben." 
          }
        },
        {
          id: 3,
          name: "CTA Section",
          title: { en: "Ready to Transform Your Business?", de: "Bereit, Ihr Unternehmen zu transformieren?" },
          content: { 
            en: "Join hundreds of companies leveraging AI to drive innovation and growth.", 
            de: "Schließen Sie sich Hunderten von Unternehmen an, die KI nutzen, um Innovation und Wachstum voranzutreiben." 
          }
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEdit = (section) => {
    setEditingSection(section);
    setFormData({
      title: section.title,
      content: section.content
    });
  };

  const handleSave = () => {
    // Simulate saving content
    const updatedSections = contentSections.map(section => 
      section.id === editingSection.id 
        ? { ...section, ...formData } 
        : section
    );
    
    setContentSections(updatedSections);
    setEditingSection(null);
  };

  const handleChange = (field, value, lang) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: value
      }
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-2xl font-bold flex items-center mb-6"
      >
        <FileText className="w-6 h-6 mr-2 text-primary" />
        Manage Content
      </motion.h2>
      
      {editingSection ? (
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Editing: {editingSection.name}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">English Title</label>
                <input
                  type="text"
                  value={formData.title.en}
                  onChange={(e) => handleChange('title', e.target.value, 'en')}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">German Title</label>
                <input
                  type="text"
                  value={formData.title.de}
                  onChange={(e) => handleChange('title', e.target.value, 'de')}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">English Content</label>
                <textarea
                  value={formData.content.en}
                  onChange={(e) => handleChange('content', e.target.value, 'en')}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                  rows="3"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">German Content</label>
                <textarea
                  value={formData.content.de}
                  onChange={(e) => handleChange('content', e.target.value, 'de')}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                  rows="3"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button variant="secondary" onClick={() => setEditingSection(null)} icon={<X className="w-4 h-4" />}>
                  Cancel
                </Button>
                <Button onClick={handleSave} icon={<Save className="w-4 h-4" />}>
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ) : (
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contentSections.map((section) => (
            <Card key={section.id} className="p-6">
              <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              <p className="text-gray-400 mb-4">
                {section.title.en}
              </p>
              <Button variant="outline" onClick={() => handleEdit(section)} icon={<Edit className="w-4 h-4" />}>
                Edit Content
              </Button>
            </Card>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContentManager;