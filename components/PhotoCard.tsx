
import React from 'react';

interface PhotoCardProps {
  src: string;
  caption: string;
  tilt?: 'left' | 'right' | 'none';
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, caption, tilt = 'none' }) => {
  const tiltClass = tilt === 'left' ? '-rotate-3' : tilt === 'right' ? 'rotate-3' : '';

  return (
    <div className={`group relative bg-white p-3 pb-8 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:shadow-2xl ${tiltClass}`}>
      {/* Decorative "Tape" */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-pink-200/40 backdrop-blur-sm -rotate-2 z-10" />
      
      <div className="overflow-hidden bg-gray-100 aspect-[4/5] relative">
        <img 
          src={src} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-romantic text-xl text-rose-500">{caption}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
