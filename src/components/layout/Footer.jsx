import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Settings, 
  Users, 
  User, 
  FileText,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" }
  ];

  const sectionLinks = [
    { name: t('services'), id: 'services', icon: <Settings className="w-4 h-4" /> },
    { name: t('caseStudies'), id: 'case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: t('about'), id: 'about', icon: <User className="w-4 h-4" /> },
    { name: t('contact'), id: 'contact', icon: <Users className="w-4 h-4" /> }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, content: t('contact.info.email') },
    { icon: <Phone className="w-5 h-5" />, content: t('contact.info.phone') },
    { icon: <MapPin className="w-5 h-5" />, content: t('contact.info.address') }
  ];

  return (
    <footer className="bg-background border-t border-gray-800 pt-12 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                AI Express
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={`AI Express on ${social.icon.type.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              {t('sections')}
            </h3>
            <ul className="space-y-2">
              {sectionLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleScrollToSection(link.id)}
                    className="flex items-center text-gray-400 hover:text-primary transition-colors text-left"
                    aria-label={`Scroll to ${link.name} section`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              {t('contact')}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    {info.icon}
                  </div>
                  <span>{info.content}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} AI Express. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;