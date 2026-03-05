'use client';

import { motion } from 'motion/react';
import { Heart, Calendar, MapPin, Camera, Music, Timer } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const WEDDING_SECTIONS = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "How we met",
    description: "It all started with a simple hello. From that moment, we knew our lives would never be the same. Every conversation felt like coming home.",
    color: "bg-[#fdfcf8]",
    textColor: "text-stone-800",
    image: "https://picsum.photos/seed/wedding1/1200/1600",
    icon: <Heart className="w-6 h-6 text-rose-400" />,
  },
  {
    id: 2,
    title: "The Proposal",
    subtitle: "A moment in time",
    description: "Under the starlit sky, with the sound of waves crashing against the shore, he asked the question that would change our forever. She said yes.",
    color: "bg-[#f5f2ed]",
    textColor: "text-stone-800",
    image: "https://picsum.photos/seed/wedding2/1200/1600",
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 3,
    title: "The Big Day",
    subtitle: "June 15, 2025",
    description: "Surrounded by our dearest family and friends, we promised to love and cherish each other for all the days of our lives. A day filled with joy and laughter.",
    color: "bg-[#ece8e1]",
    textColor: "text-stone-800",
    image: "https://picsum.photos/seed/wedding3/1200/1600",
    icon: <Calendar className="w-6 h-6 text-stone-500" />,
  },
  {
    id: 4,
    title: "The Celebration",
    subtitle: "Dancing through the night",
    description: "The music played, the wine flowed, and we danced our first dance as husband and wife. A celebration of a love that will last an eternity.",
    color: "bg-[#5a5a40]",
    textColor: "text-stone-100",
    image: "https://picsum.photos/seed/wedding4/1200/1600",
    icon: <Music className="w-6 h-6 text-stone-200" />,
  },
  {
    id: 5,
    type: 'countdown',
    title: "Our First Anniversary",
    subtitle: "Counting down the days",
    description: "We are eagerly waiting to celebrate our first year of marriage. Every day has been a new chapter in our beautiful story.",
    color: "bg-[#4a4a30]",
    textColor: "text-stone-100",
    image: "https://picsum.photos/seed/anniversary/1200/1600",
    icon: <Timer className="w-6 h-6 text-rose-300" />,
  }
];

function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="m5 3 1 1" />
      <path d="m19 3-1 1" />
      <path d="m5 21 1-1" />
      <path d="m19 21-1-1" />
    </svg>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-15T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-serif font-light">{item.value}</span>
          <span className="text-[10px] uppercase tracking-widest font-sans opacity-60 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative antialiased selection:bg-rose-100 selection:text-rose-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-[#fdfcf8] text-stone-800 p-6 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-white/40 z-10" />
          <Image 
            src="https://picsum.photos/seed/hero-wedding/1920/1080?blur=5" 
            alt="Wedding Background" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-sans font-semibold text-stone-500 mb-4 block">
            Our Journey Together
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-8 leading-tight">
            Sarah <span className="italic font-normal">&</span> James
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif italic text-stone-600 mb-12">
            &quot;I have found the one whom my soul loves.&quot;
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest font-sans text-stone-400">Scroll to view album</span>
            <div className="w-px h-12 bg-stone-300" />
          </motion.div>
        </motion.div>
      </section>

      {/* Overlapping Album Sections */}
      <div className="relative">
        {WEDDING_SECTIONS.map((section, index) => (
          <section
            key={section.id || section.title}
            className={`sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-12 ${section.color} ${section.textColor} shadow-[0_-20px_50px_rgba(0,0,0,0.05)]`}
            style={{ 
              zIndex: index + 1,
            }}
          >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <span className="text-sm uppercase tracking-widest font-sans font-bold opacity-60">
                    {section.subtitle}
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl font-serif leading-relaxed opacity-80 max-w-md">
                  {section.description}
                </p>
                
                {section.type === 'countdown' ? (
                  <CountdownTimer />
                ) : (
                  <div className="mt-12 flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-tighter font-sans opacity-40">Location</span>
                      <span className="text-sm font-sans flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Tuscany, Italy
                      </span>
                    </div>
                    <div className="w-px h-8 bg-stone-300/30" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-tighter font-sans opacity-40">Photographer</span>
                      <span className="text-sm font-sans flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Elena Rossi
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="order-1 md:order-2 relative aspect-[3/4] md:aspect-auto md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white"
              >
                <Image 
                  src={section.image || ''} 
                  alt={section.title} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Final Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white p-8 text-center relative z-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-8">To be continued...</h2>
          <p className="text-stone-400 font-serif italic text-xl mb-12">
            &quot;And so the adventure begins.&quot;
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-4 border border-white/20 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
            >
              Replay Story
            </button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center opacity-20">
          <Heart className="w-8 h-8" />
        </div>
      </section>
    </main>
  );
}
