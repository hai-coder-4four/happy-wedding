"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LightBox = () => {
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial positions
    gsap.set(leftImageRef.current, { x: 0 });
    gsap.set(rightImageRef.current, { x: 0 });
    gsap.set(centerImageRef.current, {
      y: 0,
      rotation: 0,
      scale: 1,
    });
    gsap.set(containerRef.current, {
      opacity: 1,
      display: "flex",
    });

    // Create timeline for the animation
    const tl = gsap.timeline();

    // Center image animation first (rotation and fall)
    tl.to(centerImageRef.current, {
      rotation: 720, // 2 full rotations
      y: "100vh", // Fall down to bottom of screen
      scale: 0.5,
      duration: 3,
      delay: 0.5,
      ease: "power3.inOut",
    })
      // Then left and right images slide out together
      .to(
        leftImageRef.current,
        {
          x: "-100%",
          duration: 3,
          ease: "power3.out",
        },
        2 // Start after center animation begins
      )
      .to(
        rightImageRef.current,
        {
          x: "100%",
          duration: 2,
          ease: "power3.out",
        },
        2 // Start at the same time as left image
      )
      // Hide the container after all animations complete
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
          },
        },
        4
      ); // Start after 4 seconds (when all other animations finish)
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed size-full inset-0 m-auto z-90 bg-black/50 flex items-center justify-center"
    >
      <div ref={leftImageRef} className="relative w-1/2 h-full">
        <Image
          src="/assets/images/left.jpg"
          alt="left"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </div>
      <div
        ref={centerImageRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <Image
          src="/assets/images/center.png"
          alt="center"
          width={200}
          height={200}
          className="size-[200px] object-cover"
        />
      </div>
      <div ref={rightImageRef} className="relative w-1/2 h-full">
        <Image
          src="/assets/images/right.jpg"
          alt="right"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default LightBox;
