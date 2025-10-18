import React from 'react';
import Button from '../ui/Button';
import { SERVICE_CATEGORIES } from '../../utils/constants';

const ServiceFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {SERVICE_CATEGORIES.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'primary' : 'secondary'}
          onClick={() => onCategoryChange(category.id)}
          className="capitalize"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default ServiceFilter;