import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Section = ({ 
  id,
  children,
  className = '',
  title,
  subtitle,
  titleComponent: TitleComponent = motion.h2,
  titleClassName = '',
  subtitleClassName = '',
  itemVariants,
  badge,
  badgeIcon,
  badgeClassName = ''
}) => {
  return (
    <SectionWrapper id={id} className={className}>
      <div className="text-center mb-20">
        {(badge || badgeIcon) && (
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 ${badgeClassName}`}
          >
            {badgeIcon && React.cloneElement(badgeIcon, { className: "w-4 h-4" })}
            {badge && <span className="text-sm font-medium">{badge}</span>}
          </motion.div>
        )}

        <TitleComponent
          variants={itemVariants}
          className={`text-4xl md:text-5xl font-bold mb-6 ${titleClassName}`}
        >
          {title}
        </TitleComponent>

        {subtitle && (
          <motion.p
            variants={itemVariants}
            className={`text-gray-400 max-w-3xl mx-auto text-lg ${subtitleClassName}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {children}
    </SectionWrapper>
  );
};

export default Section;