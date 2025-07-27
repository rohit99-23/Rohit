export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: 'devops' | 'python-ml' | 'cpp' | 'menu-based' | 'major' | 'mini';
  featured?: boolean;
} 