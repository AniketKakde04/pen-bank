
import React from 'react';
import { School, TruckIcon, Hammer, ShoppingBag } from 'lucide-react';

const steps = [
  {
    title: 'Collection',
    description: 'We set up collection points in schools where students and staff can deposit their used pens.',
    icon: School,
    imageUrl: 'https://images.unsplash.com/photo-1509191436522-d678047ff365?auto=format&fit=crop&q=80',
  },
  {
    title: 'Transportation',
    description: 'Our team collects the pens and transports them to our processing center for sorting and cleaning.',
    icon: TruckIcon,
    imageUrl: 'https://images.unsplash.com/photo-1622633721982-09264c109ccc?auto=format&fit=crop&q=80',
  },
  {
    title: 'Transformation',
    description: 'Local artisans transform the pen materials into new, beautiful products through various crafting techniques.',
    icon: Hammer,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  },
  {
    title: 'Distribution',
    description: 'The upcycled products are sold, with proceeds supporting our program and the participating artisans.',
    icon: ShoppingBag,
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80',
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-penBank-cream py-16 md:py-24 clip-diagonal-bottom">
      <div className="section-container">
        <h2 className="section-title">Our Process</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          From collection to creation, here's how we transform discarded pens into beautiful handcrafted products.
        </p>

        {/* Process steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-penBank-green-light transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`md:grid md:grid-cols-2 items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:text-right' : ''} mb-6 md:mb-0`}>
                  <h3 className="section-subtitle flex items-center md:block">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-penBank-green text-white text-lg font-bold mr-4 md:hidden">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <div className={`bg-white p-8 rounded-2xl shadow-lg relative ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Number indicator for desktop */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center h-12 w-12 rounded-full bg-penBank-green text-white text-xl font-bold z-10 
                    ${index % 2 === 1 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}">
                    {index + 1}
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-penBank-green bg-opacity-10 flex items-center justify-center mb-4">
                      <step.icon className="h-10 w-10 text-penBank-green" />
                    </div>
                  </div>
                  <img 
                    src={step.imageUrl} 
                    alt={`${step.title} process`} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
