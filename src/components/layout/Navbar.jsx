import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef();
  const isScrollingRef = useRef(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up intersection observer to track active section
  useEffect(() => {
    // Add home to sections for explicit observation
    const sections = ['home', 'why-choose-us', 'services', 'case-studies', 'about', 'contact'];
    
    const observerCallback = (entries) => {
      // Find the section that is most visible in the viewport
      let mostVisibleSection = '';
      let highestVisibility = 0;
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Calculate visibility percentage
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the element is visible in the viewport
          const visibleTop = Math.max(0, -rect.top);
          const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
          const visibleHeight = visibleBottom - visibleTop;
          const visibilityPercentage = (visibleHeight / rect.height) * 100;
          
          // Update the most visible section if this one is more visible
          if (visibilityPercentage > highestVisibility) {
            highestVisibility = visibilityPercentage;
            mostVisibleSection = entry.target.id;
          }
        }
      });
      
      // Only update if we found a visible section
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      } else if (window.scrollY < 100) {
        // Special case: if we're near the top, set home as active
        setActiveSection('home');
      }
    };

    observer.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-25% 0px -75% 0px', // Adjusted margins for better detection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const navItems = [
    { name: t('home'), path: '/', section: 'home' },
    { name: t('whyChooseUs'), path: '/#why-choose-us', section: 'why-choose-us' },
    { name: t('services'), path: '/#services', section: 'services' },
    { name: t('caseStudies'), path: '/#case-studies', section: 'case-studies' },
    { name: t('about'), path: '/#about', section: 'about' },
    { name: t('contact'), path: '/#contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      isScrollingRef.current = true;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Reset scrolling flag after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
      
      return true;
    }
    return false;
  };

  const handleScrollToSection = (path, section) => {
    // Close mobile menu immediately for better UX
    setMobileMenuOpen(false);

    if (path === '/') {
      // Navigate to home and clear hash
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        // Add small delay to ensure menu closes before scrolling
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, null, '/');
          setActiveSection('home');
        }, 100);
      }
      return;
    }

    if (path.startsWith('/#')) {
      // Set the active section immediately to prevent other items from becoming active
      setActiveSection(section);
      
      if (location.pathname === '/') {
        // Already on home page, just scroll after menu animation completes
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        // Navigate to home page first, then scroll
        navigate(`/#${section}`);
      }
    } else {
      // Regular navigation
      navigate(path);
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Use setTimeout to ensure DOM is ready
      const timer = setTimeout(() => {
        const sectionId = location.hash.substring(1);
        setActiveSection(sectionId);
        scrollToSection(sectionId);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const isNavItemActive = (item) => {
    // For home section, special handling
    if (item.path === '/') {
      return location.pathname === '/' && (activeSection === 'home' || activeSection === '');
    }
    
    // For hash-based navigation items
    if (item.path.startsWith('/#')) {
      // Item is active when:
      // 1. We're on the home page, AND
      // 2. The active section matches the item's section
      return location.pathname === '/' && activeSection === item.section;
    }
    
    // For regular paths, exact match
    return location.pathname === item.path;
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-primary/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Bottom border */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-30'
      } bg-gradient-to-r from-transparent via-blue-500/30 to-transparent`} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleScrollToSection('/', 'home')}
          >
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Rotating border */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Zap className="w-6 h-6 text-white relative z-10" />
            </motion.div>
            <div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                AI Express
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.button
                  onClick={() => handleScrollToSection(item.path, item.section)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isNavItemActive(item)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isNavItemActive(item) && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg"
                      layoutId="navbarIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isNavItemActive(item) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      layoutId="navbarUnderline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side actions */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LanguageSwitcher />
            
            <motion.button
              onClick={() => handleScrollToSection('/#contact', 'contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="hidden lg:block relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold overflow-hidden group shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">{t('getStarted')}</span>
            </motion.button>
            
            {/* Mobile menu button */}
            <motion.button 
              className="lg:hidden text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg border border-blue-500/25 hover:border-blue-400/40 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-t border-blue-500/20"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div 
                className="flex flex-col space-y-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <button
                      onClick={() => handleScrollToSection(item.path, item.section)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        isNavItemActive(item)
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-white border border-primary/30'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                <motion.button 
                  onClick={() => handleScrollToSection('/#contact', 'contact')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleScrollToSection('/#contact', 'contact');
                    }
                  }}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                  tabIndex={0}
                >
                  {t('getStarted')}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;