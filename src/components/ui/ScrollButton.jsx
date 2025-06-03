import React from 'react';
import { ChevronsDown } from 'lucide-react';

const ScrollButton = ({ onClick }) => {
  return (
    <button 
      onClick={() => {
        console.log('Button clicked');
        if (onClick) onClick();
      }}
      className="z-50 pointer-events-auto p-2 flex flex-col items-center gap-2"
    >
      <ChevronsDown 
        className="w-6 h-6 text-black dark:text-white animate-bounce" 
        strokeWidth={2.5}
      />
    </button>
  );
};

export default ScrollButton;
