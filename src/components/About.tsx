import { User, Code, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 bg-slate-700 flex items-center justify-center">
                <img
                  src="./src/images/image.jpg"
                  alt="Profile placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <User size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A passionate 3rd-year MCA student at DAVV - International Institute of Professional Studies,
                    dedicated to mastering the art of software development and creating innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Code size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">What I Do</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm focused on learning and building full-stack applications, exploring new technologies,
                    and developing skills in modern web development, algorithms, and Data Science.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Coffee size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Beyond Code</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When I'm not coding, I enjoy exploring emerging tech trends, contributing to open-source projects,
                    and connecting with the developer community to continuously grow and learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
