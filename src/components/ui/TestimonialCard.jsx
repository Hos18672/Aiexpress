import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder';

const TestimonialCard = ({ testimonial, index }) => {
  const { borderCanvasRef, isHovered, borderEventHandlers } = useAnimatedBorder();
  
  // Animation variants from JSON
  const cardVariants = {
    initial: { opacity: 0, y: 25, scale: 0.95 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(79,156,255,0.35)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      variants={cardVariants}
      {...borderEventHandlers}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
           style={{ 
             transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
             boxShadow: isHovered 
               ? '0 30px 60px -12px rgba(100, 200, 255, 0.1), 0 0 100px rgba(100, 200, 255, 0.2)' 
               : '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
           }}
      >
        {/* Animated border canvas */}
        <canvas
          ref={borderCanvasRef}
          className="absolute pointer-events-none"
          style={{ zIndex: 20 }}
        />

        <Card className="p-6 h-full">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          </div>
          <p className="text-gray-300 italic">"{testimonial.quote}"</p>
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;