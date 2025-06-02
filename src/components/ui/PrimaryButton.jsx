import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PrimaryButton = () => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const onMouseEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    const onMouseLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.3,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", onMouseEnter);
    button.addEventListener("mouseleave", onMouseLeave);
    button.addEventListener("mousemove", onMouseMove);

    return () => {
      button.removeEventListener("mouseenter", onMouseEnter);
      button.removeEventListener("mouseleave", onMouseLeave);
      button.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .primary-button {
          background-color: #00ff00; /* primary green */
          color: black;
          cursor: pointer;
        }
        .primary-button:hover .label {
          color: white !important;
        }
      `}</style>

      <a
        ref={buttonRef}
        href="#"
        className="primary-button relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base overflow-hidden transition-colors duration-200 group"
      >
        <span
          ref={flairRef}
          className="flair absolute inset-0 pointer-events-none z-0 transform scale-0 origin-center will-change-transform"
        >
          <span
            className="block w-[170%] aspect-square absolute top-0 left-0 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: "#000000" }} // flair black
          ></span>
        </span>
        <span className="label relative z-10 transition-colors duration-200">
          Click Me
        </span>
      </a>
    </>
  );
};

export default PrimaryButton;
