"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HEART_GRID = [
  // 7 columns per row, 7 rows
  // true = show image, false = empty cell
  [false, true, true, false, true, true, false],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [false, true, true, true, true, true, false],
  [false, false, true, true, true, false, false],
  [false, false, false, true, false, false, false],
];

const HeartList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(imageRefs.current, { opacity: 0, scale: 0.3, y: 50 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate images with stagger
      tl.to(
        imageRefs.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1.5,
            from: "start",
            grid: "auto",
          },
        },
        "-=0.4"
      );

      // Add hover animations with more sophisticated effects
      imageRefs.current.forEach((ref) => {
        if (ref) {
          const image = ref.querySelector("img");
          const overlay = ref.querySelector(".overlay");
          const border = ref.querySelector(".border");
          const particles = ref.querySelectorAll(".particle");

          // Create hover timeline for each image
          const hoverTl = gsap.timeline({ paused: true });

          hoverTl
            .to(image, {
              scale: 1.1,
              rotation: 2,
              duration: 0.4,
              ease: "power2.out",
            })
            .to(
              overlay,
              {
                opacity: 1,
                duration: 0.3,
              },
              0
            )
            .to(
              border,
              {
                borderColor: "rgba(236, 72, 153, 0.5)",
                duration: 0.3,
              },
              0
            )
            .to(
              particles,
              {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                stagger: 0.1,
              },
              0.1
            )
            .to(
              image,
              {
                filter: "brightness(1.1) saturate(1.2)",
                duration: 0.3,
              },
              0
            );

          // Add continuous floating animation for particles
          gsap.to(particles, {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.3,
            repeat: -1,
            yoyo: true,
          });

          ref.addEventListener("mouseenter", () => {
            hoverTl.play();
          });

          ref.addEventListener("mouseleave", () => {
            hoverTl.reverse();
          });

          // Add click animation
          ref.addEventListener("click", () => {
            gsap.to(image, {
              scale: 0.95,
              duration: 0.1,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden pt-4 px-2">
      <div className="grid grid-cols-7 gap-2">
        {HEART_GRID.flat().map((showImage, idx) => (
          <div className="aspect-square w-full" key={idx}>
            {showImage && (
              <div
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                className="relative size-full cursor-pointer"
              >
                <div className="relative size-full">
                  <Image
                    src="/assets/images/wedding.png"
                    alt="wedding"
                    width={300}
                    height={300}
                    className="size-full object-cover rounded-lg"
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-lg opacity-0" />
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent" />
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                    <div className="particle absolute top-1 left-1 w-1 h-1 bg-pink-300 rounded-full opacity-0" />
                    <div className="particle absolute top-2 right-2 w-1 h-1 bg-purple-300 rounded-full opacity-0" />
                    <div className="particle absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartList;
