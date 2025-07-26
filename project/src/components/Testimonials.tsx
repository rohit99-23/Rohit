import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Volume2 } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Solutions',
      avatar: '👩‍💼',
      quote: 'Rohit transformed our infrastructure from chaos to harmony. His DevOps expertise and leadership skills are exceptional.',
      company: 'TechCorp Solutions',
      hasAudio: true
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer, CloudNative Inc',
      avatar: '👨‍💻',
      quote: 'Working with Rohit was a game-changer. He reduced our deployment time by 70% and made our systems rock solid.',
      company: 'CloudNative Inc',
      hasAudio: false
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager, StartupTech',
      avatar: '👩‍🚀',
      quote: 'Rohit\'s automation solutions saved us countless hours. His proactive approach to monitoring prevented many issues.',
      company: 'StartupTech',
      hasAudio: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> grep -i "testimonials" reviews.log
        </h2>

        <div className="relative">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 min-h-[300px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-neon-green mb-6 mx-auto" />
            
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-sky-blue rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-space-grotesk font-bold">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-neon-green text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
                {testimonials[currentTestimonial].hasAudio && (
                  <button className="text-sky-blue hover:text-neon-green transition-colors duration-200">
                    <Volume2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 text-gray-400 hover:text-neon-green transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-neon-green'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 text-gray-400 hover:text-neon-green transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;