
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

// Sample testimonials (in a real app, this would come from a database or CMS)
const testimonials = [
  {
    id: 1,
    quote: "Pen Bank has transformed how our school thinks about waste. Our students are now environmental ambassadors, actively collecting pens and spreading awareness across their communities.",
    author: "Priya Sharma",
    role: "Principal, Delhi Public School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "As an artisan partner from rural Maharashtra, Pen Bank has not only provided me with materials for my craft but also a sustainable income and a way to contribute to environmental conservation.",
    author: "Rajesh Patel",
    role: "Artisan Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "The pen collection program has been a great way to engage our students in sustainability. It connects them with India's tradition of reuse and sustainable living.",
    author: "Anjali Gupta",
    role: "Science Teacher, Kendriya Vidyalaya",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-penBank-brown-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">What People Say</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Hear from schools, artisans, and community members about their experience with Pen Bank.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-6 pt-12 relative">
                <div className="absolute top-6 left-6">
                  <Quote className="h-8 w-8 text-penBank-green-light opacity-40" />
                </div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
