import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const lines = [
    "Hi, I'm Rohit Kumar.",
    "DevOps Engineer | Final Year B.Tech CSE",
    "Automating the future of software delivery, one pipeline at a time."
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

  // Split the display text into lines for proper styling
  const displayLines = displayText.split('\n');

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="text-2xl sm:text-4xl lg:text-6xl font-space-grotesk font-bold text-white leading-tight">
            {/* Name - Large */}
            <div className="text-3xl sm:text-5xl lg:text-7xl mb-4">
              {displayLines[0] || ''}
              {currentLine === 0 && currentChar < lines[0].length && (
                <span className="animate-pulse text-neon-green">|</span>
              )}
            </div>
            
            {/* Job Role - Medium */}
            {displayLines[1] && (
              <div className="text-xl sm:text-2xl lg:text-3xl text-neon-green mb-3 font-medium">
                {displayLines[1]}
                {currentLine === 1 && currentChar < lines[1].length && (
                  <span className="animate-pulse text-neon-green">|</span>
                )}
              </div>
            )}
            
            {/* Description - Small */}
            {displayLines[2] && (
              <div className="text-sm sm:text-lg lg:text-xl text-gray-300 font-normal">
                {displayLines[2]}
                {currentLine === 2 && currentChar < lines[2].length && (
                  <span className="animate-pulse text-neon-green">|</span>
                )}
              </div>
            )}
            
            {/* Show cursor if typing is complete */}
            {currentLine >= lines.length && (
              <span className="animate-pulse text-neon-green">|</span>
            )}
          </div>
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