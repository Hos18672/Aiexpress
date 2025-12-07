import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  // Contact info data
  const contactInfo = [
    {
      icon: "📧",
      title: t('email'),
      content: t('contact.info.email')
    },
    {
      icon: "📱",
      title: t('phone'),
      content: t('contact.info.phone')
    },
    // {
    //   icon: "📍",
    //   title: t('address'),
    //   content: t('contact.info.address')
    // }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <SectionWrapper className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {t('contact.title')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <Card className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  {t('contact.consultation')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('contact.bookConsultation')}
                </p>
                <Button size="lg">{t('scheduleNow')}</Button>
              </Card>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 flex items-start">
                    <span className="text-3xl mr-4">{info.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Google Maps Placeholder */}
      <SectionWrapper className="py-8">
        <Card className="h-96 rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
              <p className="text-gray-300">Google Maps integration would appear here</p>
            </div>
          </div>
        </Card>
      </SectionWrapper>
    </div>
  );
};

export default Contact;