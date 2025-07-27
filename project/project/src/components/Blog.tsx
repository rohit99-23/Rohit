import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Resilient CI/CD Pipelines',
      excerpt: 'Learn how to create fault-tolerant deployment pipelines that can handle failures gracefully and recover automatically.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['CI/CD', 'Jenkins', 'Automation']
    },
    {
      title: 'Cloud Security Best Practices',
      excerpt: 'Essential security measures every DevOps engineer should implement when working with cloud infrastructure.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Security', 'Cloud', 'AWS']
    },
    {
      title: 'Kubernetes Monitoring Strategies',
      excerpt: 'Comprehensive guide to monitoring containerized applications in Kubernetes with Prometheus and Grafana.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Monitoring',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Kubernetes', 'Monitoring', 'Prometheus']
    },
    {
      title: 'Infrastructure as Code Deep Dive',
      excerpt: 'Master Terraform and Ansible to automate your infrastructure provisioning and configuration management.',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'IaC',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Terraform', 'Ansible', 'IaC']
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> cat blog-posts.md
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon-green text-black text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-800 text-neon-green text-xs font-mono rounded border border-neon-green/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-neon-green hover:text-sky-blue transition-colors duration-200 group">
                  <span className="font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-neon-green to-sky-blue text-black font-semibold rounded-lg hover:from-sky-blue hover:to-neon-green transition-all duration-300 transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;