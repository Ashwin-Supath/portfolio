import { Code2, Database, Globe, Terminal, Palette, Rocket } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      color: 'from-cyan-500 to-blue-600',
      skills: ['JavaScript', 'C', 'Python', 'Java', 'C++']
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'from-blue-500 to-purple-600',
      skills: ['React', 'HTML/CSS', 'Node.js', 'REST APIs', 'Tailwind CSS']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      color: 'from-pink-500 to-red-600',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker']
    },
    // {
    //   title: 'Design & UI',
    //   icon: Palette,
    //   color: 'from-orange-500 to-yellow-600',
    //   skills: ['Figma', 'Responsive Design', 'UI/UX Principles', 'Animation']
    // },
    {
      title: 'Interests',
      icon: Rocket,
      color: 'from-green-500 to-teal-600',
      skills: ['AI/ML', 'Data Science', 'Web3', 'Open Source', 'DSA']
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Technologies I work with and continuously learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-gray-300 group/skill hover:text-cyan-400 transition-colors duration-300"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-150 transition-transform duration-300`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
