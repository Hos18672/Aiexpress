import React from 'react';
import Card from './Card';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <Card className="h-full p-6 group" hoverEffect={true}>
      <div className="mb-4 group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

export default FeatureCard;