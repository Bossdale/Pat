
import React, { useState } from 'react';
import { AppState } from './types';
import ProposalView from './components/ProposalView';
import LetterGenerator from './components/LetterGenerator';
import FloatingHearts from './components/FloatingHearts';
import PhotoCard from './components/PhotoCard';
import { Heart, Stars, Music, Camera } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.START);
  const TARGET_NAME = "Patricia Ayo";

  // Note: Replace these placeholder URLs with your actual image paths if hosted elsewhere.
  // Using generic high-quality representative images for the demo.
  const photo1 = "https://images.unsplash.com/photo-1516589174184-c68536574af0?q=80&w=1000&auto=format&fit=crop";
  const photo2 = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop";

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
              onClick={() => setState(AppState.PROPOSAL)}
              className="bg-white text-rose-500 border-2 border-rose-500 font-bold px-10 py-4 rounded-full text-xl shadow-xl hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 z-20"
            >
              Open Your Heart
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
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo0Z3J4NXo1bnpvOXJzNHJ1bnpqYTMxdmxsMWZ6MTh5enVpejFqeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iCvT16p8rX92t77h4C/giphy.gif" 
                alt="Happy Bear" 
                className="w-48 h-48 object-contain mb-4 mx-auto"
              />
              <h1 className="text-5xl md:text-7xl font-romantic text-rose-600 mb-4">
                YAYYY! I Love You, Patricia! ❤️
              </h1>
              <p className="text-gray-600 text-xl max-w-lg mx-auto mb-8">
                You've made me the happiest person in the world. 
                I can't wait to spend forever with you.
              </p>
            </div>

            {/* Photo Gallery Section */}
            <div className="w-full mb-16">
              <div className="flex items-center justify-center gap-2 mb-8 text-rose-400">
                <Camera size={20} />
                <h3 className="text-2xl font-romantic font-bold">Our Beautiful Memories</h3>
                <Camera size={20} />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4">
                <div className="w-64">
                  <PhotoCard 
                    src={photo1} 
                    caption="Forever Yours" 
                    tilt="left"
                  />
                </div>
                <div className="w-64">
                  <PhotoCard 
                    src={photo2} 
                    caption="You & Me" 
                    tilt="right"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setState(AppState.LOVE_LETTER)}
                className="bg-rose-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:bg-rose-600 transition-all flex items-center justify-center gap-2"
              >
                Create Our Love Letter <Stars size={20} className="fill-current" />
              </button>
              <button 
                onClick={() => setState(AppState.PROPOSAL)}
                className="bg-white text-rose-400 border border-rose-200 font-bold px-8 py-4 rounded-full text-lg shadow hover:bg-gray-50 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        );

      case AppState.LOVE_LETTER:
        return <LetterGenerator defaultPartnerName={TARGET_NAME} onBack={() => setState(AppState.ACCEPTED)} />;
        
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-x-hidden">
      <FloatingHearts />
      
      {/* Sound toggle decoration */}
      <div className="fixed top-6 right-6 z-50">
        <button className="bg-white/80 backdrop-blur p-3 rounded-full shadow-lg text-rose-500 hover:text-rose-600 transition-colors">
          <Music size={24} />
        </button>
      </div>

      <main className="z-10 w-full flex items-center justify-center py-12">
        {renderContent()}
      </main>

      {/* Decorative corners */}
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
