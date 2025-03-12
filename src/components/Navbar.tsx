
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur-md z-50 border-b border-warmGray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-xl font-medium">Elegant Interiors</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sofas" className="font-inter text-charcoal/80 hover:text-charcoal transition-colors">Sofas</a>
              <a href="#carpets" className="font-inter text-charcoal/80 hover:text-charcoal transition-colors">Carpets</a>
              <a href="#curtains" className="font-inter text-charcoal/80 hover:text-charcoal transition-colors">Curtains</a>
              <a href="#furniture" className="font-inter text-charcoal/80 hover:text-charcoal transition-colors">Furniture</a>
            </div>
          </div>
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 text-charcoal/80" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
