import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A full-stack web application built with React and Node.js featuring real-time data synchronization and modern UI.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Project Beta',
      description: 'Mobile-responsive e-commerce platform with secure payment integration and advanced product filtering.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Project Gamma',
      description: 'AI-powered task management system with smart scheduling and productivity analytics dashboard.',
      tags: ['Python', 'Machine Learning', 'React', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Project Delta',
      description: 'Real-time collaboration tool for teams with document sharing, video calls, and project tracking.',
      tags: ['React', 'WebRTC', 'Firebase', 'Material-UI'],
      gradient: 'from-pink-500 to-red-600'
    },
    {
      title: 'Project Epsilon',
      description: 'Social media analytics platform providing insights, sentiment analysis, and engagement metrics.',
      tags: ['Vue.js', 'Django', 'D3.js', 'Redis'],
      gradient: 'from-orange-500 to-yellow-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Showcasing my work and learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative p-6 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
