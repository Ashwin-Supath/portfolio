import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'MCA 5 years - Master of Computer Applications',
      institution: 'DAVV - International Institute of Professional Studies',
      location: 'Indore, Madhya Pradesh',
      duration: '2023 - 2028',
      year: 'Currently in 3rd Year',
      description: 'Five-year integrated program focusing on advanced computer science, software engineering, and modern application development.',
      highlights: ['Data Science','Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering']
    },
    {
      degree: 'Higher Secondary Education - PCM',
      institution: 'Rajeshwar Hr Sec School',
      location: 'Mhow, Indore, Madhaya Pradesh',
      duration: '2022 - 2023',
      year: 'Completed',
      description: 'Completed with focus on Physics, Chemistry and Mathematics.',
      highlights: ['Mathematics', 'Physics', 'Computer Science']
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">My academic journey and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center w-full ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full md:w-5/12"></div>

              <div className="relative z-20 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 my-4 md:my-0 md:mx-4 animate-pulse-slow">
                <GraduationCap size={24} className="text-white" />
              </div>

              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="education-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={18} className="text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">{edu.duration}</span>
                    <span className="ml-auto text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-gray-400" />
                    <p className="text-gray-300 font-medium">{edu.institution}</p>
                  </div>

                  <p className="text-gray-400 text-sm mb-1">{edu.location}</p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
