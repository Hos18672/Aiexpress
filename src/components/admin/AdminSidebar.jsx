import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  LayoutDashboard, 
  FileText, 
  Wrench, 
  Globe, 
  BarChart3
} from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  const menuItems = [
    { 
      name: t('dashboard'), 
      tab: 'dashboard', 
      icon: <BarChart3 className="w-5 h-5" /> 
    },
    { 
      name: t('manageContent'), 
      tab: 'content', 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      name: t('manageServices'), 
      tab: 'services', 
      icon: <Wrench className="w-5 h-5" /> 
    },
    { 
      name: t('manageTranslations'), 
      tab: 'translations', 
      icon: <Globe className="w-5 h-5" /> 
    },
  ];

  // Animation variants
  const sidebarVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const itemVariants = {
    hover: { 
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="w-64 bg-gray-900 border-r border-gray-800 h-full"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent flex items-center">
          <LayoutDashboard className="w-6 h-6 mr-2" />
          Admin Panel
        </h2>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <motion.li
              key={item.tab}
              variants={itemVariants}
              whileHover="hover"
            >
              <button
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 w-full text-left ${
                  activeTab === item.tab
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default AdminSidebar;