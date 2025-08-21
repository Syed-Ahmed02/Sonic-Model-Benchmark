'use client';

import { useState, useEffect } from 'react';

// SVG Components for Sonic Characters and Elements
const SonicCharacter = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="sonic-run">
    <circle cx="60" cy="60" r="40" fill="#0066CC" />
    <circle cx="50" cy="50" r="8" fill="white" />
    <circle cx="50" cy="50" r="4" fill="black" />
    <path d="M70 50 Q75 45 80 50 Q75 55 70 50" fill="black" />
    <path d="M45 75 Q55 85 65 75" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M20 40 Q30 30 40 40" fill="#FFD700" />
    <path d="M80 40 Q90 30 100 40" fill="#FFD700" />
    <circle cx="30" cy="30" r="8" fill="#FFD700" className="ring-pulse" />
    <circle cx="90" cy="30" r="8" fill="#FFD700" className="ring-pulse" />
  </svg>
);

const Ring = ({ collected = false }: { collected?: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" className={collected ? 'opacity-50' : 'ring-pulse'}>
    <circle cx="20" cy="20" r="15" fill="none" stroke="#FFD700" strokeWidth="3" />
    <circle cx="20" cy="20" r="8" fill="#FFD700" />
  </svg>
);

const ChaosEmerald = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" className="chaos-emerald">
    <polygon points="15,5 25,15 15,25 5,15" fill="#00FFFF" stroke="#0080FF" strokeWidth="2" />
    <circle cx="15" cy="15" r="3" fill="#FFFFFF" />
  </svg>
);

const Robotnik = () => (
  <div className="relative">
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="35" fill="#6B46C1" />
      <rect x="35" y="65" width="30" height="20" fill="#6B46C1" />
      <circle cx="35" cy="35" r="8" fill="white" />
      <circle cx="35" cy="35" r="4" fill="black" />
      <circle cx="65" cy="35" r="8" fill="white" />
      <circle cx="65" cy="35" r="4" fill="black" />
      <path d="M40 75 Q50 85 60 75" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="15" y="15" width="20" height="10" fill="#FF0000" />
      <rect x="65" y="15" width="20" height="10" fill="#FF0000" />
    </svg>
    <div className="absolute -top-2 -right-2 text-2xl">😈</div>
  </div>
);

export default function Home() {
  const [ringsCollected, setRingsCollected] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showSpeedDemo, setShowSpeedDemo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collectRing = (index: number) => {
    setRingsCollected(prev => Math.min(prev + 1, 7));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 float">
          <ChaosEmerald />
        </div>
        <div className="absolute top-40 right-20 float" style={{ animationDelay: '1s' }}>
          <ChaosEmerald />
        </div>
        <div className="absolute bottom-40 left-20 float" style={{ animationDelay: '2s' }}>
          <ChaosEmerald />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <SonicCharacter />
            <div className="absolute -inset-4 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            SONIC AI
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            "Gotta Go Fast! The quickest AI model in the universe, powered by chaos energy and unlimited rings!"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => setShowSpeedDemo(!showSpeedDemo)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white font-bold text-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              ⚡ Experience the Speed!
            </button>
            <div className="flex items-center gap-2 text-yellow-400">
              <span className="text-lg">Rings Collected: {ringsCollected}/7</span>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <Ring key={i} collected={i < ringsCollected} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Speed Demo */}
        {showSpeedDemo && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-yellow-400">SPEED DEMONSTRATION</h2>
              <div className="flex items-center justify-center mb-4">
                <SonicCharacter />
                <div className="ml-4 text-2xl">→ → → ⚡⚡⚡</div>
              </div>
              <p className="text-xl text-blue-300 mb-4">
                Processing queries at lightning speed! Faster than you can say "Chaos Control!"
              </p>
              <button
                onClick={() => setShowSpeedDemo(false)}
                className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-500 transition-colors"
              >
                Close Demo
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Speed Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">
            GOTTA GO FAST! 🚀
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-blue-400 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">⚡ Instant Response</h3>
              <p className="text-gray-300">Faster than Sonic's spin dash! Get answers in milliseconds.</p>
            </div>

            <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-yellow-400 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🎯 Precision</h3>
              <p className="text-gray-300">More accurate than Tails' inventions. Chaos-powered accuracy!</p>
            </div>

            <div className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-red-400 hover:border-purple-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-400">💪 Power</h3>
              <p className="text-gray-300">Stronger than Knuckles! Handle any task with super speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Robotnik Testimonial */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900 to-purple-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Robotnik />
          </div>

          <blockquote className="text-2xl md:text-3xl font-bold mb-6 text-white">
            "This AI is almost as brilliant as I am! It's dangerously powerful...
            I love it! 😈"
          </blockquote>

          <cite className="text-xl text-red-300">- Dr. Ivo "Eggman" Robotnik</cite>
        </div>

        {/* Evil Laughter Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl opacity-20 animate-pulse">😈</div>
          <div className="absolute top-20 right-20 text-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>💀</div>
          <div className="absolute bottom-20 left-20 text-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}>🔥</div>
        </div>
      </section>

      {/* Feature Showcase with Ring Collection */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">
            COLLECT THE CHAOS EMERALDS! 💎
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Code Generation", desc: "Generate code faster than Sonic runs!", icon: "💻" },
              { title: "Problem Solving", desc: "Solve complex problems with chaos energy!", icon: "🧠" },
              { title: "Creative Writing", desc: "Write stories more exciting than Sonic's adventures!", icon: "✍️" },
              { title: "Data Analysis", desc: "Analyze data quicker than Tails flies!", icon: "📊" },
              { title: "Learning", desc: "Learn anything faster than Knuckles punches!", icon: "🎓" },
              { title: "Translation", desc: "Translate languages at supersonic speed!", icon: "🌍" }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-yellow-400 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => collectRing(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>

          {ringsCollected >= 7 && (
            <div className="mt-12 text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">CHAOS EMERALDS COLLECTED! 🌟</h3>
              <p className="text-xl text-blue-300">You now have the power of the Chaos Emeralds! Super transformation activated!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            JOIN SONIC'S ADVENTURE! 🎮
          </h2>

          <p className="text-2xl mb-8 text-yellow-200">
            Ready to experience the fastest AI in the universe? Let's go on an adventure together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 rounded-full text-white font-bold text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
              🚀 Start Your Adventure
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-white font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              📖 Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black bg-opacity-80 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-blue-300 mb-4">
            Powered by Chaos Energy • Built with 💙 by Sonic AI
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <span className="hover:text-yellow-400 cursor-pointer transition-colors">⚡</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">💎</span>
            <span className="hover:text-red-400 cursor-pointer transition-colors">🔥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
