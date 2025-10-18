import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import AnimatedLogo from '../components/ui/AnimatedLogo';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 bg-background">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-8"
        >
          <AnimatedLogo size="lg" className="mx-auto" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            404
          </span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-6"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mb-8 text-lg"
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/">
            <Button size="lg" className="px-8 py-3 text-lg">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;