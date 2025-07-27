import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-gray-800 border border-neon-green/30 hover:border-neon-green/60 text-yellow-400' 
          : 'bg-white border border-gray-300 hover:border-gray-400 text-gray-700 shadow-lg'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 animate-pulse" />
      ) : (
        <Moon className="w-6 h-6 animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;