import { useEffect, useState } from 'react';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.6);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
  {
    name: 'Eshan',
    role: '',
    bio: 'A natural problem-solver, Eshan leads the development of cutting-edge neurotechnology and AI. He is dedicated to turning complex technical innovations into practical, accessible tools that enhance cognitive function for the ADHD community.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Divya',
    role: '',
    bio: 'Divya blends her passion for development and problem-solving to architect user-centric digital experiences. She focuses on simplifying complex technology, ensuring our interfaces are intuitive, supportive, and highly effective.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'Akshay',
    role: '',
    bio: 'Driven by a spirit of exploration, Akshay leads the development of evidence-based clinical protocols. He explores the intersection of psychology and technology to ensure our solutions are grounded in rigorous research and real-world efficacy.',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    name: 'Abhilasha',
    role: '',
    bio: 'Abhilasha is an outgoing advocate who loves engaging with the communities. By fostering genuine connections and open dialogue, she ensures our solutions reflect the lived experiences and diverse needs of our users.',
    gradient: 'from-blue-600 to-indigo-600',
  },
];

  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      desc: 'Understanding the daily challenges faced by individuals with ADHD',
    },
    {
      icon: Target,
      title: 'Evidence-Based',
      desc: 'Grounded in scientific research and clinical validation',
    },
    {
      icon: Users,
      title: 'Community Driven',
      desc: 'Co-creating solutions with those who need them most',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Pushing boundaries to create breakthrough solutions',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMiIgZmlsbD0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjIpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}
              STREYEKE
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A passionate team dedicated to transforming lives through innovative technology
            and compassionate solutions for ADHD management.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${idx * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              At STREYEKE, we believe that every individual with ADHD deserves access to
              tools that empower them to thrive. Our smart glasses represent years of
              research, collaboration with healthcare professionals, and feedback from the
              ADHD community. We're committed to creating technology that doesn't just
              manage symptoms but enhances quality of life, fostering independence,
              confidence, and success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Through continuous innovation and unwavering dedication, we're building a
              future where ADHD is not a barrier but a unique perspective that, with the
              right support, becomes a superpower.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Minds Behind STREYEKE
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                  transition: `all 0.8s ease-out ${idx * 0.15}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="p-8">
                  <div className="relative mb-6">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl font-bold shadow-lg`}
                    >
                      {member.name[0]}
                    </div>
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${member.gradient} text-white rounded-full text-sm font-medium whitespace-nowrap`}
                    >
                      {member.role.split(' ')[0]}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 text-center mb-4 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-center">{member.bio}</p>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of a community that's redefining what's possible for individuals with
            ADHD. Together, we're creating a brighter, more focused future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform duration-300">
              Subscribe to Updates
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
