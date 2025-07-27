import React, { useEffect, useRef } from 'react';
import { User, MapPin, Heart, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (codeRef.current) {
      observer.observe(codeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2020', event: 'Completed Secondary Education (10th)', icon: '🎓', type: 'education' },
    { year: '2022', event: 'Completed Senior Secondary (12th)', icon: '📚', type: 'education' },
    { year: '2022', event: 'Started B.Tech in Computer Science', icon: '💻', type: 'education' },
    { year: '2024', event: 'CodeSoft C++ Programmer Internship', icon: '⚡', type: 'experience' },
    { year: '2025', event: 'Summer Internship at Linux World Informatics Program', icon: '🐧', type: 'experience' },
    { year: '2026', event: 'Expected B.Tech Graduation', icon: '🎯', type: 'education' }
    
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> who am I
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-neon-green to-sky-blue p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <User className="w-24 h-24 text-neon-green" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-neon-green rounded-full flex items-center justify-center">
                <span className="text-black font-bold">DevOps Engineer</span>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="text-left max-w-lg">
              <p className="text-gray-300 leading-relaxed mb-6">
                I come from a strong technical background with a growing passion for DevOps, automation, and cloud infrastructure. My journey started with exploring development, but I soon found my interest leaning toward solving real-world challenges related to deployment, scalability, and system reliability.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over time, I've worked on building CI/CD pipelines, managing cloud resources, and integrating tools like Docker, Jenkins, Git, and AWS to improve workflow efficiency. I enjoy learning new technologies, experimenting with modern DevOps practices, and creating systems that are both stable and flexible.
              </p>
            </div>
          </div>

          {/* Console Log Section */}
          <div ref={codeRef} className="opacity-0 transition-opacity duration-1000">
            <div className="bg-gray-900 rounded-lg p-6 border border-neon-green/30 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">console.log(rohit)</span>
              </div>
              <div className="text-sm">
                <span className="text-sky-blue">const</span> <span className="text-yellow-400">rohit</span> <span className="text-white">=</span> <span className="text-neon-green">{'{'}</span>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-neon-green" />
                    <span className="text-yellow-400">name:</span> <span className="text-orange-400">"Rohit Kumar"</span><span className="text-white">,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neon-green" />
                    <span className="text-yellow-400">location:</span> <span className="text-orange-400">"Jaipur, Rajasthan"</span><span className="text-white">,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-neon-green" />
                    <span className="text-yellow-400">loves:</span> <span className="text-white">[</span><span className="text-orange-400">"DevOps", "Automation", "Cloud"</span><span className="text-white">],</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">role:</span> <span className="text-orange-400">"DevOps Engineer"</span><span className="text-white">,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">experience:</span> <span className="text-orange-400">"Aspiring DevOps Engineer"</span><span className="text-white">,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">education:</span> <span className="text-orange-400">"B.Tech CSE (2022-2026)"</span>
                  </div>
                </div>
                <span className="text-neon-green">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-space-grotesk font-bold text-center mb-12 text-neon-green">
            Journey Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-green to-sky-blue"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                      item.type === 'education' 
                        ? 'bg-gray-800 border-sky-blue/30 hover:border-sky-blue/60' 
                        : 'bg-gray-800 border-neon-green/30 hover:border-neon-green/60'
                    }`}>
                      <div className={`font-bold text-lg ${
                        item.type === 'education' ? 'text-sky-blue' : 'text-neon-green'
                      }`}>
                        {item.year}
                      </div>
                      <div className="text-gray-300">{item.event}</div>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl z-10 ${
                    item.type === 'education' ? 'bg-sky-blue' : 'bg-neon-green'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;