import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const TeamMemberCard = ({ member, index }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { 
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const borderVariants = {
    initial: { 
      boxShadow: "0 0 0 2px rgba(79,156,255,0.3)"
    },
    hover: { 
      boxShadow: "0 0 0 3px rgba(79,156,255,0.8), 0 0 30px rgba(79,156,255,0.4)",
      transition: { duration: 0.4 }
    }
  };

  const nameVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const roleVariants = {
    initial: { opacity: 0.8, y: 0 },
    hover: { 
      opacity: 1,
      y: -2,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.05 }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      style={{ perspective: 1000 }}
    >
      <Card className="relative text-center p-8 group" hoverEffect={true}>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          <motion.div 
            className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden relative"
            variants={borderVariants}
          >
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                padding: '2px',
                background: 'linear-gradient(45deg, rgba(79,156,255,0.8), rgba(100,200,255,0.8), rgba(79,156,255,0.8))',
                backgroundSize: '200% 200%'
              }}
            />
            <div className="absolute inset-0.5 rounded-full bg-gray-900 z-10" />
            <motion.img 
              src={member.image} 
              alt={member.name} 
              className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full z-20"
              variants={imageVariants}
            />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={nameVariants}
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors duration-300 uppercase text-sm tracking-wider"
            variants={roleVariants}
          >
            {member.role}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4"
            initial={{ width: 0 }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;