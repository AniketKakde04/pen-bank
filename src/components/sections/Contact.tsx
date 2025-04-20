
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-penBank-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Have questions or want to learn more about Pen Bank? Reach out to us!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-penBank-green-light flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-penBank-green-dark" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:penbank22@gmail.com" className="text-penBank-green hover:underline">penbank22@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-penBank-green-light flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-penBank-green-dark" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a href="tel:+918766806290" className="text-penBank-green hover:underline">+91 8766806290</a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-penBank-green-light flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-penBank-green-dark" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-700">Kale Lay Out Near Devrao Patil High School, Yavatmal, Maharashtra<br />India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
