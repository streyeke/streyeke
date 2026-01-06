import { useEffect, useState } from 'react';
import { Glasses, Check, Zap, Shield, Headphones, Battery } from 'lucide-react';

export default function Product() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const element = document.getElementById('product');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Zap, title: 'Real-Time Focus Tracking', desc: 'AI-powered attention monitoring' },
    { icon: Shield, title: 'Distraction Filtering', desc: 'Smart environmental noise reduction' },
    { icon: Headphones, title: 'Audio Reminders', desc: 'Gentle task notifications' },
    { icon: Battery, title: 'All-Day Battery', desc: '12+ hours of continuous use' },
  ];

  const benefits = [
    'Scientifically designed for ADHD symptoms',
    'Comfortable lightweight frame',
    'Prescription lens compatible',
    'Seamless smartphone integration',
    'Personalized focus algorithms',
    'Privacy-focused design',
  ];

  return (
    <section
      id="product"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20"
    >
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet Your New
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}
              Focus Partner
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered with precision and care for individuals with ADHD. Experience the
            future of cognitive enhancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="relative order-2 lg:order-1"
            style={{
              transform: `translateX(${isVisible ? 0 : -50}px)`,
              opacity: isVisible ? 1 : 0,
              transition: 'all 1s ease-out',
            }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Glasses className="w-64 h-64 text-blue-400" strokeWidth={1} />
                </div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold animate-pulse">
                  Limited Offer
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">STREYEKE Focus Pro</h3>
                <p className="text-gray-600">Smart Glasses for ADHD Management</p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-3xl font-bold text-gray-400 line-through"></div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  2500 INR
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold">
                  Save 33%
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4">
                Order Now
              </button>

              <div className="text-center text-sm text-gray-500">
                Free shipping • 30-day money-back guarantee
              </div>
            </div>
          </div>

          <div
            className="space-y-8 order-1 lg:order-2"
            style={{
              transform: `translateX(${isVisible ? 0 : 50}px)`,
              opacity: isVisible ? 1 : 0,
              transition: 'all 1s ease-out 0.2s',
            }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid gap-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How to Use STREYEKE</h3>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Simple, intuitive, and designed for everyday use
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Put On', desc: 'Wear like regular glasses' },
              { num: '02', title: 'Connect', desc: 'Sync with smartphone app' },
              { num: '03', title: 'Personalize', desc: 'Set your focus preferences' },
              { num: '04', title: 'Focus', desc: 'Experience enhanced concentration' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative"
                style={{
                  transform: `translateY(${isVisible ? 0 : 30}px)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s ease-out ${idx * 0.1}s`,
                }}
              >
                <div className="text-6xl font-bold opacity-20 mb-4">{step.num}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="opacity-90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
