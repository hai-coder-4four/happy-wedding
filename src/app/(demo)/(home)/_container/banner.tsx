"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../_components/heading";
import { useAppStore } from "@/stores/app-store";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { info } = useAppStore();

  const BANNER_ITEMS = useMemo(
    () => [
      {
        id: 1,
        image: "/assets/images/wedding-10.jpg",
        text: info.time.day.toString(),
      },
      {
        id: 2,
        image: "/assets/images/wedding-11.jpg",
        text: info.time.month.toString(),
      },
      {
        id: 3,
        image: "/assets/images/wedding-12.jpg",
        text: info.time.year.toString().slice(-2),
      },
    ],
    [info.time.day, info.time.month, info.time.year]
  );

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
        // If it's the first or last item, initial y is 130, otherwise it's 30
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
    <div className="px-2 pt-4 min-h-[800px] bg-[url('/assets/images/bg-banner.png')] background-center">
      <h1 className="text-center text-5xl text-brown-light font-bold mb-4">
        Thư mời
      </h1>
      <div
        ref={containerRef}
        className="grid grid-cols-3 gap-1 overflow-hidden"
      >
        {BANNER_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className="relative aspect-[2/3] w-full border-[3px] border-turquoise rounded-md overflow-hidden cursor-pointer"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            style={
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
                className="size-full object-cover transition-transform duration-300 hover:scale-125 rounded-[5px] overflow-hidden"
              />
            </div>
            <div
              ref={(el) => {
                textRefs.current[idx] = el;
              }}
              className="absolute bottom-0 -right-0.5 text-center text-white"
            >
              <span className="text-7xl drop-shadow-lg font-lora font-bold">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Heading />
    </div>
  );
};

export default Banner;
