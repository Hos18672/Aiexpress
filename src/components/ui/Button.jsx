import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  icon = null,
  iconPosition = 'left',
  ...props 
}) => {
  // Base styles with transition from JSON
  const baseClasses = "font-medium rounded-lg transition-all duration-350 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  // Animation variants from JSON
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };
  
  return (
    <motion.button
      whileHover={!disabled ? "hover" : {}}
      whileTap={!disabled ? "tap" : {}}
      variants={buttonVariants}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;