
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-penBank-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h2 className="font-quicksand font-bold text-2xl mb-4">Pen Bank</h2>
            <p className="mb-4 text-gray-200">
              Transforming used pens into handmade upcycled products while reducing plastic waste and supporting sustainable livelihoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-penBank-cream transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-penBank-cream transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-penBank-cream transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-penBank-cream transition-colors" aria-label="Youtube">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-quicksand font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-penBank-cream transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-penBank-cream transition-colors">About Us</a></li>
              <li><a href="#problem" className="hover:text-penBank-cream transition-colors">The Problem</a></li>
              <li><a href="#process" className="hover:text-penBank-cream transition-colors">Our Process</a></li>
              <li><a href="#gallery" className="hover:text-penBank-cream transition-colors">Gallery</a></li>
              <li><a href="#get-involved" className="hover:text-penBank-cream transition-colors">Get Involved</a></li>
              <li><a href="#contact" className="hover:text-penBank-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-quicksand font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@penbank.org" className="hover:text-penBank-cream transition-colors">info@penbank.org</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-penBank-cream transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Pen Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
