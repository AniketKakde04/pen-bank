
import React from 'react';
import { AlertTriangle, BarChart3, Droplets } from 'lucide-react';

const stats = [
  {
    number: '1.6B',
    label: 'Pens thrown away annually in the US',
    icon: AlertTriangle,
  },
  {
    number: '100+',
    label: 'Years for plastic pens to decompose',
    icon: BarChart3,
  },
  {
    number: '91%',
    label: 'Of plastic is not recycled globally',
    icon: Droplets,
  },
];

const Problem = () => {
  return (
    <section id="problem" className="bg-penBank-green py-16 md:py-24 clip-diagonal-top">
      <div className="section-container">
        <h2 className="section-title text-white">The Problem</h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-penBank-cream text-lg">
            Billions of plastic pens are discarded each year, contributing to our global plastic pollution crisis.
          </p>
        </div>

        {/* Problem explanation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80" 
              alt="Plastic pollution" 
              className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Why Pen Waste Matters</h3>
            <p className="mb-4">
              Each year, billions of plastic pens are thrown away, with most ending up in landfills or oceans. A single plastic pen can take over 100 years to decompose, releasing microplastics and harmful chemicals in the process.
            </p>
            <p className="mb-4">
              Schools are significant contributors to this problem. The average student uses 8-12 pens per academic year, and with over 76 million students in the US alone, the environmental impact is substantial.
            </p>
            <p>
              Traditional pen recycling is difficult due to mixed materials (plastic, metal, and ink). That's why we've created an alternative solution through upcycling and creative reuse.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl transform hover:-translate-y-2 transition-transform">
              <div className="h-14 w-14 rounded-full bg-penBank-green bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="h-7 w-7 text-penBank-green" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-penBank-green-dark mb-2">{stat.number}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
