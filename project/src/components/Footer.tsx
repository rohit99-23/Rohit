import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, Terminal, Heart, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with a service like Formspree or EmailJS
    console.log('Form submitted:', formData);
    
    // For now, we'll open the default email client
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rohitkumarpani246@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Hi Rohit! I saw your portfolio and would like to connect with you.";
    const whatsappLink = `https://wa.me/918651751991?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+919931783833', '_blank');
  };

  return (
    <footer id="contact" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold text-center mb-16">
          <span className="text-neon-green">$</span> ./connect.sh
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Personal Quote */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-xl p-6 border border-neon-green/30">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-neon-green" />
                <span className="text-neon-green font-mono">rohit@devops:~$</span>
              </div>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                "Building bridges between development and operations, one pipeline at a time. 
                Let's automate the world and make deployments as smooth as morning coffee."
              </blockquote>
              <div className="mt-4 text-right">
                <span className="text-neon-green font-mono">- Rohit Kumar</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-space-grotesk font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neon-green" />
                  <a 
                    href="mailto:rohitkumarpani246@gmail.com"
                    className="hover:text-neon-green transition-colors duration-200"
                  >
                    rohitkumarpani246@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-blue" />
                  <a 
                    href="tel:+919931783833"
                    className="hover:text-sky-blue transition-colors duration-200"
                  >
                    +91 9931783833
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp: +91 8651751991</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/rohit99-23"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full border border-gray-700 hover:border-neon-green transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-157014289"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full border border-gray-700 hover:border-sky-blue transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-sky-blue transition-colors duration-300" />
              </a>
              <a
                href="mailto:rohitkumarpani246@gmail.com"
                className="group flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
              Quick Connect
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Let's discuss your DevOps needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="group w-full px-6 py-3 bg-gradient-to-r from-neon-green to-sky-blue text-black font-semibold rounded-lg hover:from-sky-blue hover:to-neon-green transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of ☕ by Rohit Kumar</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>&copy; 2024 Rohit Kumar. All rights reserved.</span>
              <a href="#" className="hover:text-neon-green transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-neon-green transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;