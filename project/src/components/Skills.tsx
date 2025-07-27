import React, { useState } from 'react';
import {
  Server,
  Cloud,
  Settings,
  GitBranch,
  Code,
  Database,
  Monitor,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: <Settings className="w-8 h-8" />,
        skills: [
          { name: 'Jenkins', color: 'from-red-500 to-orange-500' },
          { name: 'Docker', color: 'from-blue-400 to-blue-600' },
          { name: 'Git', color: 'from-gray-600 to-gray-800' },
          { name: 'GitHub', color: 'from-gray-800 to-black' },
          { name: 'Ansible', color: 'from-yellow-600 to-yellow-800' },
          { name: 'Prometheus', color: 'from-pink-500 to-pink-700' },
          { name: 'Grafana', color: 'from-amber-500 to-orange-600' },
          { name: 'Kubernetes', color: 'from-indigo-500 to-indigo-800' }
        ]
        
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'C++', color: 'from-blue-500 to-blue-700' },
        { name: 'Python', color: 'from-yellow-500 to-blue-500' },
        { name: 'Bash', color: 'from-green-500 to-green-700' },
        { name: 'HTML/CSS', color: 'from-orange-500 to-pink-500' }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Flask', color: 'from-gray-500 to-gray-700' },
        { name: 'Streamlit', color: 'from-red-400 to-red-600' },
        { name: 'Flask APIs', color: 'from-green-400 to-green-600' },
        { name: 'pyttsx3', color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: <Terminal className="w-8 h-8" />,
      skills: [
        { name: 'OOP', color: 'from-blue-400 to-blue-600' },
        { name: 'CI/CD', color: 'from-green-500 to-blue-500' },
        { name: 'Client-Server', color: 'from-purple-500 to-pink-500' },
        { name: 'SDLC', color: 'from-orange-500 to-red-500' },
        { name: 'Machine Learning', color: 'from-indigo-500 to-purple-500' },
        { name: 'Dockerfile', color: 'from-cyan-500 to-blue-600' },
        { name: 'Docker Compose', color: 'from-yellow-500 to-orange-500' },
        { name: 'Ansible Playbook', color: 'from-red-500 to-yellow-500' }
      ]      
    },
    {
      title: 'Tools & IDEs',
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: 'VS Code', color: 'from-blue-500 to-blue-700' },
        { name: 'Figma', color: 'from-purple-500 to-pink-500' },
        { name: 'Streamlit Cloud', color: 'from-red-400 to-red-600' }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'Python', color: 'from-yellow-500 to-blue-500' },
        { name: 'Machine Learning', color: 'from-indigo-500 to-purple-500' },
        { name: 'Deep Learning', color: 'from-pink-500 to-red-500' },
        { name: 'NLP', color: 'from-green-500 to-blue-500' },
        { name: 'EDA', color: 'from-orange-500 to-yellow-500' },
        { name: 'Scikit-Learn', color: 'from-blue-400 to-blue-700' },
        { name: 'TensorFlow', color: 'from-yellow-400 to-orange-400' },
        { name: 'Keras', color: 'from-pink-400 to-red-400' }
      ]
    },
    {
      title: 'Data & Visualization',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MySQL/SQL', color: 'from-blue-500 to-blue-700' },
        { name: 'Power BI', color: 'from-yellow-500 to-yellow-700' },
        { name: 'Tableau', color: 'from-blue-400 to-blue-600' },
        { name: 'Excel', color: 'from-green-400 to-green-600' }
      ]
    },
    {
      title: 'Web & Programming',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'HTML', color: 'from-orange-500 to-pink-500' },
        { name: 'CSS', color: 'from-blue-400 to-blue-600' },
        { name: 'Flask', color: 'from-gray-500 to-gray-700' },
        { name: 'Javascript', color: 'from-yellow-400 to-orange-400' }
      ]
    },
    {
      title: 'Database & OS',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', color: 'from-green-500 to-green-700' },
        { name: 'JSON', color: 'from-yellow-500 to-orange-500' },
        { name: 'Windows', color: 'from-blue-500 to-blue-700' },
        { name: 'RHEL', color: 'from-red-500 to-red-700' },
        { name: 'Ubuntu', color: 'from-orange-500 to-orange-700' }
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
                  <div key={skillIndex}>
                    <span className="text-gray-300 font-mono text-sm mb-1 block">
                      {skill.name}
                    </span>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} relative animate-pulse group-hover:animate-none`}
                        style={{ width: '100%' }}
                      />
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
                <div
                  className={`w-full h-2 bg-gradient-to-r ${domain.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
