import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Let's connect and create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">ashwin.supath@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Indore, Madhya Pradesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} className="text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <p className="text-gray-400">
              Made with <span className="text-red-500 animate-pulse">❤</span> by Ashwin Supath
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
