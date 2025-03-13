
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <nav className="fixed top-0 left-0 right-0 bg-cream/90 backdrop-blur-md z-50 border-b border-warmGray/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-xl font-medium">Elegant Interiors</h1>
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
                    className="font-inter text-charcoal/80 hover:text-charcoal flex items-center transition-colors"
                  >
                    <span className="capitalize">{category}</span>
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      activeDropdown === category ? "rotate-180" : ""
                    )} />
                  </a>
                  
                  {/* Dropdown Menu */}
                  <div className={cn(
                    "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 transform origin-top-left",
                    activeDropdown === category 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    <div className="py-1">
                      {subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-cream transition-colors"
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
            <button className="relative p-1 rounded-full hover:bg-warmGray/10 transition-colors">
              <ShoppingBag className="w-6 h-6 text-charcoal/80" />
              <span className="absolute -top-1 -right-1 bg-charcoal text-cream text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-1 hover:bg-warmGray/10 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 right-0 bg-cream shadow-lg transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Object.entries(categories).map(([category, subcategories]) => (
            <div key={category} className="px-3 py-2">
              <button
                className="w-full flex justify-between items-center font-inter text-charcoal"
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
                    className="block py-2 font-inter text-sm text-charcoal/80 hover:text-charcoal transition-colors"
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
