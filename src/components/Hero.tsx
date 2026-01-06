import { useEffect, useState } from 'react';
import { Sparkles, Brain, Eye, Focus, Glasses } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm animate-pulse">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Revolutionary ADHD Solution
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Focus
              </span>
              <br />
              With Smart Glasses
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              STREYEKE brings cutting-edge technology to help individuals with ADHD
              enhance concentration, manage distractions, and unlock their full potential
              through innovative smart glasses.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Discover More
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Brain, label: 'Enhanced Focus', value: '' },
                { icon: Eye, label: 'Visual Clarity', value: '' },
                { icon: Focus, label: 'Task Completion', value: '' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * 0.02}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full p-8 flex items-center justify-center">
                    <Glasses className="w-48 h-48 text-blue-400" strokeWidth={1} />
                  </div>
                </div>
              </div>

              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-ping"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Before STREYEKE</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                <span>Difficulty maintaining focus during tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                <span>Constant distractions affecting productivity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                <span>Struggling with time management and task completion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                <span>Low confidence in handling daily responsibilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-white mb-4">After AVANGARD</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span>Enhanced concentration with real-time focus assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span>Smart notifications that reduce environmental distractions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span>Improved task management with gentle reminders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span>Increased confidence and independence in daily life</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
