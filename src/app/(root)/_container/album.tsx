"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
              duration: 1.8,
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
              duration: 1.8,
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
    <div ref={containerRef} className="section px-2 overflow-hidden">
      <div className="space-y-1 mb-4">
        <h2 className="text-4xl text-center text-[#4a4a4a] font-bold">
          Album hình cưới
        </h2>
        <div className="required w-[150px] h-auto mx-auto">
          <Image
            src="/assets/images/line-4.png"
            alt="line"
            width={150}
            height={30}
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-11 gap-1 h-[900px]">
        <div
          ref={addLeftRef}
          id="wedding-1"
          className="row-start-2 row-span-2 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-4.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addRightRef}
          id="wedding-2"
          className="col-start-2 col-span-2 row-span-2 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-2.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addRightRef}
          id="wedding-3"
          className="col-span-2 row-span-5 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-10.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addLeftRef}
          id="wedding-4"
          className="w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-1.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addLeftRef}
          id="wedding-5"
          className="row-span-2 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-5.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addLeftRef}
          id="wedding-6"
          className="w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-1.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addLeftRef}
          id="wedding-7"
          className="row-span-2 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-7.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addRightRef}
          id="wedding-8"
          className="col-span-2 row-span-5 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-8.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>

        <div
          ref={addLeftRef}
          id="wedding-9"
          className="row-span-2 w-full rounded-md overflow-hidden"
        >
          <Image
            src="/assets/images/wedding-11.jpg"
            alt="wedding"
            width={300}
            height={300}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Album;
