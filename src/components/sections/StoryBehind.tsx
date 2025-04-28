
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryBehind = () => {
  return (
    <section id="story" className="bg-gradient-to-b from-white to-penBank-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">The Story Behind PenBank</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Aniket Kakde, the founder of Pen Bank, started this initiative with a clear purpose—to address the growing problem of pen waste through creativity, community engagement, and sustainability.
                </p>
                <p className="text-lg">
                  What began as a small idea soon grew into a movement that combines environmental action with social impact. Pen Bank focuses on collecting used pens, transforming them into meaningful products, and spreading awareness about responsible waste management—especially among students and young changemakers.
                </p>
                <p className="text-lg">
                  Aniket has been nationally recognized for his innovative work and social initiatives. He is a recipient of the Dr. A.P.J. Abdul Kalam Ignited Minds Award, a Jagriti Yatra fellow, and has been featured by platforms like NITI Aayog, BBC News, and Internshala. His journey reflects a strong commitment to driving change through action, innovation, and purpose.
                </p>
                <blockquote className="text-xl font-semibold text-penBank-green-dark italic border-l-4 border-penBank-green pl-4 my-6">
                  "Change doesn't always start big. Sometimes, it starts with a single pen."
                </blockquote>
                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-penBank-green hover:text-white"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aniket-kakde-00159a178/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-penBank-green hover:text-white"
                    asChild
                  >
                    <a href="mailto:aniketkakde509@gmail.com">
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="/lovable-uploads/fadf63ef-06d5-47e2-8a03-6b6528e71167.png"
                  alt="Aniket Kakde, founder of Pen Bank"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBehind;
