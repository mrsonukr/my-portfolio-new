import React from "react";
import MovingText from "./ui/MovingText";
import PrimaryButton from "./ui/PrimaryButton";
import WhiteButton from "./ui/WhiteButton";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/images/box-pattern.svg)" }}
    >
      {/* Content */}
      <div className="max-w-2xl z-10">
        <h1 className="text-5xl md:text-[72px] font-bold leading-snug mb-4">
          <span className="">Hi, I'm </span>
          <span className="text-primary">
            S <span className="sonu"></span>nu Kumar
          </span>
        </h1>
        <MovingText />
        <p className=" text-lg my-6">
          Passionate about creating innovative web solutions and sharing
          knowledge through technical writing. Specialized in modern web
          technologies and cloud architecture.
        </p>

        <div className="flex gap-4">
          <PrimaryButton label="Click Me" />
          <WhiteButton label="Learn More" />
        </div>
      </div>

      {/* Image */}
      <div className="relative mt-10 md:mt-0">
        <img
          src="/images/me.png"
          alt="Sonu Kumar"
          className="block md:hidden w-64 h-auto z-10 relative"
        />
        <img
          src="/images/me-fade.png"
          alt="Sonu Kumar"
          className="hidden md:block w-[400px] h-auto z-10 relative"
        />
      </div>
    </section>
  );
};

export default Hero;
