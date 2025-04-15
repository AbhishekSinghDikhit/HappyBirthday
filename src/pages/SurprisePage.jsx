import React, { useEffect, useState } from 'react';
import '../index.css';

const poems = [
  "चाँद जब भी फलक से निहारता  होगा तुम्हारी ओर, \nहैरत में सोचता होगा , ये हकीकत है या कुछ और, \nयूँ के तुम्हारे नूर से उसके सारे नखरे खत्म हो गये होंगे, \nजब उसे पता चला होगा के चाँद वो है, पर चाँदनी फैला रहा कोई और !!",
  "आपके तारीफ़ में ये शब्द, ये शायरी, \nये नज़्म, ये ग़ज़ल कुछ भी नही, \nजिक्र जहां आपकी खूबसूरती का हो, \nवहाँ मेरे अल्फाज़ कुछ भी नही ।।",
  "मन कर रहा है शब्दों को यहीं रोक दूँ, \nशब्दकोश कम पड़ गए, \nतारीफ़ यहीं समेट दूँ,\nपर परिभाषा तुम्हारे हुस्न की पूरी न हो पाएगी,\nक्या करूँ मैं नए शब्द बनाऊँ या शब्दकोश यहीं समेट दूँ ।।",
];

const SurprisePage = () => {
  const [stage, setStage] = useState('countdown');
  const [count, setCount] = useState(3);
  const [videoFadeOut, setVideoFadeOut] = useState(false);
  const [showBirthdayText, setShowBirthdayText] = useState(false);
  const [showMoon, setShowMoon] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showSweetMessage, setShowSweetMessage] = useState(false);
  const [showGiftButton, setShowGiftButton] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    const timers = [];

    if (stage === 'countdown') {
      if (count > 0) {
        timers.push(setTimeout(() => setCount(prev => prev - 1), 1000));
      } else {
        setStage('fireworks');
      }
    }

    if (stage === 'fireworks') {
      timers.push(setTimeout(() => setVideoFadeOut(true), 4000));
      timers.push(setTimeout(() => {
        setStage('message');
        setVideoFadeOut(false);
      }, 5000));
    }

    if (stage === 'message') {
      timers.push(setTimeout(() => {
        setStage('birthday');
        setShowMoon(true);
      }, 5000));
    }

    if (stage === 'birthday') {
      if (!showMoon) {
        setShowMoon(true);
      } else {
        timers.push(setTimeout(() => setShowBirthdayText(true), 3000));
        timers.push(setTimeout(() => setShowBackground(true), 5000));
        timers.push(setTimeout(() => setShowSweetMessage(true), 7500));
        timers.push(setTimeout(() => setShowGiftButton(true), 10800));
      }
    }

    return () => timers.forEach(clearTimeout);
  }, [stage, count, showMoon]);

  const renderAnimatedText = (text) => (
    <div className="flex flex-wrap gap-1 justify-center">
      {[...text].map((char, index) => (
        <span
          key={index}
          className="animated-char text-4xl md:text-5xl font-bold opacity-0 animate-fade-in-char"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );

  const renderAnimatedMessage = (text) => (
    <div className="flex gap-1 justify-center text-lg md:text-2xl text-pink-200 max-w-2xl text-center">
      {[...text].map((char, index) => (
        <span
          key={index}
          className="animated-char opacity-0 animate-fade-in-char"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Countdown */}
      {stage === 'countdown' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-500">
          <h1 className="text-6xl md:text-9xl font-extrabold animate-pulse">
            {count > 0 ? count : 'Get Ready!'}
          </h1>
        </div>
      )}

      {/* Fireworks */}
      {stage === 'fireworks' && (
        <video
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            videoFadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src="/videos/fireworks.mp4" type="video/mp4" />
        </video>
      )}

      {/* Message */}
      {stage === 'message' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-3xl md:text-5xl font-bold animate-pulse">
            {renderAnimatedText("It's Your Special Day")}
          </h1>
        </div>
      )}

      {/* Birthday Stage */}
      {stage === 'birthday' && (
        <div className="absolute inset-0">
          {/* Moon */}
          <img
            src="/images/moon.jpg"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              showMoon ? 'opacity-100 animate-moon-glow' : 'opacity-0'
            }`}
          />

          {/* Background */}
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[2000ms] ${
              showBackground ? 'opacity-100 bg-[url("/images/nightscape.jpg")]' : 'opacity-0'
            }`}
          />

          {/* Floating hearts */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="heart animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Text and Sweet Message */}
          {showBirthdayText && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center bg-black/40">
              <h1 className="text-4xl md:text-6xl font-bold text-pink-400 animate-float-slow">
                {renderAnimatedText('Happy Birthday 🎉')}
              </h1>

              {showSweetMessage && (
                <>
                  {renderAnimatedMessage('You deserve all the happiness this universe can offer.')}
                  {renderAnimatedMessage('Keep shining like the moon,🌙💕')}
                  {renderAnimatedMessage('Mahadev Bless you 🔱❤️')}
                </>
              )}

              {/* Gift Button */}
              {showGiftButton && !showCards && (
                <button
                  onClick={() => setShowCards(true)}
                  className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full text-lg hover:bg-pink-600 transition-all duration-300"
                >
                  Click here for your Gift 🎁
                </button>
              )}
            </div>
          )}

            {/* Poetry Cards */}
            {showCards && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 gap-6 text-center z-50">
                    <h2 className="text-2xl font-bold text-pink-400 mb-4">Choose a Card ✨</h2>

                    <div className="flex flex-wrap justify-center gap-6">
                      {poems.map((poem, idx) => {
                        const isSelected = selectedCardIndex === idx;

                        return (
                          <div
                            key={idx}
                            className={`card-container ${isSelected ? 'flipped enlarged' : ''}`}
                            onClick={() => setSelectedCardIndex(idx)}
                          >
                            <div className="card-inner">
                              <div className="card-front">Card {idx + 1}</div>
                              <div className="card-back whitespace-pre-line text-pink-100">{poem}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
          )}
    </div>
  );
};

export default SurprisePage;
