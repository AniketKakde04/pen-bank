
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample gallery items (in a real app, this would come from a database or CMS)
const galleryItems = [
  {
    id: 1,
    title: 'Pen Sculptures',
    description: 'Artistic sculptures made from collected pen parts.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80',
    category: 'products'
  },
  {
    id: 2,
    title: 'Recycled Pen Jewelry',
    description: 'Handcrafted jewelry made from pen casings and parts.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
    category: 'products'
  },
  {
    id: 3,
    title: 'School Collection Day',
    description: 'Students participating in our pen collection drive.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    category: 'collection'
  },
  {
    id: 4,
    title: 'Artisan Workshop',
    description: 'Local artisans transforming pen waste into beautiful creations.',
    image: 'https://images.unsplash.com/photo-1507420911465-b43d1797d3c1?auto=format&fit=crop&q=80',
    category: 'process'
  },
  {
    id: 5,
    title: 'Upcycled Pen Lamp',
    description: 'Lighting fixture made from hundreds of used pen casings.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
    category: 'products'
  },
  {
    id: 6,
    title: 'Pen Collection Bins',
    description: 'Special bins placed in schools for pen collection.',
    image: 'https://images.unsplash.com/photo-1571115197739-1716d36b9abb?auto=format&fit=crop&q=80',
    category: 'collection'
  },
];

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'products', name: 'Upcycled Products' },
  { id: 'collection', name: 'Collection Process' },
  { id: 'process', name: 'Transformation' },
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
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">250K+</h3>
            <p className="text-gray-700">Pens Collected</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">85</h3>
            <p className="text-gray-700">Schools Involved</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">32</h3>
            <p className="text-gray-700">Artisans Supported</p>
          </div>
          <div className="bg-penBank-cream p-6 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-penBank-green mb-2">5,000+</h3>
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
