
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroCarousel } from './HeroCarousel';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background carousel */}
      <HeroCarousel />
      
      {/* Overlay with lower z-index than content but higher than carousel */}
      <div className="absolute inset-0 bg-penBank-green-dark bg-opacity-50 z-[1]"></div>

      {/* Organic shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 z-[2]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-penBank-offWhite fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* Content with highest z-index */}
      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md animate-fade-in">
          Transforming Pen Waste Into <span className="text-penBank-cream">Craft</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
          We collect used pens from schools across India and transform them into beautiful handcrafted products through local artisans, reducing plastic waste and creating livelihoods.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a href="#get-involved">
            <Button 
              size="lg" 
              className="bg-penBank-green hover:bg-penBank-green-dark text-white rounded-full px-8 w-full"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#about">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-penBank-green-dark rounded-full px-8 w-full"
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
