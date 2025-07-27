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
          {/* Console Log Section - Now on the left */}
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

          {/* Profile Section - Now on the right */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-neon-green to-sky-blue p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Profile Image - Replace with your actual image */}
                  <img 
                    src="/profile.jpg" 
                    alt="Rohit Kumar" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to icon if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <User className="w-24 h-24 text-neon-green hidden" />
                </div>
              </div>
              {/* DevOps Engineer Badge */}
              <div className="absolute -bottom-2 -right-2 bg-neon-green text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-gray-900">
                DevOps Engineer
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
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-space-grotesk font-bold text-center mb-12 text-neon-green">
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neon-green/30"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 w-4 h-4 rounded-full border-2 border-neon-green bg-gray-900 ${item.type === 'education' ? 'border-neon-green' : 'border-sky-blue'}`}></div>
                  
                  {/* Content */}
                  <div className="ml-12 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-neon-green font-bold">{item.year}</span>
                      {item.type === 'education' ? (
                        <GraduationCap className="w-4 h-4 text-neon-green" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-sky-blue" />
                      )}
                    </div>
                    <p className="text-gray-300 ml-8">{item.event}</p>
                  </div>
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