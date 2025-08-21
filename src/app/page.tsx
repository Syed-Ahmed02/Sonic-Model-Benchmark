'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [ringCount, setRingCount] = useState(0);
  const [sonicRunning, setSonicRunning] = useState(false);
  const [collectedRings, setCollectedRings] = useState<number[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 100 && !sonicRunning) {
        setSonicRunning(true);
        setTimeout(() => setSonicRunning(false), 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sonicRunning]);

  const collectRing = (ringId: number) => {
    if (!collectedRings.includes(ringId)) {
      setCollectedRings([...collectedRings, ringId]);
      setRingCount(ringCount + 1);
    }
  };

  const SonicCharacter = () => (
    <div className={`fixed z-50 pointer-events-none ${sonicRunning ? 'sonic-run' : ''}`} 
         style={{ left: '-100px', top: '50%', transform: 'translateY(-50%)' }}>
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-blue-300 sonic-spin"></div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-black rounded-full"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full"></div>
        {sonicRunning && (
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent to-yellow-400 speed-lines"></div>
        )}
      </div>
    </div>
  );

  const Ring = ({ id, onClick }: { id: number; onClick: () => void }) => (
    <div 
      className={`inline-block w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110 ${
        collectedRings.includes(id) ? 'ring-collect' : ''
      }`}
      onClick={onClick}
    >
      <div className="w-full h-full rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg hover:shadow-yellow-400/50"></div>
    </div>
  );

  const ChaosEmerald = ({ color = "emerald" }: { color?: string }) => (
    <div className={`w-6 h-8 bg-gradient-to-t from-${color}-400 to-${color}-600 transform rotate-45 chaos-emerald`}></div>
  );

  return (
    <div className="min-h-screen text-white">
      <SonicCharacter />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-10 right-10 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
          <div className="w-6 h-6 rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-500"></div>
          <span className="text-xl font-bold text-yellow-400">{ringCount}</span>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="inline-block w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-8 border-blue-300 mb-6 relative">
              <div className="absolute top-4 left-8 w-6 h-6 bg-black rounded-full"></div>
              <div className="absolute top-4 right-8 w-6 h-6 bg-black rounded-full"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-black rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            SONIC AI
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-blue-200">
            "Hey! I'm Sonic, and this AI is almost as fast as me!"
          </p>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Experience lightning-fast AI responses that'll make your head spin! 
            Our AI model processes faster than I run through Green Hill Zone!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4, 5].map((id) => (
              <Ring key={id} id={id} onClick={() => collectRing(id)} />
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50">
            Gotta Go Fast! →
          </button>
        </div>
        
        {/* Speed lines background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent speed-lines"
              style={{ 
                top: `${10 + i * 8}%`, 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Speed Demonstrations */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            "Gotta Go Fast" Capabilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Responses",
                description: "Get answers faster than Sonic's spin dash!",
                time: "0.1s",
                emerald: "blue"
              },
              {
                title: "Super Sonic Speed",
                description: "Process complex queries in a blur!",
                time: "0.05s", 
                emerald: "red"
              },
              {
                title: "Chaos Control",
                description: "Time-stop fast for real-time analysis!",
                time: "0.01s",
                emerald: "emerald"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-center gap-4 mb-4">
                  <ChaosEmerald color={feature.emerald} />
                  <span className="text-3xl font-bold text-yellow-400">{feature.time}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{feature.description}</p>
                
                <div className="mt-4 flex gap-2">
                  {[1, 2, 3].map((id) => (
                    <Ring key={`${index}-${id}`} id={index * 10 + id} onClick={() => collectRing(index * 10 + id)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Robotnik Testimonial */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-red-800/20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-block w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-4 border-red-400 robotnik-laugh relative">
                <div className="absolute top-3 left-4 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute top-3 right-4 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-700 rounded-t-full"></div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-red-400">Dr. Robotnik's "Evil" Review</h2>
            
            <blockquote className="text-2xl md:text-3xl mb-8 italic text-red-200">
              "Curse that hedgehog! This AI is almost as brilliant as my evil schemes! 
              Its processing power rivals my greatest inventions!"
            </blockquote>
            
            <p className="text-xl text-gray-300 mb-8">
              "I've tried to defeat it with my robots, but this AI adapts faster than Sonic dodges my attacks! 
              Even I, the great Dr. Robotnik, must admit... it's pretty incredible."
            </p>
            
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4].map((id) => (
                <Ring key={`robotnik-${id}`} id={100 + id} onClick={() => collectRing(100 + id)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Collect the Features!
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Natural Language", icon: "🗣️", rings: 3 },
              { title: "Code Generation", icon: "💻", rings: 4 },
              { title: "Real-time Analysis", icon: "⚡", rings: 5 },
              { title: "Multi-modal Input", icon: "🎯", rings: 3 },
              { title: "Creative Writing", icon: "✍️", rings: 4 },
              { title: "Problem Solving", icon: "🧩", rings: 5 },
              { title: "Data Processing", icon: "📊", rings: 3 },
              { title: "Learning Assistance", icon: "🎓", rings: 4 }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-300 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <div className="flex justify-center gap-1">
                  {[...Array(feature.rings)].map((_, ringIndex) => (
                    <Ring 
                      key={`feature-${index}-${ringIndex}`} 
                      id={200 + index * 10 + ringIndex} 
                      onClick={() => collectRing(200 + index * 10 + ringIndex)} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Sonic's Adventure!
          </h2>
          
          <p className="text-2xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Ready to experience the fastest AI in the multiverse? 
            Let's juice and jam together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:from-blue-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Start Free Trial
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              See Pricing
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full text-xl font-bold hover:bg-green-400 hover:text-blue-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Ring key={`cta-${id}`} id={300 + id} onClick={() => collectRing(300 + id)} />
            ))}
          </div>
          
          <p className="text-lg text-gray-400">
            "Way past cool! Thanks for checking out Sonic AI!" - Sonic the Hedgehog
          </p>
        </div>
        
        {/* Animated Chaos Emeralds */}
        <div className="absolute top-10 left-10">
          <ChaosEmerald color="blue" />
        </div>
        <div className="absolute top-20 right-20">
          <ChaosEmerald color="red" />
        </div>
        <div className="absolute bottom-20 left-20">
          <ChaosEmerald color="yellow" />
        </div>
        <div className="absolute bottom-10 right-10">
          <ChaosEmerald color="emerald" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 text-center">
        <p className="text-gray-400">
          © 2024 Sonic AI. All rights reserved. "Gotta go fast!" is a trademark of awesomeness.
        </p>
      </footer>
    </div>
  );
}