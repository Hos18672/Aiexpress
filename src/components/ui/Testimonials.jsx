import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TestimonialCard from './TestimonialCard';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "AI Express transformed our business processes. Their AI coaching program helped our team adopt machine learning in just 3 months."
    },
    {
      name: "Sarah Johnson",
      company: "Innovate Inc",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "The automation solutions provided by AI Express saved us over 200 hours per month. Their team is incredibly knowledgeable."
    },
    {
      name: "Michael Chen",
      company: "DataDriven LLC",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "Working with AI Express was a game-changer for our startup. Their strategic guidance helped us implement AI solutions that drove 40% revenue growth."
    }
  ];

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1,
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <SectionWrapper className="bg-gray-900/30">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={headingVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <div className="flex items-center justify-center">
              <Quote className="w-8 h-8 mr-2 text-primary" />
              What Our Clients Say
            </div>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what businesses like yours have achieved with our AI solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Testimonials;