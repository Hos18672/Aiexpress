import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="p-8 text-center">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter for the latest AI insights and updates.
        </p>
        
        {isSubscribed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="py-4"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-green-400 font-medium">
              Thank you for subscribing!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-grow relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} icon={<Send className="w-4 h-4" />}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        )}
      </Card>
    </motion.div>
  );
};

export default Newsletter;