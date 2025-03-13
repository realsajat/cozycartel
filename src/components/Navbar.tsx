
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const categories = {
    sofas: ['Sectionals', 'Loveseats', 'Recliners', 'Sofa Beds'],
    carpets: ['Area Rugs', 'Persian', 'Modern', 'Outdoor'],
    curtains: ['Blackout', 'Sheer', 'Patterned', 'Custom'],
    furniture: ['Tables', 'Chairs', 'Beds', 'Storage']
  };

  return (
    <nav className="bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="block">
              <h1 className="font-playfair text-xl font-medium text-charcoal">Elegant Interiors</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {Object.entries(categories).map(([category, subcategories]) => (
                <div 
                  key={category}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(category)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <a 
                    href={`#${category}`} 
                    className="font-inter text-gray-700 hover:text-black flex items-center transition-colors"
                  >
                    <span className="capitalize">{category}</span>
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeDropdown === category ? "rotate-180" : ""
                    )} />
                  </a>
                  
                  {/* Dropdown Menu */}
                  <div className={cn(
                    "absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden dropdown-fade",
                    activeDropdown === category 
                      ? "opacity-100 scale-100 pointer-events-auto" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    <div className="py-1">
                      {subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Cart button */}
            <button className="relative p-1 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-1 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 bg-white border-t transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-y-0 shadow-lg" : "-translate-y-full"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Object.entries(categories).map(([category, subcategories]) => (
            <div key={category} className="px-3 py-2">
              <button
                className="w-full flex justify-between items-center font-inter text-gray-700"
                onClick={() => toggleDropdown(category)}
              >
                <span className="capitalize">{category}</span>
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 transition-transform duration-200",
                  activeDropdown === category ? "rotate-180" : ""
                )} />
              </button>
              
              <div className={cn(
                "mt-2 space-y-1 pl-4 overflow-hidden transition-all duration-200",
                activeDropdown === category ? "max-h-40" : "max-h-0"
              )}>
                {subcategories.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block py-2 font-inter text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
