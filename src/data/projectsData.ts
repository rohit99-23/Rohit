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

  // Major Projects
  {
    id: 'zero-waste-platform',
    title: 'Zero Waste Management Platform',
    description: 'Comprehensive waste management and sustainability platform with user tracking and environmental impact metrics.',
    techStack: ['Full Stack', 'Web Development', 'Database', 'Sustainability', 'User Management'],
    githubUrl: 'https://github.com/rohit99-23/zero_waste',
    liveUrl: 'https://zero-waste-demo.netlify.app',
    image: '/images/zero-waste.jpg',
    category: 'major-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'Complete e-commerce solution with payment integration, user management, and inventory system.',
    techStack: ['Web Development', 'Payment Gateway', 'Database', 'User Authentication', 'Inventory Management'],
    githubUrl: 'https://github.com/rohit99-23/ecommerce-platform',
    image: '/images/ecommerce.jpg',
    category: 'major-project',
    featured: true,
    taskType: 'project',
    difficulty: 'advanced'
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    description: 'Educational platform with course management, student tracking, and assessment tools.',
    techStack: ['Web Development', 'Education Tech', 'Database', 'Assessment Tools', 'User Management'],
    githubUrl: 'https://github.com/rohit99-23/lms-platform',
    image: '/images/lms.jpg',
    category: 'major-project',
    featured: false,
    taskType: 'project',
    difficulty: 'advanced'
  },

  // Mini Projects
  {
    id: 'calculator-app',
    title: 'Advanced Calculator',
    description: 'Scientific calculator with advanced mathematical functions and user-friendly interface.',
    techStack: ['C++', 'OOP', 'Mathematics', 'Console I/O', 'Algorithms'],
    githubUrl: 'https://github.com/rohit99-23/calculator',
    image: '/images/calculator.jpg',
    category: 'mini-project',
    featured: true,
    taskType: 'project',
    difficulty: 'beginner'
  },
  {
    id: 'todo-app',
    title: 'Todo List Application',
    description: 'Simple todo list application with task management and priority features.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Web App'],
    githubUrl: 'https://github.com/rohit99-23/todo-app',
    image: '/images/todo.jpg',
    category: 'mini-project',
    featured: false,
    taskType: 'project',
    difficulty: 'beginner'
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    description: 'Weather forecast application with API integration and location-based data.',
    techStack: ['JavaScript', 'API Integration', 'Weather API', 'HTML/CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/rohit99-23/weather-app',
    image: '/images/weather.jpg',
    category: 'mini-project',
    featured: false,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'flask-mini-app',
    title: 'Flask Mini Application',
    description: 'Small Flask web application with basic CRUD operations and database integration.',
    techStack: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'CRUD Operations'],
    githubUrl: 'https://github.com/rohit99-23/mini-task-set.git',
    image: '/images/flask-mini.jpg',
    category: 'mini-project',
    featured: true,
    taskType: 'project',
    difficulty: 'intermediate'
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
    featured: false,
    taskType: 'project',
    difficulty: 'intermediate'
  },
  {
    id: 'cpp-data-structures',
    title: 'C++ Data Structures Implementation',
    description: 'Implementation of various data structures including linked lists, trees, and graphs.',
    techStack: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Memory Management'],
    githubUrl: 'https://github.com/rohit99-23/data-structures',
    image: '/images/cpp-ds.jpg',
    category: 'cpp-project',
    featured: false,
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
  },
  {
    id: 'learning-projects',
    title: 'Learning & Practice Projects',
    description: 'Various projects created during learning different technologies and frameworks.',
    techStack: ['Multiple Technologies', 'Learning Projects', 'Practice', 'Skill Development'],
    githubUrl: 'https://github.com/rohit99-23/learning-projects',
    image: '/images/learning.jpg',
    category: 'own',
    featured: false,
    taskType: 'project',
    difficulty: 'beginner'
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