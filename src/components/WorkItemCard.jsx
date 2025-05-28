// FILE: src/components/WorkItemCard.jsx
import React from 'react';
import { Send, Github } from 'lucide-react';

const WorkItemCard = ({ item }) => (
  // CRITICAL: Card root div is flex, flex-col, and h-full
  <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-gray-400/50 group flex flex-col h-full">
    {/* Image container with fixed aspect ratio and flex-shrink-0 to prevent shrinking */}
    <div className="aspect-[16/10] overflow-hidden flex-shrink-0">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/D1D5DB/374151?text=Image+Error"; }} 
      />
    </div>
    {/* Content area is flex, flex-col, and flex-grow to take remaining space */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold mb-3 text-black">{item.title}</h3>
      {/* Description has flex-grow to expand and line-clamp to limit lines */}
      <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow line-clamp-3"> 
        {item.description}
      </p>
      <div className="mb-4"> {/* Tech tags section */}
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {item.tech.map(t => (
            <span key={t} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
      {/* Links container pushed to the bottom */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex justify-end space-x-3">
          {item.liveUrl && item.liveUrl !== '#' && (
            <a 
              href={item.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-700 hover:text-black transition-colors duration-300 flex items-center"
            >
              <Send size={16} className="mr-1" /> Live Demo
            </a>
          )}
          {item.codeUrl && item.codeUrl !== '#' && (
            <a 
              href={item.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-500 hover:text-black transition-colors duration-300 flex items-center"
            >
              <Github size={16} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default WorkItemCard;