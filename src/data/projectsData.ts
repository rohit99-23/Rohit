import { Project } from '../types/project';

export const projectsData: Project[] = [
  // DevOps Projects
  {
    id: 'docker-containerization',
    title: 'Docker Containerization',
    description: 'Containerized applications using Docker for consistent deployment across different environments with automated CI/CD pipeline integration.',
    techStack: ['Docker', 'Jenkins', 'Git', 'Bash', 'Linux'],
    githubUrl: 'https://github.com/rohit99-23',
    image: '/images/docker-project.jpg',
    category: 'devops',
    featured: true
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline Setup',
    description: 'Automated build and deployment pipeline using Jenkins and Git for continuous integration with automated testing and deployment.',
    techStack: ['Jenkins', 'Git', 'GitHub', 'Bash', 'Shell Scripting'],
    githubUrl: 'https://github.com/rohit99-23',
    image: '/images/cicd-project.jpg',
    category: 'devops',
    featured: true
  },

  // Python & ML Projects
  {
    id: 'flask-web-app',
    title: 'Flask Web Application',
    description: 'Full-stack web application built with Flask framework featuring RESTful APIs, user authentication, and database integration.',
    techStack: ['Python', 'Flask', 'HTML/CSS', 'JSON', 'SQLite'],
    githubUrl: 'https://github.com/rohit99-23',
    liveUrl: 'https://flask-app-demo.netlify.app',
    image: '/images/flask-project.jpg',
    category: 'python-ml',
    featured: true
  },
  {
    id: 'streamlit-data-app',
    title: 'Streamlit Data App',
    description: 'Interactive data visualization and analysis application with real-time data processing and beautiful charts.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Plotly'],
    githubUrl: 'https://github.com/rohit99-23',
    liveUrl: 'https://streamlit-app-demo.streamlit.app',
    image: '/images/streamlit-project.jpg',
    category: 'python-ml',
    featured: true
  },

  // C++ Projects
  {
    id: 'calculator-app',
    title: 'Calculator Application',
    description: 'Advanced calculator with scientific functions, memory operations, and user-friendly console interface.',
    techStack: ['C++', 'OOP', 'Console I/O', 'Algorithms'],
    githubUrl: 'https://github.com/rohit99-23/calculator',
    image: '/images/calculator-project.jpg',
    category: 'cpp',
    featured: true
  },
  {
    id: 'chat-application',
    title: 'Console Chat Application',
    description: 'Multi-threaded console-based chat application with real-time messaging and user management system.',
    techStack: ['C++', 'Winsock', 'Multithreading', 'Networking', 'Socket Programming'],
    githubUrl: 'https://github.com/rohit99-23/chat_app',
    image: '/images/chat-project.jpg',
    category: 'cpp',
    featured: true
  },

  // Menu-based Projects
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Collection of basic and simple games with menu-driven interfaces and interactive gameplay mechanics.',
    techStack: ['C++', 'Game Logic', 'Menu System', 'Graphics'],
    githubUrl: 'https://github.com/rohit99-23/Game',
    image: '/images/game-project.jpg',
    category: 'menu-based',
    featured: false
  },

  // Major Projects
  {
    id: 'zero-waste-app',
    title: 'Zero Waste Application',
    description: 'Comprehensive waste management and sustainability platform with user tracking and environmental impact metrics.',
    techStack: ['Multiple Technologies', 'Web Development', 'Database', 'Sustainability'],
    githubUrl: 'https://github.com/rohit99-23/zero_waste',
    liveUrl: 'https://zero-waste-demo.netlify.app',
    image: '/images/zero-waste-project.jpg',
    category: 'major',
    featured: true
  },

  // Mini Projects
  {
    id: 'web-development',
    title: 'Web Development Projects',
    description: 'Collection of responsive web applications showcasing modern design principles and interactive features.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Responsive'],
    githubUrl: 'https://github.com/rohit99-23/project',
    liveUrl: 'https://web-projects-demo.netlify.app',
    image: '/images/web-project.jpg',
    category: 'mini',
    featured: false
  }
];

export const getProjectsByCategory = (category: string) => {
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
}; 