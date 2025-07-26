import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Terminal, User, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! I\'m Rohit\'s AI assistant. Ask me about his projects, experience, or how to contact him!',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user' as const,
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        type: 'bot' as const,
        message: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputMessage('');
  };

  const getBotResponse = (input: string): string => {
    if (input.includes('project') || input.includes('work')) {
      return 'Rohit has worked on several impressive projects including CloudOps Dashboard, CI/CD Pipeline Automation, and Infrastructure as Code modules. Would you like to know more about any specific project?';
    }
    
    if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return 'You can reach Rohit through:\n• Email: rohit@example.com\n• LinkedIn: linkedin.com/in/rohitkumar\n• GitHub: github.com/rohitkumar\n\nOr use the contact form at the bottom of this page!';
    }
    
    if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return 'You can download Rohit\'s resume by clicking the "View Resume" button in the hero section, or I can send you the link directly. His resume showcases 5+ years of DevOps experience!';
    }
    
    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return 'Rohit is proficient in:\n• Cloud: AWS, Azure, GCP\n• Containers: Docker, Kubernetes\n• CI/CD: Jenkins, GitLab CI\n• IaC: Terraform, Ansible\n• Monitoring: Prometheus, Grafana\n\nAnd many more technologies!';
    }
    
    if (input.includes('experience') || input.includes('career')) {
      return 'Rohit has 5+ years of DevOps experience:\n• Senior DevOps Engineer at TechCorp (2022-Present)\n• DevOps Engineer at CloudNative Inc (2020-2022)\n• Junior DevOps Engineer at StartupTech (2018-2020)\n\nHe has achieved 99.9% uptime and reduced deployment times by 70%!';
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! Great to meet you! I\'m here to help you learn more about Rohit Kumar. Feel free to ask me about his projects, skills, experience, or how to get in touch with him.';
    }

    return 'I can help you with information about Rohit\'s projects, experience, skills, or contact details. Try asking:\n• "Tell me about his projects"\n• "How can I contact him?"\n• "What are his skills?"\n• "Download resume"';
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-neon-green to-sky-blue text-black shadow-lg hover:shadow-neon-green/25 transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gray-900 rounded-xl border border-neon-green/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-black px-4 py-3 border-b border-neon-green/30">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-neon-green" />
              <span className="text-white font-space-grotesk font-bold">Rohit's AI Assistant</span>
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse ml-auto"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4 font-mono text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg whitespace-pre-line ${
                    msg.type === 'user'
                      ? 'bg-sky-blue text-black'
                      : 'bg-gray-800 text-neon-green border border-neon-green/30'
                  }`}
                >
                  {msg.message}
                </div>
                {msg.type === 'user' && (
                  <div className="w-6 h-6 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-black" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-neon-green text-black rounded-lg hover:bg-sky-blue transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;