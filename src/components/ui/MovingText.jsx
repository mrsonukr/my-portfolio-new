import React from "react";

const words = ["Responsive", "Dynamic", "Intuitive", "Innovative", "Scalable"];

const MovingText = () => {
  return (
    <div className="flex items-center font-semibold text-2xl h-10 rounded-lg dark:text-white">
      <h2>I Build More</h2>
      <div className="relative overflow-hidden h-10 ml-2">
        <span className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        {words.map((word, index) => (
          <span
            key={index}
            className="word block h-full leading-10 pl-1.5 text-primary dark:text-primary hue-rotate-[120deg] animate-spin_4991"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovingText;