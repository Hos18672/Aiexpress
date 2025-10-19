import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { api } from '../../utils/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import { User, Mail, MessageSquare, Send, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await api.submitContactForm(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const inputVariants = {
    idle: { scale: 1 },
    focus: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const labelVariants = {
    idle: { y: 0, opacity: 0.7 },
    focus: { 
      y: -2,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateX: -20 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
    >
      <Card className="relative p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border-2 border-primary/20">
        {/* Futuristic grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(79, 156, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 156, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Glowing corner accents */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />

        {/* Animated border */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          {submitSuccess ? (
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="text-center py-12"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/50 relative"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Send className="w-10 h-10 text-green-400" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {t('messageTransmitted')}
              </h3>
              <p className="text-gray-400 text-lg">
                {t('responseIncoming')}
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {t('initiateContact')}
                  </h2>
                  <p className="text-primary/80 text-sm">{t('secureProtocol')}</p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <motion.div 
                  className="relative"
                  variants={inputVariants}
                  animate={focusedField === 'name' ? 'focus' : 'idle'}
                >
                  <motion.label 
                    htmlFor="name" 
                    className="block text-gray-300 mb-3 flex items-center font-medium uppercase text-xs tracking-wider"
                    variants={labelVariants}
                    animate={focusedField === 'name' ? 'focus' : 'idle'}
                  >
                    <User className="w-4 h-4 mr-2 text-primary" />
                    {t('identity')}
                  </motion.label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-xl 
                               focus:outline-none focus:border-primary focus:bg-gray-800/80
                               transition-all duration-300 backdrop-blur-sm
                               hover:border-gray-600 text-white placeholder-gray-500"
                      placeholder={t('enterName')}
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-primary/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
                
                {/* Email Field */}
                <motion.div 
                  className="relative"
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focus' : 'idle'}
                >
                  <motion.label 
                    htmlFor="email" 
                    className="block text-gray-300 mb-3 flex items-center font-medium uppercase text-xs tracking-wider"
                    variants={labelVariants}
                    animate={focusedField === 'email' ? 'focus' : 'idle'}
                  >
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    {t('dataChannel')}
                  </motion.label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-xl 
                               focus:outline-none focus:border-primary focus:bg-gray-800/80
                               transition-all duration-300 backdrop-blur-sm
                               hover:border-gray-600 text-white placeholder-gray-500"
                      placeholder={t('enterEmail')}
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-primary/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
                
                {/* Message Field */}
                <motion.div 
                  className="relative"
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focus' : 'idle'}
                >
                  <motion.label 
                    htmlFor="message" 
                    className="block text-gray-300 mb-3 flex items-center font-medium uppercase text-xs tracking-wider"
                    variants={labelVariants}
                    animate={focusedField === 'message' ? 'focus' : 'idle'}
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                    {t('transmissionContent')}
                  </motion.label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="6"
                      className="w-full px-5 py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-xl 
                               focus:outline-none focus:border-primary focus:bg-gray-800/80
                               transition-all duration-300 backdrop-blur-sm resize-none
                               hover:border-gray-600 text-white placeholder-gray-500"
                      placeholder={t('composeMessage')}
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-primary/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
                
                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent 
                             hover:from-primary/90 hover:to-accent/90 rounded-xl
                             shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300
                             relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    {isSubmitting ? (
                      <div className="flex items-center justify-center relative z-10">
                        <LoadingSpinner size="sm" className="mr-3" />
                        <span>{t('transmitting')}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center relative z-10">
                        <Send className="w-5 h-5 mr-3" />
                        <span>{t('sendTransmission')}</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactForm;