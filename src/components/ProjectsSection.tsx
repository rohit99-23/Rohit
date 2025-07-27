import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData, getProjectsByCategory } from '../data/projectsData';
import { Project } from '../types/project';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '📁', count: projectsData.length },
    { id: 'devops', name: 'DevOps', icon: '🐳', count: getProjectsByCategory('devops').length },
    { id: 'python-ml', name: 'Python & ML', icon: '🐍', count: getProjectsByCategory('python-ml').length },
    { id: 'cpp', name: 'C++', icon: '⚡', count: getProjectsByCategory('cpp').length },
    { id: 'menu-based', name: 'Menu-based', icon: '📋', count: getProjectsByCategory('menu-based').length },
    { id: 'major', name: 'Major Projects', icon: '🚀', count: getProjectsByCategory('major').length },
    { id: 'mini', name: 'Mini Projects', icon: '🔧', count: getProjectsByCategory('mini').length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : getProjectsByCategory(activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold mb-6">
            <span className="text-neon-green">$</span> ls -la projects/
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my diverse portfolio of projects across different technologies and domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-neon-green text-black shadow-lg shadow-neon-green/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-neon-green'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-black/20 text-black'
                  : 'bg-gray-700 text-gray-400'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <FolderOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">
              Projects in this category are coming soon...
            </p>
          </motion.div>
        )}

        {/* View All Projects CTA */}
        {activeCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setActiveCategory('all')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-sky-blue text-black font-semibold rounded-lg hover:from-sky-blue hover:to-neon-green transition-all duration-300 transform hover:scale-105"
            >
              <Filter className="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" />
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 