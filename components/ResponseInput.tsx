
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, HeartHandshake } from 'lucide-react';

interface ResponseInputProps {
  onBack: () => void;
  onSubmit: (text: string) => void;
  initialText?: string;
}

const ResponseInput: React.FC<ResponseInputProps> = ({ onBack, onSubmit, initialText = '' }) => {
  const [text, setText] = useState(initialText);

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-rose-400 animate-in fade-in zoom-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <HeartHandshake className="text-rose-500" />
        <h2 className="text-2xl font-bold text-gray-800">Your Response</h2>
      </div>
      
      <p className="text-gray-600 mb-8 italic">
        "Love is a conversation that never ends. Write down whatever is in your heart..."
      </p>

      <div className="space-y-6">
        <div className="relative">
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message here, Patricia..."
            className="w-full min-h-[250px] p-6 text-lg border-2 border-pink-100 rounded-2xl focus:ring-4 focus:ring-rose-100 focus:border-rose-300 outline-none transition-all resize-none bg-[#fffafb] font-serif italic leading-relaxed text-gray-900"
          />
          <div className="absolute bottom-4 right-4 text-pink-200">
            <Sparkles size={24} />
          </div>
        </div>

        <button
          onClick={() => onSubmit(text)}
          disabled={!text.trim()}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          Make it a letter <Sparkles size={20} className="group-hover:animate-spin" />
        </button>
      </div>

      <button 
        onClick={onBack}
        className="mt-6 text-gray-400 hover:text-rose-500 text-sm flex items-center gap-1 mx-auto transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>
    </div>
  );
};

export default ResponseInput;
