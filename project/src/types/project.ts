export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: 'docker-task' | 'major-project' | 'mini-project' | 'linux-task' | 'cpp-project' | 'own';
  featured?: boolean;
  taskType?: 'task' | 'project' | 'assignment';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
} 