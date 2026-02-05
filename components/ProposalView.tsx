
import React, { useState, useRef } from 'react';
import { Heart, Stars } from 'lucide-react';

interface ProposalViewProps {
  onAccept: () => void;
  name: string;
}

const ProposalView: React.FC<ProposalViewProps> = ({ onAccept, name }) => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const [noCount, setNoCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  const handleNoHover = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 100;
    const buttonHeight = 40;

    const newLeft = Math.random() * (container.width - buttonWidth);
    const newTop = Math.random() * (container.height - buttonHeight);

    setNoButtonStyle({
      position: 'absolute',
      left: `${newLeft}px`,
      top: `${newTop}px`,
      transition: 'all 0.2s ease',
      zIndex: 20,
    });
    setNoCount((prev) => (prev + 1) % noPhrases.length);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-xl min-h-[500px] bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden border-4 border-pink-100"
    >
      <div className="mb-6 animate-bounce">
        <img 
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo0Z3J4NXo1bnpvOXJzNHJ1bnpqYTMxdmxsMWZ6MTh5enVpejFqeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" 
          alt="Cute Bear"
          className="w-48 h-48 object-contain"
        />
      </div>

      <div className="space-y-2 mb-8 px-4">
        <h2 className="text-2xl font-romantic text-rose-400">Dearest {name},</h2>
        <h1 className="text-4xl md:text-5xl font-romantic text-rose-600 leading-tight">
          Will you be my Valentine? 🌹
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center min-h-[120px] w-full relative">
        <button
          onClick={onAccept}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform hover:scale-110 transition-all flex items-center gap-2 z-10"
        >
          Yes! <Heart className="fill-current" />
        </button>

        <button
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={noButtonStyle}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-full text-lg font-medium shadow transition-all whitespace-nowrap"
        >
          {noPhrases[noCount]}
        </button>
      </div>

      <div className="mt-8 text-pink-300 flex gap-2">
        <Stars size={16} />
        <p className="text-sm font-medium italic">Hand-crafted just for you</p>
        <Stars size={16} />
      </div>
    </div>
  );
};

export default ProposalView;
