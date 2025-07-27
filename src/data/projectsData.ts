import { Project } from '../types/project';

export const projectsData: Project[] = [
  // Docker Tasks
  {
    id: 'docker-basic-setup',
    title: 'Docker Basic Setup & Configuration',
    description: 'Complete Docker environment setup with container management and basic operations.',
    techStack: ['Docker', 'Docker Compose', 'Linux', 'Shell Scripting'],
    githubUrl: 'https://github.com/rohit99-23/docker-tasks',
    image: '/images/docker-basic.jpg',
    category: 'docker-task',
    featured: true,
    taskType: 'task',
    difficulty: 'beginner'
  },
  {
    id: 'docker-web-app',
    title: 'Docker Web Application Deployment',
    description: 'Deploy web applications using Docker containers with Apache/Nginx servers.',
    techStack: ['Docker', 'Apache', 'Nginx', 'Web Server', 'Containerization'],
    githubUrl: 'https://github.com/rohit99-23/docker-web-deployment',
    image: '/images/docker-web.jpg',
    category: 'docker-task',
    featured: true,
    taskType: 'task',
    difficulty: 'intermediate'
  },
  {
    id: 'docker-database',
    title: 'Docker Database Management',
    description: 'Database containerization and management with MySQL, PostgreSQL, and MongoDB.',
    techStack: ['Docker', 'MySQL', 'PostgreSQL', 'MongoDB', 'Database'],
    githubUrl: 'https://github.com/rohit99-23/docker-database',
    image: '/images/docker-db.jpg',
    category: 'docker-task',
    featured: false,
    taskType: 'task',
    difficulty: 'intermediate'
  },
  {
    id: 'docker-ci-cd',
    title: 'Docker CI/CD Pipeline',
    description: 'Automated build and deployment pipeline using Docker and Jenkins.',
    techStack: ['Docker', 'Jenkins', 'CI/CD', 'Git', 'Automation'],
    githubUrl: 'https://github.com/rohit99-23/docker-cicd',
    image: '/images/docker-cicd.jpg',
    category: 'docker-task',
    featured: true,
    taskType: 'task',
    difficulty: 'advanced'
  },
  {
    id: 'docker-microservices',
    title: 'Docker Microservices Architecture',
    description: 'Microservices deployment and orchestration using Docker containers.',
    techStack: ['Docker', 'Microservices', 'API Gateway', 'Service Discovery', 'Load Balancing'],
    githubUrl: 'https://github.com/rohit99-23/docker-microservices',
    image: '/images/docker-microservices.jpg',
    category: 'docker-task',
    featured: true,
    taskType: 'task',
    difficulty: 'advanced'
  },

  // Major Projects
  {
    id: 'myapp123',
    title: 'MyApp123 - Full Stack Application',
    description: 'Complete full-stack web application with modern architecture and comprehensive features.',
    techStack: ['Full Stack', 'Web Development', 'Database', 'API', 'User Management'],
    githubUrl: 'https://github.com/rohit99-23/myapp123',
    liveUrl: 'https://myapp123-demo.netlify.app',
    image: '/images/myapp123.jpg',
    category: 'major-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },
  {
    id: 'microservice-architecture',
    title: 'Microservice Architecture Platform',
    description: 'Scalable microservices platform with service discovery, load balancing, and API gateway.',
    techStack: ['Microservices', 'API Gateway', 'Service Discovery', 'Load Balancing', 'Docker'],
    githubUrl: 'https://github.com/rohit99-23/microservice',
    liveUrl: 'https://microservice-demo.netlify.app',
    image: '/images/microservice.jpg',
    category: 'major-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },
  {
    id: 'aiops-platform',
    title: 'AIOps Platform',
    description: 'Artificial Intelligence for IT Operations platform with monitoring and automation.',
    techStack: ['AI/ML', 'DevOps', 'Monitoring', 'Automation', 'Machine Learning'],
    githubUrl: 'https://github.com/rohit99-23/aiops',
    liveUrl: 'https://aiops-demo.netlify.app',
    image: '/images/aiops.jpg',
    category: 'major-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },

  // Mini Projects
  {
    id: 'mini-task-calculator',
    title: 'Mini Task Calculator',
    description: 'Advanced calculator with scientific functions and user-friendly interface.',
    techStack: ['C++', 'OOP', 'Mathematics', 'Console I/O', 'Algorithms'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-calculator',
    image: '/images/mini-calculator.jpg',
    category: 'mini-project',
    featured: true,
    taskType: 'project',
    difficulty: 'beginner'
  },
  {
    id: 'mini-task-game',
    title: 'Mini Task Game Collection',
    description: 'Collection of simple games with menu-driven interfaces and interactive gameplay.',
    techStack: ['C++', 'Game Logic', 'Menu System', 'Graphics', 'Game Development'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-game',
    image: '/images/mini-game.jpg',
    category: 'mini-project',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'mini-task-chat',
    title: 'Mini Task Chat Application',
    description: 'Console-based chat application with real-time messaging and user management.',
    techStack: ['C++', 'Networking', 'Socket Programming', 'Multi-threading', 'Console I/O'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-chat',
    image: '/images/mini-chat.jpg',
    category: 'mini-project',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'mini-task-automation',
    title: 'Mini Task Automation Scripts',
    description: 'Collection of automation scripts for various system tasks and utilities.',
    techStack: ['Python', 'Shell Scripting', 'Automation', 'System Administration', 'Utilities'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-automation',
    image: '/images/mini-automation.jpg',
    category: 'mini-project',
    featured: false,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'mini-task-web',
    title: 'Mini Task Web Applications',
    description: 'Small web applications built with various frameworks and technologies.',
    techStack: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Web Development'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-web',
    image: '/images/mini-web.jpg',
    category: 'mini-project',
    featured: false,
    taskType: 'project',
    difficulty: 'beginner'
  },

  // Linux Tasks
  {
    id: 'linux-system-admin',
    title: 'Linux System Administration',
    description: 'Complete Linux system administration tasks including user management, file permissions, and system monitoring.',
    techStack: ['Linux', 'System Administration', 'Shell Scripting', 'User Management', 'File Permissions'],
    githubUrl: 'https://github.com/rohit99-23/linux-admin',
    image: '/images/linux-admin.jpg',
    category: 'linux-task',
    featured: true,
    taskType: 'task',
    difficulty: 'intermediate'
  },
  {
    id: 'linux-networking',
    title: 'Linux Networking Configuration',
    description: 'Network configuration, firewall setup, and network troubleshooting on Linux systems.',
    techStack: ['Linux', 'Networking', 'Firewall', 'IP Configuration', 'Network Security'],
    githubUrl: 'https://github.com/rohit99-23/linux-networking',
    image: '/images/linux-network.jpg',
    category: 'linux-task',
    featured: true,
    taskType: 'task',
    difficulty: 'intermediate'
  },
  {
    id: 'linux-automation',
    title: 'Linux Automation Scripts',
    description: 'Automation scripts for system maintenance, backup, and monitoring tasks.',
    techStack: ['Linux', 'Shell Scripting', 'Automation', 'Cron Jobs', 'System Monitoring'],
    githubUrl: 'https://github.com/rohit99-23/linux-automation',
    image: '/images/linux-automation.jpg',
    category: 'linux-task',
    featured: false,
    taskType: 'task',
    difficulty: 'advanced'
  },
  {
    id: 'linux-server-setup',
    title: 'Linux Server Setup & Configuration',
    description: 'Complete server setup including web server, database server, and security configurations.',
    techStack: ['Linux', 'Server Setup', 'Apache/Nginx', 'Database Server', 'Security'],
    githubUrl: 'https://github.com/rohit99-23/linux-server',
    image: '/images/linux-server.jpg',
    category: 'linux-task',
    featured: true,
    taskType: 'task',
    difficulty: 'advanced'
  },
  {
    id: 'linux-security',
    title: 'Linux Security Hardening',
    description: 'Security hardening and best practices implementation for Linux systems.',
    techStack: ['Linux', 'Security', 'Hardening', 'Audit', 'Compliance'],
    githubUrl: 'https://github.com/rohit99-23/linux-security',
    image: '/images/linux-security.jpg',
    category: 'linux-task',
    featured: true,
    taskType: 'task',
    difficulty: 'advanced'
  },

  // C++ Projects
  {
    id: 'cpp-calculator',
    title: 'C++ Calculator Application',
    description: 'Advanced calculator with scientific functions, memory operations, and user-friendly console interface.',
    techStack: ['C++', 'OOP', 'Console I/O', 'Algorithms', 'Mathematics'],
    githubUrl: 'https://github.com/rohit99-23/calculator',
    image: '/images/cpp-calculator.jpg',
    category: 'cpp-project',
    featured: true,
    taskType: 'project',
    difficulty: 'beginner'
  },
  {
    id: 'cpp-chat-app',
    title: 'C++ Console Chat Application',
    description: 'Multi-threaded console-based chat application with real-time messaging and user management system.',
    techStack: ['C++', 'Winsock', 'Multithreading', 'Networking', 'Socket Programming'],
    githubUrl: 'https://github.com/rohit99-23/chat_app',
    image: '/images/cpp-chat.jpg',
    category: 'cpp-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },
  {
    id: 'cpp-game',
    title: 'C++ Game Development',
    description: 'Collection of basic and simple games with menu-driven interfaces and interactive gameplay mechanics.',
    techStack: ['C++', 'Game Logic', 'Menu System', 'Graphics', 'Game Development'],
    githubUrl: 'https://github.com/rohit99-23/Game',
    image: '/images/cpp-game.jpg',
    category: 'cpp-project',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
  },

  // Own Projects
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing skills, projects, and professional experience.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    githubUrl: 'https://github.com/rohit99-23/Rohit',
    liveUrl: 'https://rohitkumar77.netlify.app',
    image: '/images/portfolio.jpg',
    category: 'own',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'mess-application',
    title: 'Mess Management Application',
    description: 'Complete mess management system with user management, billing, and inventory tracking.',
    techStack: ['Web Development', 'Database', 'User Management', 'Billing System', 'Inventory'],
    githubUrl: 'https://github.com/rohit99-23/mess-app',
    liveUrl: 'https://mess-app-demo.netlify.app',
    image: '/images/mess-app.jpg',
    category: 'own',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation Tools',
    description: 'Collection of automation scripts and tools for DevOps workflows and CI/CD pipelines.',
    techStack: ['DevOps', 'Automation', 'Shell Scripting', 'CI/CD', 'Infrastructure'],
    githubUrl: 'https://github.com/rohit99-23/devops-tools',
    image: '/images/devops-tools.jpg',
    category: 'own',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  }
];

export const getProjectsByCategory = (category: string) => {
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByDifficulty = (difficulty: string) => {
  return projectsData.filter(project => project.difficulty === difficulty);
};

export const getTaskProjects = () => {
  return projectsData.filter(project => project.taskType === 'task');
};

export const getProjectProjects = () => {
  return projectsData.filter(project => project.taskType === 'project');
}; 