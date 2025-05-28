import React, { useState, useEffect } from 'react';
// Link and useLocation from react-router-dom are removed as they are not used for single-page scroll navigation
import { HomeIcon, Briefcase, User as UserIcon, Cpu as SkillsIcon, Mail, Menu, X, MailIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation(); // Removed this line

  // IMPORTANT: Replace 'youremail@example.com' with your actual email address
  const yourEmailAddress = 'soyeshxrestha@gmail.com'; 

  const navLinks = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={18} /> },
    { id: 'work', label: 'Work', icon: <Briefcase size={18} /> },
    { id: 'skills', label: 'Skills', icon: <SkillsIcon size={18} /> },
    { id: 'about', label: 'About', icon: <UserIcon size={18} /> }, 
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }, 
  ];

  const handleClick = (e, sectionId) => {
    if (!sectionId.startsWith('mailto:')) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); 
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const renderNavLink = (link, isMobile = false) => {
    const commonClasses = isMobile
      ? `block px-3 py-3 rounded-md text-base font-medium flex items-center gap-2`
      : `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors duration-300 ease-in-out group`;
    
    // Removed active link styling based on location.pathname
    // All links will use these classes for now.
    // Active state highlighting for scroll requires a different approach (e.g., Intersection Observer).
    const linkClasses = isMobile
      ? 'text-gray-300 hover:bg-gray-900 hover:text-white'
      : 'text-gray-300 hover:bg-gray-900 hover:text-white';

    return (
      <a
        key={link.id} 
        href={link.isMailto ? link.id : `#${link.id}`}
        className={`${commonClasses} ${linkClasses}`}
        onClick={(e) => handleClick(e, link.id)}
      >
        {link.icon} {link.label}
        {!isMobile && !link.isMailto && <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-700 group-hover:opacity-100 opacity-0`}></span>}
      </a>
    );
  };

  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-50 shadow-lg border-b border-gray-900">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
        Soyesh Shrestha {/* Remember to replace [Your Name] */}
        </a>
        <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {navLinks.map(link => renderNavLink(link, false))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} bg-black absolute left-0 right-0 top-full shadow-lg border-t border-gray-900`}>
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => renderNavLink(link, true))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
