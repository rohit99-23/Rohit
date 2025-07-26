import React, { useState } from 'react';
import { Server, Cloud, Settings, GitBranch, Code, Database, Monitor, Terminal } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: 'Jenkins', level: 75, color: 'from-red-500 to-orange-500' },
        { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Git', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'GitHub', level: 90, color: 'from-gray-800 to-black' },
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'C++', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Python', level: 80, color: 'from-yellow-500 to-blue-500' },
        { name: 'Bash', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'HTML/CSS', level: 70, color: 'from-orange-500 to-pink-500' },
      ]
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Flask', level: 75, color: 'from-gray-500 to-gray-700' },
        { name: 'Streamlit', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'Flask APIs', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'pyttsx3', level: 70, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Core Concepts',
      icon: <Terminal className="w-8 h-8" />,
      skills: [
        { name: 'OOP', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'CI/CD', level: 75, color: 'from-green-500 to-blue-500' },
        { name: 'Client-Server', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'SDLC', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Machine Learning', level: 70, color: 'from-indigo-500 to-purple-500' },
      ]
    },
    {
      title: 'Tools & IDEs',
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-pink-500' },
        { name: 'Streamlit Cloud', level: 75, color: 'from-red-400 to-red-600' },
      ]
    },
    {
      title: 'Database & OS',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'JSON', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Windows', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'RHEL', level: 70, color: 'from-red-500 to-red-700' },
        { name: 'Ubuntu', level: 75, color: 'from-orange-500 to-orange-700' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> ls -la skills/
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-neon-green group-hover:text-sky-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-space-grotesk font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className="text-neon-green font-mono text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out relative`}
                        style={{
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` 
                            ? `${skill.level}%` 
                            : '0%'
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Domains */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-space-grotesk font-bold mb-8 text-neon-green">
            Project Domains
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'DevOps', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
              { name: 'Python & ML', icon: '🐍', color: 'from-yellow-500 to-green-500' },
              { name: 'C++', icon: '⚡', color: 'from-blue-600 to-purple-600' },
              { name: 'Menu-based Projects', icon: '📋', color: 'from-green-500 to-blue-500' },
              { name: 'Major Projects', icon: '🚀', color: 'from-purple-500 to-pink-500' },
              { name: 'Mini Projects', icon: '🔧', color: 'from-orange-500 to-red-500' }
            ].map((domain, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h4 className="text-lg font-space-grotesk font-bold text-white mb-2">
                  {domain.name}
                </h4>
                <div className={`w-full h-2 bg-gradient-to-r ${domain.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;