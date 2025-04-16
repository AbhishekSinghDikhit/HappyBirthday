import React, { useEffect, useState } from 'react';
import '../index.css';

const SecondSurprise = () => {
  const [showFeather, setShowFeather] = useState(false);
  const [showText, setShowText] = useState(false);
  const radheWords = ['राधे', 'राधे', '❤️🌸'];

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFeather(true), 1000);
    const timer2 = setTimeout(() => setShowText(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Floating glowing feather (flute+peacock) */}
      {showFeather && (
        <img
          src="/images/flute-peacock.png"
          alt="Peacock Feather"
          className="absolute animate-float-peacock glow-peacock"
          style={{
            width: '70%',          // Responsive width
            maxWidth: '580px',     // Prevent overflow on large screens
            top: '30%',
            left: '28%',
            transform: 'translateX(-50%)',
          }}
        />
      )}

      {/* Radhe Radhe animated text */}
      {showText && (
        <div
          className="flex gap-4 absolute"
          style={{
            top: '40%', // position below image
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {radheWords.map((word, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-200 glow-text opacity-0 animate-fade-in-word"
              style={{
                animationDelay: `${index * 0.8}s`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondSurprise;
