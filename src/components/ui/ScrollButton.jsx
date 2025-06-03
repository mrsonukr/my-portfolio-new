import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      aria-label="Scroll to about section"
      className="group p-2 flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col gap-1">
        <ChevronDown 
          className="w-6 h-6 text-black dark:text-white animate-bounce" 
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
};

export default ScrollButton;