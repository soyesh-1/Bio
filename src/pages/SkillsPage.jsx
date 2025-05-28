// FILE: src/pages/SkillsPage.jsx
import React from 'react';
// 1. ENSURE THIS PATH IS CORRECT & AnimatedSection.jsx IS EXPORTING DEFAULT CORRECTLY
import AnimatedSection from '../components/AnimatedSection'; 

// Importing specific icons from react-icons
// 2. CRITICAL: ENSURE `react-icons` IS INSTALLED. Run in your terminal: npm install react-icons
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa'; 
// SiRstudio has been REMOVED from this import line to prevent the error.
import { SiFlutter, SiKotlin, SiExpress, SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs, SiCplusplus } from 'react-icons/si'; 

const SkillsPage = () => {
  const skills = [
    { 
      name: "React", 
      level: "Advanced", 
      icon: <FaReact size={48} className="mx-auto mb-3 text-blue-500" /> 
    },
    
    { 
      name: "RStudio",
      level: "Intermediate", 
      // Using a generic placeholder for RStudio icon to avoid the error.
      // You can search for a suitable RStudio icon on the react-icons website and add it later.
      icon: <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gray-300 rounded-md text-gray-700 text-2xl font-semibold">R</div>
    },
    { 
      name: "C++", 
      level: "Intermediate", 
      icon: <SiCplusplus size={45} className="mx-auto mb-3 text-blue-800" /> 
    },
    { 
      name: "HTML5", 
      level: "Proficient", 
      icon: <FaHtml5 size={45} className="mx-auto mb-3 text-orange-500" /> 
    },
    { 
      name: "CSS3", 
      level: "Proficient", 
      icon: <FaCss3Alt size={48} className="mx-auto mb-3 text-blue-600" /> 
    },
    { 
      name: "Tailwind CSS", 
      level: "Proficient", 
      icon: <SiTailwindcss size={48} className="mx-auto mb-3 text-teal-500" /> 
    },
    { 
      name: "Next.js", 
      level: "Intermediate", 
      icon: <SiNextdotjs size={48} className="mx-auto mb-3 text-black" /> 
    },
    { 
      name: "Node.js", 
      level: "Proficient", 
      icon: <FaNodeJs size={48} className="mx-auto mb-3 text-green-500" /> 
    },
    { 
      name: "JavaScript", 
      level: "Advanced", 
      icon: <SiJavascript size={48} className="mx-auto mb-3 text-yellow-400" /> 
    },
    { 
      name: "Express.js", 
      level: "Proficient", 
      icon: <SiExpress size={48} className="mx-auto mb-3 text-gray-700" /> 
    },
    { 
      name: "Python", 
      level: "Advanced", 
      icon: <FaPython size={48} className="mx-auto mb-3 text-yellow-500" /> 
    },
    { 
      name: "Flutter", 
      level: "Intermediate", 
      icon: <SiFlutter size={48} className="mx-auto mb-3 text-blue-400" /> 
    },
    { 
      name: "Kotlin", 
      level: "Intermediate", 
      icon: <SiKotlin size={48} className="mx-auto mb-3 text-purple-500" /> 
    },
    { 
      name: "Firebase", 
      level: "Intermediate", 
      icon: <SiFirebase size={48} className="mx-auto mb-3 text-yellow-400" /> 
    },
    { 
      name: "MongoDB", 
      level: "Intermediate", 
      icon: <SiMongodb size={48} className="mx-auto mb-3 text-green-600" /> 
    },
    { 
      name: "Git & GitHub", 
      level: "Proficient", 
      icon: <FaGithub size={48} className="mx-auto mb-3 text-gray-800" /> 
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-black tracking-tight">
          My Skills
        </h2>
      </AnimatedSection>
      {/* The grid container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          // CRITICAL: AnimatedSection (the grid item) must be h-full
          <AnimatedSection key={skill.name} delay={index * 100} className="h-full">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center justify-start h-full"> {/* Card is also h-full */}
              {skill.icon || <div className="h-[48px] w-[48px] mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-2xl">?</div>}
              <h3 className="text-xl font-semibold text-black mb-1 mt-2 flex-grow">{skill.name}</h3>
              <p className="text-gray-600 text-sm">{skill.level}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};
export default SkillsPage;