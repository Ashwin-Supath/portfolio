import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="floating-shape absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Ashwin Supath
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300">
              MCA (Integrated), DAVV IIPS
            </p>
            <p className="text-lg text-gray-400">
              Tech Learner & Future Developer
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20 hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-slide-in-right">
            <div className="cartoon-character relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>

              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="character-body">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full shadow-2xl animate-bob">
                    <div className="absolute top-8 left-8 w-3 h-3 bg-slate-800 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-slate-800 rounded-full"></div>

                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-800/20 rounded-full"></div>

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-12 bg-slate-800 rounded-t-full"></div>
                  </div>

                  <div className="absolute top-32 left-1/2 -translate-x-1/2 w-40 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl">
                    <div className="absolute -left-12 top-8 w-10 h-32 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full animate-wave"></div>
                    <div className="absolute -right-12 top-8 w-10 h-32 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full animate-wave-delayed"></div>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="w-12 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl"></div>
                    <div className="w-12 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
