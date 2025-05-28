// FILE: src/pages/HomePage.jsx
import React from 'react';
// Link from react-router-dom is NO LONGER NEEDED for this component
import AnimatedSection from '../components/AnimatedSection'; // Assuming AnimatedSection.jsx is in src/components/

// IMPORTANT: Replace 'youremail@example.com' with your actual email address
const CONTACT_EMAIL_ADDRESS = 'youremail@example.com'; 

const HomePage = () => {

  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // HomePage: White background, black text
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white text-black">
      <AnimatedSection className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-down text-black">
          Hello, I'm Soyesh Shrestha
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        An undergraduate student pursuing a Bachelor's Degree in BSc. (Hons) Computing. I am a tech enthusiast, a persistent learner, and highly motivated individual. I try to make the most out of myself everyday and work hard accordingly.
        </p>
        <div className="space-x-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {/* Changed from react-router-dom <Link> to an <a> tag for scroll navigation */}
          <a
            href="#work" 
            onClick={(e) => handleScrollTo(e, 'work')}
            className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 inline-block" 
          >
            View My Work
          </a>
          {/* "Get In Touch" is already an <a> tag with mailto: */}
          <a
            href={`mailto:${CONTACT_EMAIL_ADDRESS}`}
            className="bg-transparent hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-lg border border-gray-500 hover:border-black shadow-lg transform hover:scale-105 transition-transform duration-300 inline-block" 
          >
            Get In Touch
          </a>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={300} className="absolute bottom-8 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
