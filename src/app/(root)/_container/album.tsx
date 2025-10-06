"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Album = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImagesRef = useRef<HTMLDivElement[]>([]);
  const rightImagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      leftImagesRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            {
              x: -200,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      rightImagesRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            {
              x: 200,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addLeftRef = (el: HTMLDivElement | null) => {
    if (el) leftImagesRef.current.push(el);
  };

  const addRightRef = (el: HTMLDivElement | null) => {
    if (el) rightImagesRef.current.push(el);
  };

  return (
    <div ref={containerRef} className="w-full py-10 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-4">
        Bộ sưu tập hình cưới
      </h2>
      <div className="grid grid-cols-3 grid-rows-11 gap-1">
        <div
          ref={addLeftRef}
          className="row-start-2 row-span-2 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div
          ref={addRightRef}
          className="col-start-2 col-span-2 row-span-2 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div
          ref={addRightRef}
          className="col-span-2 row-span-5 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div ref={addLeftRef} className="w-full min-h-[80px] bg-gray-200"></div>

        <div
          ref={addLeftRef}
          className="row-span-2 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div ref={addLeftRef} className="w-full min-h-[80px] bg-gray-200"></div>

        <div
          ref={addLeftRef}
          className="row-span-2 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div
          ref={addRightRef}
          className="col-span-2 row-span-5 w-full min-h-[80px] bg-gray-200"
        ></div>

        <div
          ref={addLeftRef}
          className="row-span-2 w-full min-h-[80px] bg-gray-200"
        ></div>
      </div>
    </div>
  );
};

export default Album;
