import React from 'react';
import Card from './Card';
import { useAnimatedBorder } from '../../hooks/useAnimatedBorder';

const FeatureCard = ({ icon, title, description, index }) => {
  const { borderCanvasRef, isHovered, borderEventHandlers } = useAnimatedBorder();
  
  return (
    <div 
      {...borderEventHandlers}
      className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
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

      <Card className="h-full p-6 group" hoverEffect={true}>
        <div className="mb-4 group-hover:text-accent transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </Card>
    </div>
  );
};

export default FeatureCard;