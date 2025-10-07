"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BANNER_ITEMS = [
  { id: 1, image: "/assets/images/wedding.png", text: "20" },
  { id: 2, image: "/assets/images/wedding.png", text: "10" },
  { id: 3, image: "/assets/images/wedding.png", text: "25" },
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
        // Nếu là item đầu hoặc cuối thì y khởi tạo là 200, còn lại là 100
        const initialY =
          index === 0 || index === BANNER_ITEMS.length - 1 ? 130 : 100;
        gsap.fromTo(
          el,
          { scale: 0.5, y: initialY, opacity: 0 },
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
        // Nếu là item đầu hoặc cuối thì y khởi tạo là 130, còn lại là 30
        const initialY =
          index === 0 || index === BANNER_ITEMS.length - 1 ? 130 : 30;
        gsap.fromTo(
          el,
          { y: initialY, opacity: 0 },
          {
            y: 10,
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
          className="relative aspect-[2/3] w-full border-[3px] border-[rgb(178,188,163)] rounded-md overflow-hidden cursor-pointer"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
          style={
            // Để item đầu và cuối tụt xuống dưới 100px
            idx === 0 || idx === BANNER_ITEMS.length - 1
              ? { marginTop: "30px" }
              : undefined
          }
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
              className="size-full object-cover transition-transform duration-300 hover:scale-110 rounded-[5px] overflow-hidden"
            />
          </div>
          <div
            ref={(el) => {
              textRefs.current[idx] = el;
            }}
            className="absolute bottom-0 -right-1 text-center text-white"
          >
            <span className="text-7xl drop-shadow-lg font-lora font-bold">
              {item.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
