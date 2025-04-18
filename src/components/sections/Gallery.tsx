import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample gallery items with new categorized images
const galleryItems = [
  {
    id: 1,
    title: 'Pen Art Installation',
    description: 'Creative sculpture made from used pens depicting Indian cultural elements.',
    image: '/lovable-uploads/64e3a62f-0738-44f1-a931-0ce02c5e8e38.png',
    category: 'products'
  },
  {
    id: 2,
    title: 'Upcycled Pen Stand',
    description: 'Innovative pen stand design made from recycled pen materials.',
    image: '/lovable-uploads/c1ce9b3c-b682-4524-8465-aba20f0ba97d.png',
    category: 'products'
  },
  {
    id: 3,
    title: 'Desktop Organizer',
    description: 'Functional desk organizer crafted from used pens featuring the Indian flag.',
    image: '/lovable-uploads/92e43ec8-24b1-4fcb-b606-80a985637e69.png',
    category: 'products'
  },
  {
    id: 4,
    title: 'India Map Art',
    description: 'Creative representation of India made from recycled pen parts.',
    image: '/lovable-uploads/87aa3304-e3de-4ee3-bd0a-eaf5358088d5.png',
    category: 'products'
  },
  {
    id: 5,
    title: 'School Awareness Program',
    description: 'Engaging students in environmental awareness sessions.',
    image: '/lovable-uploads/b83b03df-1933-48ab-87d4-34a8d234e6ad.png',
    category: 'collection'
  },
  {
    id: 6,
    title: 'Student Participation',
    description: 'Students actively participating in pen collection drives.',
    image: '/lovable-uploads/0f5dd22b-49d9-4682-8216-8cdac0155cd9.png',
    category: 'collection'
  },
  {
    id: 7,
    title: 'Classroom Collection',
    description: 'Collection process in action within classrooms.',
    image: '/lovable-uploads/40d70b1b-bd8b-4aa1-be8e-b32c642c0525.png',
    category: 'collection'
  },
  {
    id: 8,
    title: 'School Partnership',
    description: 'Schools joining hands with PEN BANK initiative.',
    image: '/lovable-uploads/f97a953e-a6e4-4de7-b374-920647db59b8.png',
    category: 'collection'
  }
];

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'products', name: 'Upcycled Products' },
  { id: 'collection', name: 'Collection Process' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevious = () => {
    setCurrentItemIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentItemIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Gallery & Impact</h2>
        
        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">5K+</h3>
            <p className="text-gray-700">Pens Collected</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">10</h3>
            <p className="text-gray-700">Schools Involved</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">1</h3>
            <p className="text-gray-700">Artisans Supported</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">10</h3>
            <p className="text-gray-700">Products Created</p>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category.id 
                  ? "bg-penBank-green hover:bg-penBank-green-dark" 
                  : "text-penBank-green hover:text-penBank-green-dark"
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentItemIndex(0);
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Slideshow */}
        <div className="relative bg-penBank-cream rounded-2xl overflow-hidden shadow-xl">
          {filteredItems.length > 0 ? (
            <>
              <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                <img 
                  src={filteredItems[currentItemIndex].image} 
                  alt={filteredItems[currentItemIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{filteredItems[currentItemIndex].title}</h3>
                  <p>{filteredItems[currentItemIndex].description}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button 
                  onClick={handlePrevious}
                  className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button 
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 p-2">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      currentItemIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentItemIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="h-[300px] md:h-[500px] flex flex-col items-center justify-center">
              <ImageIcon className="h-16 w-16 text-penBank-green-light mb-4" />
              <p className="text-gray-700">No images found in this category</p>
            </div>
          )}
        </div>

        {/* Thumbnails (visible on larger screens) */}
        <div className="hidden md:grid grid-cols-6 gap-2 mt-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              className={`relative overflow-hidden rounded-lg h-20 transition-opacity ${
                currentItemIndex === index ? "ring-2 ring-penBank-green" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentItemIndex(index)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
