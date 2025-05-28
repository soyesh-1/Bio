// src/pages/AboutPage.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => (
  <div className="min-h-screen bg-white text-black p-6 md:p-12">
    <AnimatedSection>
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black tracking-tight">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6 leading-relaxed">
        <p>Hi, I’m Soyesh Shrestha, a frontend developer passionate about building clean, user-friendly web experiences. I enjoy turning complex ideas into simple, elegant interfaces that people love to use.</p>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-black mb-3">What I Bring to the Table</h3>
          <p>I specialize in React.js and modern JavaScript, crafting responsive and accessible websites with pixel-perfect design. My focus is on performance, usability, and writing clean, maintainable code.</p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-black mb-3">Tech Stack</h3>
          <p>HTML, CSS (Sass & Tailwind), JavaScript (ES6+), React, Git, Firebase, and UI/UX collaboration tools like Figma.</p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-black mb-3">What’s Next?</h3>
          <p>I’m currently diving deeper into backend development and TypeScript to expand my skillset and build full-stack applications that deliver seamless experiences.</p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-black mb-3">Fun Facts</h3>
          <ul className="list-disc list-inside space-y-2 pl-5"> {/* Added pl-5 for better list indentation */}
            <li>I’m a huge fan of minimalist design — less is more.</li>
            <li>Solving UI challenges is my kind of puzzle.</li>
            <li>When not coding, you’ll find me exploring music, gaming, or planning my next travel adventure.</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default AboutPage;