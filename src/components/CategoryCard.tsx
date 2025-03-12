
import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        <h3 className="font-playfair text-2xl text-white mb-2">{title}</h3>
        <p className="font-inter text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
