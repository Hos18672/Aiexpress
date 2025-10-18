import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { api } from '../../utils/api';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Bot, 
  Users, 
  Settings, 
  TrendingUp, 
  Wrench, 
  Target,
  Plus,
  Edit,
  Trash2,
  Save,
  X
} from 'lucide-react';

const ServiceManager = () => {
  const { currentLanguage } = useLanguage();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: { en: '', de: '' },
    description: { en: '', de: '' },
    icon: '',
    category: ''
  });

  // Map categories to icons
  const categoryIcons = {
    coaching: <Bot className="w-6 h-6 text-primary" />,
    workshops: <Users className="w-6 h-6 text-primary" />,
    automation: <Settings className="w-6 h-6 text-primary" />,
    analytics: <TrendingUp className="w-6 h-6 text-primary" />,
    custom: <Wrench className="w-6 h-6 text-primary" />,
    strategy: <Target className="w-6 h-6 text-primary" />
  };

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await api.getServices();
      setServices(data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      category: service.category
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await api.deleteService(id);
        setServices(services.filter(service => service.id !== id));
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedService = {
        ...editingService,
        ...formData
      };
      
      await api.updateService(updatedService);
      
      setServices(services.map(service => 
        service.id === editingService.id ? updatedService : service
      ));
      
      setEditingService(null);
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleChange = (field, value, lang = null) => {
    if (lang) {
      setFormData({
        ...formData,
        [field]: {
          ...formData[field],
          [lang]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [field]: value
      });
    }
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
      <motion.div 
        variants={itemVariants}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-2xl font-bold flex items-center">
          <Wrench className="w-6 h-6 mr-2 text-primary" />
          Manage Services
        </h2>
        <Button onClick={() => setEditingService({})} icon={<Plus className="w-4 h-4" />}>
          Add New Service
        </Button>
      </motion.div>

      {editingService && (
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {editingService.id ? 'Edit Service' : 'Add New Service'}
              </h3>
              <Button variant="secondary" onClick={() => setEditingService(null)} icon={<X className="w-4 h-4" />} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">English Title</label>
                  <input
                    type="text"
                    value={formData.title.en}
                    onChange={(e) => handleChange('title', e.target.value, 'en')}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">German Title</label>
                  <input
                    type="text"
                    value={formData.title.de}
                    onChange={(e) => handleChange('title', e.target.value, 'de')}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">English Description</label>
                  <textarea
                    value={formData.description.en}
                    onChange={(e) => handleChange('description', e.target.value, 'en')}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                    rows="3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">German Description</label>
                  <textarea
                    value={formData.description.de}
                    onChange={(e) => handleChange('description', e.target.value, 'de')}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                    rows="3"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg"
                  >
                    <option value="coaching">Coaching</option>
                    <option value="workshops">Workshops</option>
                    <option value="automation">Automation</option>
                    <option value="analytics">Analytics</option>
                    <option value="custom">Custom Solutions</option>
                    <option value="strategy">Strategy</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button variant="secondary" onClick={() => setEditingService(null)} icon={<X className="w-4 h-4" />}>
                  Cancel
                </Button>
                <Button type="submit" icon={<Save className="w-4 h-4" />}>
                  {editingService.id ? 'Update' : 'Create'} Service
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      )}

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <Card key={service.id} className="p-6 h-full flex flex-col">
            <div className="mb-4">
              {categoryIcons[service.category] || <Wrench className="w-8 h-8 text-primary" />}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {service.title[currentLanguage] || service.title.en}
            </h3>
            <p className="text-gray-400 mb-4 flex-grow">
              {service.description[currentLanguage] || service.description.en}
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleEdit(service)}
                className="flex-grow"
                icon={<Edit className="w-4 h-4" />}
              >
                Edit
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleDelete(service.id)}
                icon={<Trash2 className="w-4 h-4" />}
              />
            </div>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceManager;