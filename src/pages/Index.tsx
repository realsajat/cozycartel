
import React from 'react';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import CategoryCard from '../components/CategoryCard';

const Index = () => {
  const categories = [
    {
      title: "Luxury Sofas",
      image: "/photo-1721322800607-8c38375eef04",
      description: "Handcrafted comfort for your living space"
    },
    {
      title: "Designer Carpets",
      image: "/photo-1721322800607-8c38375eef04",
      description: "Exclusive patterns and premium materials"
    },
    {
      title: "Custom Curtains",
      image: "/photo-1721322800607-8c38375eef04",
      description: "Elevate your windows with bespoke designs"
    },
    {
      title: "Modern Furniture",
      image: "/photo-1721322800607-8c38375eef04",
      description: "Contemporary pieces for modern living"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/photo-1721322800607-8c38375eef04"
            alt="Elegant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/30" />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6 animate-fadeIn">
              Elevate Your Space
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-2xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Discover our curated collection of luxury furniture and interior pieces
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="font-playfair text-4xl text-charcoal text-center mb-16">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl mb-6">Get in Touch</h2>
          <p className="font-inter text-lg mb-8 text-white/80">
            Contact us for personalized interior design consultation
          </p>
          <div className="space-y-4">
            <p className="font-inter">Call us: +1234567890</p>
            <p className="font-inter">Email: contact@elegantinteriors.com</p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
