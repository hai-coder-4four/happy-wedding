"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Floating = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const snowContainerRef = useRef<HTMLDivElement>(null);
  const heartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!snowContainerRef.current || !heartContainerRef.current) return;

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "absolute pointer-events-none";
      snowflake.innerHTML = "❄️";
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.top = "-20px";
      snowflake.style.fontSize = `${Math.random() * 10 + 5}px`;
      snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`;
      snowContainerRef.current?.appendChild(snowflake);

      gsap.to(snowflake, {
        y: window.innerHeight + 50,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 4 + 6,
        ease: "none",
        onComplete: () => {
          snowflake.remove();
        },
      });
    };

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "absolute pointer-events-none";
      heart.innerHTML = "❤️";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = "-20px";
      heart.style.fontSize = `${Math.random() * 12 + 14}px`;
      heart.style.opacity = `${Math.random() * 0.4 + 0.4}`;
      heartContainerRef.current?.appendChild(heart);

      gsap.to(heart, {
        y: window.innerHeight + 50,
        x: `+=${Math.random() * 80 - 40}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 6 + 7,
        ease: "none",
        onComplete: () => {
          heart.remove();
        },
      });
    };

    const snowInterval = setInterval(createSnowflake, 3000);
    const heartInterval = setInterval(createHeart, 5000);

    // Start first snowflake and heart after delays
    const initialSnowTimeout = setTimeout(createSnowflake, 1000);
    const initialHeartTimeout = setTimeout(createHeart, 2500);

    return () => {
      clearInterval(snowInterval);
      clearInterval(heartInterval);
      clearTimeout(initialSnowTimeout);
      clearTimeout(initialHeartTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Snow animation container */}
      <div
        ref={snowContainerRef}
        className="pointer-events-none fixed inset-0 z-50"
      />

      {/* Heart animation container */}
      <div
        ref={heartContainerRef}
        className="pointer-events-none fixed inset-0 z-50"
      />
    </div>
  );
};

export default Floating;
