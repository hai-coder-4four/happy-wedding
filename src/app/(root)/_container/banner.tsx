"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BANNER_ITEMS = [
  { id: 1, image: "/assets/images/wedding.png", text: "20" },
  { id: 2, image: "/assets/images/wedding.png", text: "10" },
  { id: 3, image: "/assets/images/wedding.png", text: "2025" },
];

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      imageRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scale: 0.5, y: 100, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      textRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2 + 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    const el = imageRefs.current[index];
    if (el) {
      gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = (index: number) => {
    const el = imageRefs.current[index];
    if (el) {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div ref={containerRef} className="grid grid-cols-3 gap-1 overflow-hidden">
      {BANNER_ITEMS.map((item, idx) => (
        <div
          key={item.id}
          className="relative aspect-[2/3] w-full cursor-pointer overflow-hidden rounded-lg"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          <div
            ref={(el) => {
              imageRefs.current[idx] = el;
            }}
            className="h-full w-full"
          >
            <Image
              src={item.image}
              alt={item.text}
              width={300}
              height={300}
              className="size-full object-cover transition-transform duration-300 rounded-lg hover:scale-110"
            />
          </div>
          <div
            ref={(el) => {
              textRefs.current[idx] = el;
            }}
            className="absolute bottom-3 left-0 right-0 text-center text-white"
          >
            <span className="text-4xl font-bold drop-shadow-lg">
              {item.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
