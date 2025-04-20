
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Process from '@/components/sections/Process';
import Events from '@/components/sections/Events';
import Recognition from '@/components/sections/Recognition';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import GetInvolved from '@/components/sections/GetInvolved';
import About from '@/components/sections/About';
import StoryBehind from '@/components/sections/StoryBehind';

const Index = () => {
  // Scroll to anchor links smoothly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure smooth scrolling after page load
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Process />
        <Events />
        <Recognition />
        <Gallery />
        <StoryBehind />
        <About />
        <GetInvolved />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
