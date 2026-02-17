
import React from 'react';
import { ArrowLeft, Heart, Sparkles, Save } from 'lucide-react';

interface ResponseLetterProps {
  text: string;
  onBack: () => void;
  onSave: () => void;
}

const ResponseLetter: React.FC<ResponseLetterProps> = ({ text, onBack, onSave }) => {
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
            <h2 className="text-3xl font-romantic text-rose-600 mb-1">To My Sherbin Deyl,</h2>
            <p className="text-rose-300 text-sm italic">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          <Sparkles className="text-rose-400" />
        </div>

        <div className="text-gray-800 text-lg leading-relaxed italic whitespace-pre-line min-h-[200px]">
          {text}
        </div>

        <div className="mt-12 pt-6 border-t border-rose-100 text-right">
          <p className="text-rose-600 font-romantic text-2xl">With Love,</p>
          <p className="text-rose-400 font-romantic text-xl mt-1">Patricia Ayo</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 no-print">
        <button 
          onClick={onSave}
          className="bg-rose-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-rose-600 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
        >
          <Save size={18} /> Save Letter
        </button>
        
        <button 
          onClick={onBack}
          className="text-rose-400 hover:text-rose-600 text-sm flex items-center gap-1 transition-colors font-sans"
        >
          <ArrowLeft size={14} /> Edit response
        </button>
      </div>
      
      <style>{`
        @media print {
          .no-print { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ResponseLetter;
