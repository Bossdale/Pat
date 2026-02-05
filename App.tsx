import React, { useState, useRef } from 'react';
import { AppState } from './types';
import ProposalView from './components/ProposalView';
import StaticLetter from './components/StaticLetter';
import FloatingHearts from './components/FloatingHearts';
import PhotoCard from './components/PhotoCard';
import { Heart, Stars, Camera, Mail, Lock, Calendar } from 'lucide-react';

// Local Assets
import photo1 from './assets/image1.png'; 
import photo2 from './assets/image2.png';
import loveSong from './assets/love_song.mp3';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.START);
  const [showLockedMessage, setShowLockedMessage] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const TARGET_NAME = "Patricia Ayo";
  const UNLOCK_DATE = new Date('2026-02-14T00:00:00');

  // Check if the current date is on or after the unlock date
  const isUnlocked = new Date() >= UNLOCK_DATE;

  const startProposal = () => {
    setState(AppState.PROPOSAL);
    
    if (audioRef.current) {
      // Ensure audio is unmuted and set volume to 70%
      audioRef.current.muted = false;
      audioRef.current.volume = 0.7;
      
      audioRef.current.play().catch(e => {
        console.log("Audio playback was blocked by the browser. It usually requires a user click.", e);
      });
    }
  };

  const handleLoveLetterClick = () => {
    if (isUnlocked) {
      setState(AppState.LOVE_LETTER);
    } else {
      setShowLockedMessage(true);
      setTimeout(() => setShowLockedMessage(false), 3000);
    }
  };

  const renderContent = () => {
    switch (state) {
      case AppState.START:
        return (
          <div className="flex flex-col items-center text-center animate-in fade-in duration-1000">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-rose-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Heart className="text-rose-500 fill-rose-500 w-24 h-24 relative" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Stars className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-romantic text-rose-600 mb-4 px-4">
              A Special Surprise...
            </h1>
            <p className="text-rose-400 text-xl font-medium mb-12 max-w-md px-6 italic">
              Specifically for you, Patricia.
            </p>
            <button 
              onClick={startProposal}
              className="bg-white text-rose-500 border-2 border-rose-500 font-bold px-10 py-4 rounded-full text-xl shadow-xl hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 z-20 flex items-center gap-3"
            >
              Open Your Heart <Heart size={20} className="fill-current" />
            </button>
          </div>
        );

      case AppState.PROPOSAL:
        return <ProposalView name={TARGET_NAME} onAccept={() => setState(AppState.ACCEPTED)} />;

      case AppState.ACCEPTED:
        return (
          <div className="flex flex-col items-center text-center animate-in zoom-in duration-700 w-full max-w-4xl px-4">
            <div className="mb-12">
               <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDF6aGd1eXJ2eXZseGVqNWt0NzE0YWxtMmpvNmloMmQ5aXQ0Y2l0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif" 
                alt="Happy Bear" 
                className="w-48 h-48 object-contain mb-4 mx-auto"
              />
              <h1 className="text-5xl md:text-7xl font-romantic text-rose-600 mb-4">
                YAYYY! I Love You, Patricia! ❤️
              </h1>
              <p className="text-gray-600 text-xl max-w-lg mx-auto mb-8">
                You've made me the happiest person in the world. 
                I can't wait to see you on February 14th! Labyuu Lablabbb!
              </p>
            </div>

            <div className="w-full mb-16">
              <div className="flex items-center justify-center gap-2 mb-8 text-rose-400">
                <Camera size={20} />
                <h3 className="text-2xl font-romantic font-bold">Our Beautiful Memories</h3>
                <Camera size={20} />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4">
                <div className="w-64">
                  <PhotoCard src={photo1} caption="Wow ug nina! hehe" tilt="left" />
                </div>
                <div className="w-64">
                  <PhotoCard src={photo2} caption="Forever Yours" tilt="right" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLoveLetterClick}
                  className={`${isUnlocked ? 'bg-rose-500 hover:bg-rose-600' : 'bg-gray-400 cursor-not-allowed opacity-80'} text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden`}
                >
                  {isUnlocked ? <Mail size={20} /> : <Lock size={20} />}
                  Love Letter 
                  {isUnlocked && <Stars size={20} className="fill-current" />}
                  {!isUnlocked && (
                    <div className="absolute bottom-0 left-0 w-full bg-black/10 py-0.5 text-[10px] font-bold tracking-widest uppercase">
                      Unlocks Feb 14
                    </div>
                  )}
                </button>
                <button 
                  onClick={() => setState(AppState.PROPOSAL)}
                  className="bg-white text-rose-400 border border-rose-200 font-bold px-8 py-4 rounded-full text-lg shadow hover:bg-gray-50 transition-all"
                >
                  Go Back
                </button>
              </div>

              {showLockedMessage && (
                <div className="animate-bounce flex items-center gap-2 text-rose-500 font-bold mt-2">
                  <Calendar size={18} />
                  This letter opens on February 14, 2026! 🌹
                </div>
              )}
            </div>
          </div>
        );

      case AppState.LOVE_LETTER:
        return <StaticLetter name={TARGET_NAME} onBack={() => setState(AppState.ACCEPTED)} />;
        
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-x-hidden">
      <FloatingHearts />
      
      <audio ref={audioRef} src={loveSong} loop preload="auto" />

      <main className="z-10 w-full flex items-center justify-center py-12">
        {renderContent()}
      </main>

      <div className="fixed top-0 left-0 p-8 text-pink-200 pointer-events-none select-none">
        <Heart className="w-16 h-16 opacity-40 rotate-12" />
      </div>
      <div className="fixed bottom-0 right-0 p-8 text-pink-200 pointer-events-none select-none">
        <Heart className="w-20 h-20 opacity-40 -rotate-12" />
      </div>
    </div>
  );
};

export default App;