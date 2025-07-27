import React from 'react';
import { Calendar, TrendingUp, Users, Award, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      title: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Vivekananda Global University, Jaipur',
      period: '2022 - 2026',
      location: 'Jaipur, Rajasthan',
      description: 'Currently pursuing B.Tech in Computer Science with focus on software development, data science, and DevOps practices.',
      achievements: [
        { metric: '7.9', label: 'CGPA (Till 6th Sem)', icon: <Award className="w-4 h-4" /> },
        { metric: '2026', label: 'Expected Graduation', icon: <GraduationCap className="w-4 h-4" /> },
        { metric: 'CSE', label: 'Specialization', icon: <TrendingUp className="w-4 h-4" /> }
      ],
      tech: ['Computer Science', 'Software Engineering', 'DevOps', 'Data Science'],
      color: 'from-sky-blue to-blue-600',
      type: 'education'
    },
    {
      title: 'Senior Secondary (12th)',
      institution: 'CMJ Institute of Education, Motihari',
      period: '2022',
      location: 'Motihari, Bihar',
      description: 'Completed 12th standard with focus on science and mathematics.',
      achievements: [
        { metric: '74.4%', label: 'Score', icon: <Award className="w-4 h-4" /> },
        { metric: 'CBSE', label: 'Board', icon: <GraduationCap className="w-4 h-4" /> },
        { metric: 'Science', label: 'Stream', icon: <TrendingUp className="w-4 h-4" /> }
      ],
      tech: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      color: 'from-green-500 to-teal-600',
      type: 'education'
    },
    {
      title: 'Secondary (10th)',
      institution: 'CMJ Institute of Education, Motihari',
      period: '2020',
      location: 'Motihari, Bihar',
      description: 'Completed 10th standard with excellent academic performance.',
      achievements: [
        { metric: '83%', label: 'Score', icon: <Award className="w-4 h-4" /> },
        { metric: 'CBSE', label: 'Board', icon: <GraduationCap className="w-4 h-4" /> },
        { metric: 'Distinction', label: 'Performance', icon: <TrendingUp className="w-4 h-4" /> }
      ],
      tech: ['Science', 'Mathematics', 'Social Studies', 'English'],
      color: 'from-purple-500 to-pink-600',
      type: 'education'
    }
  ];

  const workExperience = [
    {
      title: 'Multi-technology: The Creator Program',
      company: 'Linux World Informatics Pvt Ltd',
      period: '2 Months',
      location: 'Virtual/Remote',
      description: 'Participated in a comprehensive multi-technology program focused on Linux, DevOps tools, and modern development practices.',
      achievements: [
        { metric: 'Linux', label: 'Operating Systems', icon: <TrendingUp className="w-4 h-4" /> },
        { metric: 'DevOps', label: 'Tools & Practices', icon: <Award className="w-4 h-4" /> },
        { metric: 'Multi-tech', label: 'Program Focus', icon: <Users className="w-4 h-4" /> }
      ],
      tech: ['Linux', 'DevOps Tools', 'Shell Scripting', 'System Administration'],
      color: 'from-neon-green to-sky-blue',
      type: 'work'
    },
    {
      title: 'C++ Programmer',
      company: 'CodeSoft',
      period: '1 Month',
      location: 'Virtual Internship',
      description: 'Worked as a C++ programmer intern, developing console applications and learning advanced programming concepts.',
      achievements: [
        { metric: 'C++', label: 'Programming', icon: <TrendingUp className="w-4 h-4" /> },
        { metric: 'OOP', label: 'Concepts', icon: <Award className="w-4 h-4" /> },
        { metric: 'Console Apps', label: 'Development', icon: <Users className="w-4 h-4" /> }
      ],
      tech: ['C++', 'Object-Oriented Programming', 'Console Applications', 'Algorithm Design'],
      color: 'from-blue-600 to-purple-600',
      type: 'work'
    }
  ];

  const allExperience = [...education, ...workExperience];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> history | grep experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-green via-sky-blue to-purple-500"></div>

          <div className="space-y-16">
            {allExperience.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div className={`bg-gray-900 rounded-xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                    exp.type === 'education' 
                      ? 'border-sky-blue/30 hover:border-sky-blue/50' 
                      : 'border-gray-700 hover:border-neon-green/50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === 'education' ? (
                        <GraduationCap className="w-5 h-5 text-sky-blue" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-neon-green" />
                      )}
                      <span className={`font-mono text-sm ${
                        exp.type === 'education' ? 'text-sky-blue' : 'text-neon-green'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className={`font-semibold mb-2 ${
                      exp.type === 'education' ? 'text-sky-blue' : 'text-neon-green'
                    }`}>
                      {'institution' in exp ? exp.institution : exp.company}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* KPIs */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-center">
                          <div className={`flex items-center justify-center mb-2 ${
                            exp.type === 'education' ? 'text-sky-blue' : 'text-neon-green'
                          }`}>
                            {achievement.icon}
                          </div>
                          <div className="text-white font-bold text-lg">{achievement.metric}</div>
                          <div className="text-gray-400 text-xs">{achievement.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs font-mono rounded border ${
                            exp.type === 'education'
                              ? 'bg-gray-800 text-sky-blue border-sky-blue/30'
                              : 'bg-gray-800 text-neon-green border-neon-green/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-gray-900 bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;