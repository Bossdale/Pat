
import React from 'react';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

interface StaticLetterProps {
  onBack: () => void;
  name: string;
}

const StaticLetter: React.FC<StaticLetterProps> = ({ onBack, name }) => {
  return (
    <div className="w-full max-w-2xl bg-[#fffaf0] rounded-sm shadow-2xl p-8 md:p-12 border-8 border-double border-rose-200 relative overflow-hidden animate-in fade-in zoom-in duration-1000">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Heart size={120} className="text-rose-500 rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-10">
        <Heart size={100} className="text-rose-500 -rotate-12" />
      </div>

      <div className="relative z-10 font-serif">
        <div className="flex justify-between items-start mb-8 border-b border-rose-100 pb-4">
          <div>
            <h2 className="text-3xl font-romantic text-rose-600 mb-1">Dearest {name},</h2>
            <p className="text-rose-300 text-sm italic">February 14, 2025</p>
          </div>
          <Sparkles className="text-rose-400 animate-pulse" />
        </div>

        <div className="space-y-6 text-gray-800 text-lg leading-relaxed italic">
          <p>
            From the very first moment you walked into my life, everything felt different. 
            There's a warmth in your smile and a kindness in your eyes that I find myself 
            reaching for every single day. You have this incredible way of making even the 
            simplest moments feel like the most beautiful adventures, and I am so deeply 
            grateful that I get to share this journey with you.
          </p>

          <p>
            I find myself constantly in awe of the person you are—your strength, your humor, 
            and the way you care for everyone around you. You are my best friend, my biggest 
            supporter, and the one person who truly understands me. Every memory we've built together 
            is a treasure I carry in my heart, and I find myself falling for you more and 
            more with every laugh we share and every challenge we face together.
          </p>

          <p>
            As we look toward our future, my only wish is to continue building a life full of 
            love, happiness, and endless joy by your side. You are the most beautiful part 
            of my world, and I promise to cherish, respect, and love you with everything I have. 
            You aren't just my Valentine for today; you are my heart's choice for every day 
            that follows. I love you more than words could ever truly capture.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-rose-100 text-right">
          <p className="text-rose-600 font-romantic text-2xl">Forever Yours,</p>
          <p className="text-rose-400 font-romantic text-xl mt-1">Your Valentine</p>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="mt-12 text-rose-400 hover:text-rose-600 text-sm flex items-center gap-1 mx-auto transition-colors font-sans no-print"
      >
        <ArrowLeft size={14} /> Back to our memories
      </button>
      
      <style>{`
        @media print {
          .no-print { display: none; }
        }
      `}</style>
    </div>
  );
};

export default StaticLetter;
