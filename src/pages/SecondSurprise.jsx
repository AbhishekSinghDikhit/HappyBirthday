import React, { useEffect, useState } from 'react';
import '../index.css';

const SecondSurprise = () => {
  const [showFeather, setShowFeather] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showKrishnaButton, setShowKrishnaButton] = useState(false);
  const [showKrishnaMessage, setShowKrishnaMessage] = useState(false);

  const radheWords = ['राधे', 'राधे', '❤️🌸'];

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFeather(true), 1000);
    const timer2 = setTimeout(() => setShowText(true), 3000);
    const timer3 = setTimeout(() => setShowKrishnaButton(true), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white flex flex-col items-center justify-center overflow-hidden font-[Poppins]">
      
      {/* Floating glowing feather */}
      {showFeather && (
        <img
          src="/images/flute-peacock.png"
          alt="Peacock Feather"
          className="absolute animate-float-peacock glow-peacock"
          style={{
            width: '70%',
            maxWidth: '580px',
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
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {radheWords.map((word, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-200 glow-text opacity-0 animate-fade-in-word"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      )}

      {/* Krishna's Message Button */}
      {showKrishnaButton && !showKrishnaMessage && (
        <button
          onClick={() => setShowKrishnaMessage(true)}
          className="mt-[28rem] sm:mt-[26rem] px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-400 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-10 animate-fade-in-soft"
        >
          Click here to know Krishna's message 💫
        </button>
      )}

      {/* Krishna's Message Card */}
        {showKrishnaMessage && (
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-pink-200 w-[90%] max-w-3xl flex flex-col md:flex-row overflow-hidden animate-fade-in-soft">
            
            {/* Left: Krishna Image */}
            <div className="w-full md:w-1/2 h-72 md:h-auto bg-gradient-to-b from-blue-200/10 to-pink-200/10 flex items-center justify-center">
            <img
                src="/images/little-krishna2.png"
                alt="Little Krishna"
                className="object-contain h-full p-4"
            />
            </div>

            {/* Right: Blessing Message */}
            <div className="w-full md:w-1/2 p-6 text-left flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-pink-200 mb-3">Krishna's Blessing ✨</h2>
            <p className="text-lg text-pink-100 leading-relaxed">
                “Where there is pure love, there is Krishna. He sees your heart, not your past. <br />
                Keep smiling, keep loving. You're truly special to him.”
            </p>
            </div>
        </div>
        )}
    </div>
  );
};

export default SecondSurprise;
