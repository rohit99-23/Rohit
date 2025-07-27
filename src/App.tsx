import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme to localStorage and update CSS variables
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update CSS variables for theme
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#111827');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#9ca3af');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f3f4f6');
      root.style.setProperty('--text-primary', '#000000');
      root.style.setProperty('--text-secondary', '#374151');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} transition-all duration-500`}>
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'} min-h-screen relative overflow-x-hidden`}>
        <ParticleBackground />
        <ScrollProgress />
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;