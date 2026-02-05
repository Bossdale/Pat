
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, ArrowLeft, HeartHandshake } from 'lucide-react';
import { generateLoveLetter } from '../services/geminiService';
import { LoveLetterParams } from '../types';

interface LetterGeneratorProps {
  onBack: () => void;
  defaultPartnerName: string;
}

const LetterGenerator: React.FC<LetterGeneratorProps> = ({ onBack, defaultPartnerName }) => {
  const [params, setParams] = useState<LoveLetterParams>({
    partnerName: defaultPartnerName,
    myName: '',
    vibe: 'poetic',
    favoriteMemory: '',
  });
  const [letter, setLetter] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await generateLoveLetter(params);
    setLetter(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-rose-500 overflow-hidden">
      {!letter ? (
        <>
          <div className="flex items-center gap-3 mb-6">
            <HeartHandshake className="text-rose-500" />
            <h2 className="text-2xl font-bold text-gray-800">Our AI Love Letter</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Let's create a personalized love letter to celebrate us. 
            Tell me a bit about how you feel!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={params.myName}
                  onChange={e => setParams({...params, myName: e.target.value})}
                  className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Her Name</label>
                <input 
                  required
                  type="text" 
                  value={params.partnerName}
                  onChange={e => setParams({...params, partnerName: e.target.value})}
                  className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all"
                  placeholder="Her Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Letter Vibe</label>
              <select 
                value={params.vibe}
                onChange={e => setParams({...params, vibe: e.target.value})}
                className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none"
              >
                <option value="poetic">Poetic & Deep</option>
                <option value="sweet">Sweet & Simple</option>
                <option value="funny">Funny & Cheesy</option>
                <option value="adventurous">Adventurous</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">A favorite memory of us...</label>
              <textarea 
                required
                value={params.favoriteMemory}
                onChange={e => setParams({...params, favoriteMemory: e.target.value})}
                rows={3}
                className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none"
                placeholder="The time we got ice cream in the rain..."
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="fill-current" />}
              {loading ? "Magic in progress..." : "Generate Love Letter"}
            </button>
          </form>
        </>
      ) : (
        <div className="animate-in fade-in zoom-in duration-700">
          <div className="bg-pink-50 rounded-2xl p-8 mb-8 relative border border-pink-100">
            <div className="absolute top-4 right-4 text-pink-200"><Sparkles size={40} /></div>
            <div className="whitespace-pre-line text-lg text-gray-800 leading-relaxed font-serif italic">
              {letter}
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setLetter('')}
              className="flex-1 border-2 border-rose-500 text-rose-500 font-bold py-3 rounded-xl hover:bg-rose-50 transition-all"
            >
              Rewrite It
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-rose-500 text-white font-bold py-3 rounded-xl hover:bg-rose-600 transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} /> Print & Keep
            </button>
          </div>
          <button 
            onClick={onBack}
            className="mt-6 text-gray-400 hover:text-rose-500 text-sm flex items-center gap-1 mx-auto"
          >
            <ArrowLeft size={14} /> Back to Proposal
          </button>
        </div>
      )}
    </div>
  );
};

export default LetterGenerator;
