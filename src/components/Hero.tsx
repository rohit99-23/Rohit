import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const lines = [
    "Hi, I'm Rohit Kumar.",
    "DevOps Engineer | Cloud Builder | Automation Enthusiast"
  ];

  useEffect(() => {
    if (currentLine < lines.length && currentChar < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + lines[currentLine][currentChar]);
        setCurrentChar(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentLine < lines.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + '\n');
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, lines]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf'; // You'll need to add your resume file to the public folder
    window.open(resumeUrl, '_blank');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <pre className="text-2xl sm:text-4xl lg:text-6xl font-space-grotesk font-bold text-white leading-tight">
            {displayText}
            <span className="animate-pulse text-neon-green">|</span>
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button 
            onClick={handleResumeClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-green to-sky-blue text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              View Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-blue to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button 
            onClick={handleContactClick}
            className="group relative px-8 py-4 border-2 border-neon-green text-neon-green font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-neon-green hover:text-black"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Let's Connect
            </span>
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-gray-400 hover:text-neon-green transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;