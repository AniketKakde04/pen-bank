import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, User } from 'lucide-react'; // Import the User icon

// Sample testimonials (in a real app, this would come from a database or CMS)
const testimonials = [
  {
    id: 1,
    quote: "I am Viraj Umesh Baid from Yavatmal Public School. I want to express my view on the major initiative you have taken — Pen Bank. I like your idea very much and want to contribute to it to an extent which I can. I think this idea is a small step towards making the world a better place to live in. Thank you so much for taking such an initiative.",
    author: "Viraj Umesh Baid",
    role: "Student, Yavatmal Public School",
  },
  {
    id: 2,
    quote: "I am very happy with this great plan of yours — that someone has taken a small step for our country. We deposited a pen in the Pen Bank at our school, and after 2–3 weeks, we got a new pen. It’s a good initiative, and everyone will be proud of you.",
    author: "Sharayu Tiwari",
    role: "Student, Yavatmal Public School",
  },
  {
    id: 3,
    quote: "I felt very happy with the campaign. This reduces a small portion of plastic. If all schools take part in this campaign, it will make a huge difference.",
    author: "Tanmay Rathod",
    role: "Student, Yavatmal Public School",
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
                  {/* Replace the image with a User icon */}
                  <div className="h-12 w-12 rounded-full bg-penBank-green-light flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
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