import React, { useState } from 'react';
import { ExternalLink, Github, Terminal, Play, FolderOpen } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showTerminal, setShowTerminal] = useState<number | null>(null);
  const [activeDomain, setActiveDomain] = useState<string>('all');

  const projectDomains = [
    { id: 'all', name: 'All Projects', icon: '📁' },
    { id: 'devops', name: 'DevOps', icon: '🐳' },
    { id: 'python-ml', name: 'Python & ML', icon: '🐍' },
    { id: 'cpp', name: 'C++', icon: '⚡' },
    { id: 'menu-based', name: 'Menu-based', icon: '📋' },
    { id: 'major', name: 'Major Projects', icon: '🚀' },
    { id: 'mini', name: 'Mini Projects', icon: '🔧' }
  ];

  const projects = [
    // DevOps Projects
    {
      title: 'Docker Containerization',
      description: 'Containerized applications using Docker for consistent deployment across different environments.',
      stack: ['Docker', 'Jenkins', 'Git', 'Bash'],
      github: 'https://github.com/rohit99-23',
      live: null,
      domain: 'devops',
      logs: [
        '> docker build -t myapp .',
        '> Building Docker image...',
        '> Image built successfully: myapp:latest',
        '> docker run -d -p 8080:80 myapp',
        '> Container started successfully',
        '> Application running on port 8080 ✅'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated build and deployment pipeline using Jenkins and Git for continuous integration.',
      stack: ['Jenkins', 'Git', 'GitHub', 'Bash'],
      github: 'https://github.com/rohit99-23',
      live: null,
      domain: 'devops',
      logs: [
        '> Jenkins build triggered...',
        '> Cloning repository... ✅',
        '> Running tests... ✅',
        '> Building application... ✅',
        '> Deploying to staging... ✅',
        '> Pipeline completed successfully! 🚀'
      ],
      color: 'from-green-500 to-teal-600'
    },

    // Python & ML Projects
    {
      title: 'Flask Web Application',
      description: 'Web application built with Flask framework for API development and web services.',
      stack: ['Python', 'Flask', 'HTML/CSS', 'JSON'],
      github: 'https://github.com/rohit99-23',
      live: null,
      domain: 'python-ml',
      logs: [
        '> python app.py',
        '> Flask development server starting...',
        '> Running on http://127.0.0.1:5000',
        '> Debug mode: on',
        '> Restarting with stat',
        '> Application ready! ✅'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Streamlit Data App',
      description: 'Interactive data visualization and analysis application using Streamlit framework.',
      stack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/rohit99-23',
      live: null,
      domain: 'python-ml',
      logs: [
        '> streamlit run app.py',
        '> Loading data...',
        '> Processing datasets...',
        '> Creating visualizations...',
        '> App running on http://localhost:8501',
        '> Data app ready! 📊'
      ],
      color: 'from-red-500 to-pink-600'
    },

    // C++ Projects
    {
      title: 'Calculator Application',
      description: 'Console-based calculator with basic arithmetic operations and user interface.',
      stack: ['C++', 'OOP', 'Console I/O'],
      github: 'https://github.com/rohit99-23/calculator',
      live: null,
      domain: 'cpp',
      logs: [
        '> g++ calculator.cpp -o calculator',
        '> Compilation successful',
        '> ./calculator',
        '> Calculator initialized',
        '> Ready for calculations...',
        '> Enter operation: 5 + 3 = 8 ✅'
      ],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Console Chat Application',
      description: 'Multi-threaded console-based chat application using C++ and Winsock for networking.',
      stack: ['C++', 'Winsock', 'Multithreading', 'Networking'],
      github: 'https://github.com/rohit99-23/chat_app',
      live: null,
      domain: 'cpp',
      logs: [
        '> Starting chat server...',
        '> Server listening on port 8080',
        '> Client connected: 192.168.1.100',
        '> Chat session established',
        '> Messages being exchanged...',
        '> Chat application running! 💬'
      ],
      color: 'from-purple-500 to-indigo-600'
    },

    // Menu-based Projects
    {
      title: 'Game Development',
      description: 'Basic and simple games developed using C++ with menu-driven interfaces.',
      stack: ['C++', 'Game Logic', 'Menu System'],
      github: 'https://github.com/rohit99-23/Game',
      live: null,
      domain: 'menu-based',
      logs: [
        '> Compiling game...',
        '> Game engine initialized',
        '> Loading game assets...',
        '> Menu system ready',
        '> Game started successfully',
        '> Player score: 0 🎮'
      ],
      color: 'from-green-500 to-blue-600'
    },

    // Major Projects
    {
      title: 'Zero Waste Application',
      description: 'Major project focused on waste management and sustainability using modern technologies.',
      stack: ['Multiple Technologies', 'Web Development', 'Database'],
      github: 'https://github.com/rohit99-23/zero_waste',
      live: null,
      domain: 'major',
      logs: [
        '> Initializing Zero Waste App...',
        '> Database connection established',
        '> User authentication system ready',
        '> Waste tracking module active',
        '> Sustainability metrics calculated',
        '> Major project deployed! 🌱'
      ],
      color: 'from-purple-500 to-pink-600'
    },

    // Mini Projects
    {
      title: 'Web Development Projects',
      description: 'Various mini web development projects using HTML, CSS, and basic web technologies.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      github: 'https://github.com/rohit99-23/project',
      live: null,
      domain: 'mini',
      logs: [
        '> Creating web project...',
        '> HTML structure built',
        '> CSS styling applied',
        '> JavaScript functionality added',
        '> Responsive design implemented',
        '> Mini project complete! 🌐'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const filteredProjects = activeDomain === 'all' 
    ? projects 
    : projects.filter(project => project.domain === activeDomain);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> cat projects.json
        </h2>

        {/* Domain Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActiveDomain(domain.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeDomain === domain.id
                  ? 'bg-neon-green text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-neon-green'
              }`}
            >
              <span>{domain.icon}</span>
              {domain.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="p-6">
                <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
                
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-neon-green text-xs font-mono rounded-full border border-neon-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setShowTerminal(showTerminal === index ? null : index)}
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <Terminal className="w-5 h-5" />
                    <span className="text-sm">Logs</span>
                  </button>
                </div>
              </div>

              {/* Terminal Overlay */}
              {showTerminal === index && (
                <div className="absolute inset-0 bg-black/95 backdrop-blur-sm z-10 p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-2">terminal</span>
                    <button
                      onClick={() => setShowTerminal(null)}
                      className="ml-auto text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-1">
                    {project.logs.map((log, logIndex) => (
                      <div
                        key={logIndex}
                        className="text-neon-green animate-fade-in"
                        style={{ animationDelay: `${logIndex * 0.1}s` }}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;