import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminLoginForm from '../components/forms/AdminLoginForm';
import AnalyticsDashboard from '../components/admin/AnalyticsDashboard';
import ServiceManager from '../components/admin/ServiceManager';
import TranslationManager from '../components/admin/TranslationManager';
import ContentManager from '../components/admin/ContentManager';
import { 
  LayoutDashboard, 
  Settings, 
  Globe, 
  FileText, 
  LogOut,
  BarChart3,
  Wrench,
  Languages
} from 'lucide-react';

const Admin = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Load translations
  // Load translations
  const translations = t;

  const handleLogin = () => {
    // In a real app, you would authenticate with a backend
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AnalyticsDashboard />;
      case 'content':
        return <ContentManager />;
      case 'services':
        return <ServiceManager />;
      case 'translations':
        return <TranslationManager />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hoverEffect className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.admin?.dashboard || "Dashboard"}
              </h3>
              <p className="text-gray-400 mb-4">
                View analytics and site metrics
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('dashboard')}
                icon={<BarChart3 className="w-4 h-4" />}
              >
                View Dashboard
              </Button>
            </Card>
            
            <Card hoverEffect className="p-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.admin?.manage?.content || "Manage Content"}
              </h3>
              <p className="text-gray-400 mb-4">
                Edit website sections and content
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('content')}
                icon={<FileText className="w-4 h-4" />}
              >
                Manage Content
              </Button>
            </Card>
            
            <Card hoverEffect className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.admin?.manage?.services || "Manage Services"}
              </h3>
              <p className="text-gray-400 mb-4">
                Add, edit, or remove services
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('services')}
                icon={<Settings className="w-4 h-4" />}
              >
                Manage Services
              </Button>
            </Card>
            
            <Card hoverEffect className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {translations.admin?.manage?.translations || "Manage Translations"}
              </h3>
              <p className="text-gray-400 mb-4">
                Edit content in all languages
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('translations')}
                icon={<Globe className="w-4 h-4" />}
              >
                Manage Translations
              </Button>
            </Card>
          </div>
        );
    }
  };

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <motion.div
        className="pt-16 min-h-screen flex items-center justify-center bg-gray-900"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <AdminLoginForm onLogin={handleLogin} />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="pt-16 flex min-h-screen"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-grow bg-gray-900/50">
        {/* Admin Header */}
        <div className="bg-gray-900 border-b border-gray-800">
          <SectionWrapper className="py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
              <LayoutDashboard className="w-6 h-6 mr-2 text-primary" />
              {translations.admin?.dashboard || t('adminPanel')}
            </h1>
            <Button variant="outline" onClick={handleLogout} icon={<LogOut className="w-4 h-4" />}>
              {translations.admin?.logout || t('logout')}
            </Button>
          </SectionWrapper>
        </div>

        {/* Admin Content */}
        <SectionWrapper className="py-8">
          {renderContent()}
        </SectionWrapper>
      </div>
    </motion.div>
  );
};

export default Admin;