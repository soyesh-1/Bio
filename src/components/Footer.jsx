// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin } from 'lucide-react'; // Ensure lucide-react is installed

const Footer = () => (
  <footer className="bg-gray-50 text-gray-700 p-8 text-center border-t border-gray-200">
    <div className="mb-4 flex justify-center space-x-6">
      <a 
        href="https://github.com/yourusername" /* Replace yourusername */
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-black transition-colors"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/yourprofile" /* Replace yourprofile */
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-black transition-colors"
      >
        <Linkedin size={24} />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} Soyesh Shrestha. All rights reserved.</p>
    <p className="text-xs mt-2 text-gray-500"></p>
  </footer>
);

export default Footer;