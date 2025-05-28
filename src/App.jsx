import React, { useEffect } from 'react';
// HashRouter, Routes, Route, useLocation from react-router-dom are no longer needed for single-page scroll

// Import Reusable Components
import Navbar from '../src/components/Navbar';       // From src/components/Navbar/Navbar.jsx
import Footer from './components/Footer';           // From src/components/Footer.jsx
// AnimatedSection will be used by individual page/section components directly
// PageWrapper is no longer needed for router-based transitions

// Import Page/Section Components
import HomePage from './pages/HomePage';             // From src/pages/HomePage.jsx
import WorkPage from './pages/WorkPage';               // From src/pages/WorkPage.jsx
import AboutPage from './pages/AboutPage';             // From src/pages/AboutPage.jsx
import SkillsPage from './pages/SkillsPage';           // From src/pages/SkillsPage.jsx
import ContactPage from './pages/ContactPage';         // From src/pages/ContactPage.jsx

// Global styles previously in App.jsx's useEffect can be kept here or moved to index.css if purely CSS
// For keyframes, keeping them here or in tailwind.config.js is fine.

function App() {
  useEffect(() => {
    // Add smooth scroll behavior to the html element for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';

    const styleId = 'global-app-animations';
    if (document.getElementById(styleId)) return; 
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      /* Keyframe animations remain the same */
      @keyframes page-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      /* .animate-page-fade-in class might be less relevant for single-page scroll, but AnimatedSection handles individual section animations */
      @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
      @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      @keyframes zoom-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }

      /* Ensure sections have some padding, especially the first one after the fixed navbar */
      section:first-of-type {
        padding-top: 5rem; /* Adjust based on your navbar height if content is hidden */
      }
      section {
        padding-bottom: 4rem; /* Add some space between sections */
      }
    `;
    document.head.appendChild(style);

    // Cleanup scroll behavior on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Constants like CONTACT_EMAIL_ADDRESS and EmailJS keys should be managed
  // within the components that directly use them (HomePage.jsx, Navbar.jsx, ContactPage.jsx)
  // or from a shared configuration file if preferred.

  return (
    // No Router needed here for the main structure
    <div className="flex flex-col min-h-screen bg-white"> {/* Default background white */}
      <Navbar /> 
      
      {/* Sections are laid out sequentially, each with an ID for Navbar linking */}
      <div id="home"> {/* Wrapper div for HomePage to apply ID */}
        <HomePage />
      </div>
      
      <div id="work"> {/* Wrapper div for WorkPage to apply ID */}
        <WorkPage />
      </div>
      
      <div id="skills"> {/* Wrapper div for SkillsPage to apply ID */}
        <SkillsPage />
      </div>
      
      <div id="about"> {/* Wrapper div for AboutPage to apply ID - second to last */}
        <AboutPage />
      </div>
      
      <div id="contact"> {/* Wrapper div for ContactPage to apply ID */}
        <ContactPage />
      </div>
      
      <Footer /> 
    </div>
  );
}

export default App;
