
import React from 'react';
import { Leaf, Recycle, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    title: 'Environmental Stewardship',
    description: 'We are committed to reducing plastic waste and protecting our environment for future generations.',
    icon: Leaf,
  },
  {
    title: 'Circular Economy',
    description: 'We promote a sustainable economic model that emphasizes reuse, recycling, and upcycling.',
    icon: Recycle,
  },
  {
    title: 'Community Empowerment',
    description: 'We support local artisans and provide economic opportunities through sustainable initiatives.',
    icon: Users,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-subtitle mb-6">Our Story</h3>
            <p className="mb-6 text-gray-700">
              It all started in 2022 with a simple question: What happens to our pens after we throw them away? Are they recycled? Are they reused? The answer was clear—they're not.
            </p>
            <p className="mb-6 text-gray-700">
              This small realization led to a big idea. We noticed that while plastic bottles and bags were being talked about and recycled, plastic pens—used every single day in schools and offices—were quietly piling up in landfills. There was no system to collect them, no conversation around their impact.
            </p>
            <p className="mb-6 text-gray-700">
              That's when PEN BANK was born.
            </p>
            <p className="mb-6 text-gray-700">
              We began by placing collection boxes in a few schools and reaching out to communities that shared our concern. Slowly, used pens began to flow in—pens that would have otherwise ended up as waste. But we didn't stop there.
            </p>
            <p className="mb-6 text-gray-700">
              Instead of discarding them, we started collaborating with a local artisan who could see the beauty in what others saw as trash. Together, we began transforming used pens into meaningful, handcrafted products—items that carry a message, spark a conversation, and represent a shift in mindset.
            </p>
            <p className="mb-6 text-gray-700">
              Today, PEN BANK is growing—not just as a recycling effort, but as a movement. A movement that blends sustainability with creativity, connects students with environmental action, and empowers artisans through purposeful work.
            </p>
            <p className="text-gray-700">
              And this is just the beginning.
            </p>

            <h3 className="section-subtitle mt-8 mb-4">Our Mission</h3>
            <p className="mb-6 text-gray-700">
              At PEN BANK, our mission is to tackle the growing problem of plastic pen waste by creating a sustainable system for collection, upcycling, and community engagement.
            </p>
            <p className="mb-6 text-gray-700">
              We focus on giving discarded pens a second life—transforming them into handcrafted products through collaborations with local artisans. Inspired by India's traditions of creativity and resourcefulness, we aim to blend environmental action with social impact.
            </p>
            <p className="text-gray-700">
              Through every pen we collect and every product we create, we strive to: Reduce waste. Empower communities. Inspire change.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-penBank-green rounded-full opacity-20 animate-float"></div>
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80" 
              alt="Pen Bank team" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-penBank-brown rounded-full opacity-20 animate-float" style={{animationDelay: "1s"}}></div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-penBank-cream overflow-hidden group">
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-penBank-green bg-opacity-10 flex items-center justify-center mb-6 mx-auto group-hover:bg-penBank-green group-hover:text-white transition-colors">
                    <value.icon className="h-7 w-7 text-penBank-green group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-3">{value.title}</h4>
                  <p className="text-gray-700 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

