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
      {/* Floating glowing feather */}
      {showFeather && (
        <img
          src="/images/flute-peacock.png"
          alt="Peacock Feather"
          className="absolute w-30 md:w-50 animate-float-peacock glow-peacock opacity-0s"
          style={{ top: '45%', left: '25%', right:'45%', transform: 'translateX(-50%)' }}
        />
      )}

      {/* Radhe Radhe animated word-by-word */}
      {showText && (
        <div className="flex gap-4 mt-40">
          {radheWords.map((word, index) => (
            <span
              key={index}
              className="text-5xl md:text-6xl font-bold text-pink-300 glow-text opacity-0 animate-fade-in-word"
              style={{ animationDelay: `${index * 0.8}s`}}
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
