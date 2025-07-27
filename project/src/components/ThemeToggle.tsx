import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 bg-gray-900 border border-neon-green/30 rounded-full flex items-center justify-center hover:border-neon-green/60 transition-all duration-300 transform hover:scale-110"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-400 animate-pulse" />
      ) : (
        <Moon className="w-6 h-6 text-sky-blue animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;