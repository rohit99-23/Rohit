import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'devops': 'from-blue-500 to-cyan-500',
      'python-ml': 'from-yellow-500 to-orange-500',
      'cpp': 'from-blue-600 to-purple-600',
      'menu-based': 'from-green-500 to-blue-500',
      'major': 'from-purple-500 to-pink-500',
      'mini': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          variants={imageVariants}
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
        >
          {/* Placeholder for project image */}
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} flex items-center justify-center`}>
              <span className="text-2xl">
                {project.category === 'devops' && '🐳'}
                {project.category === 'python-ml' && '🐍'}
                {project.category === 'cpp' && '⚡'}
                {project.category === 'menu-based' && '📋'}
                {project.category === 'major' && '🚀'}
                {project.category === 'mini' && '🔧'}
              </span>
            </div>
            <p className="text-gray-400 text-sm font-mono">{project.title}</p>
          </div>
        </motion.div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-neon-green/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-neon-green/30 hover:bg-neon-green/30 transition-all duration-200"
          >
            <Github className="w-6 h-6 text-neon-green" />
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-sky-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-sky-blue/30 hover:bg-sky-blue/30 transition-all duration-200"
            >
              <ExternalLink className="w-6 h-6 text-sky-blue" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            {project.category.replace('-', ' ')}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-neon-green text-xs font-mono rounded-full border border-neon-green/30 hover:border-neon-green/60 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-mono rounded-full border border-gray-600">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors duration-200 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-sky-blue transition-colors duration-200 text-sm font-medium"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
    </motion.div>
  );
};

export default ProjectCard; 