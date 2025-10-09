"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GROOM_TESTIMONIALS = [
  {
    src: "/assets/images/re-1.jpg",
  },
  {
    src: "/assets/images/re-2.jpg",
  },
  {
    src: "/assets/images/re-3.jpg",
  },
  {
    src: "/assets/images/re-4.jpg",
  },
];

const BRIDE_TESTIMONIALS = [
  {
    src: "/assets/images/dau-1.jpg",
  },
  {
    src: "/assets/images/dau-2.jpg",
  },
  {
    src: "/assets/images/dau-3.jpg",
  },
  {
    src: "/assets/images/dau-4.jpg",
  },
];

// FacebookIcon component with scale animation
const AnimatedFacebookIcon = () => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!iconRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(iconRef.current, {
        scale: 1.1,
        duration: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }, iconRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={iconRef}
      className="relative size-5 rounded-full overflow-hidden cursor-pointer shadow-lg ring-2 ring-blue-400"
      style={{ willChange: "transform" }}
    >
      <Image
        src="/assets/images/facebook.png"
        alt="facebook"
        width={20}
        height={20}
        className="size-full object-cover"
      />
    </div>
  );
};

const Info = () => {
  const groomTextRef = useRef<HTMLDivElement | null>(null);
  const brideTextRef = useRef<HTMLDivElement | null>(null);
  const groomTitleRef = useRef<HTMLDivElement | null>(null);
  const brideTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animation for groom text (slide from left)
    if (groomTextRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          groomTextRef.current,
          {
            x: -300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: groomTextRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, groomTextRef);
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Animation for bride text (slide from right)
    if (brideTextRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          brideTextRef.current,
          {
            x: 300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: brideTextRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, brideTextRef);
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Animation for groom title (slide from bottom)
    if (groomTitleRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          groomTitleRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: groomTitleRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, groomTitleRef);
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Animation for bride title (slide from bottom)
    if (brideTitleRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          brideTitleRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: brideTitleRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, brideTitleRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="section w-full flex items-center justify-center">
      <div className="w-full space-y-2 rounded-lg overflow-hidden">
        <div>
          <h2 className="text-4xl text-center text-[#4a4a4a] font-bold">
            Giới thiệu
          </h2>
          <Image
            src="/assets/images/line-3.png"
            alt="line"
            width={100}
            height={100}
            className="w-[100px] h-auto object-contain mx-auto"
          />
        </div>
        <div className="space-y-2">
          <div className="relative w-full max-w-[432px] h-[620px] mx-auto">
            <div className="absolute inset-0">
              <div className="relative size-full">
                <Image
                  src="/assets/images/room-1.png"
                  alt="room-1"
                  width={500}
                  height={500}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[70%] space-y-6">
              <AnimatedTestimonials
                testimonials={GROOM_TESTIMONIALS}
                autoplay
              />
              <div className="text-center" ref={groomTextRef}>
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-2xl font-lobster tracking-widest text-turquoise">
                    Hải Trần
                  </h2>
                  <AnimatedFacebookIcon />
                </div>
                <div className="text-center font-titillium-web">
                  <p>25/02/1997</p>
                  <p className="mb-2">♈ Cung Bạch Dương</p>
                  <p className="text-gray-500 italic font-dancing-script">
                    Là một chàng trai đáng yêu, thân thiện, hòa đồng, và rất
                    trầm tính nhưng vẫn có thể đối mặt với những thử thách và
                    khó khăn trong cuộc sống.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[432px] h-[620px] mx-auto">
            <div className="absolute inset-0">
              <div className="relative size-full">
                <Image
                  src="/assets/images/room-2.png"
                  alt="room-1"
                  width={500}
                  height={500}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[70%] space-y-6">
              <AnimatedTestimonials
                testimonials={BRIDE_TESTIMONIALS}
                autoplay
              />
              <div className="text-center" ref={brideTextRef}>
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-2xl font-lobster tracking-widest text-turquoise">
                    Hải Trần
                  </h2>
                  <AnimatedFacebookIcon />
                </div>
                <div className="text-center font-titillium-web">
                  <p>25/02/1997</p>
                  <p className="mb-2">♈ Cung Bạch Dương</p>
                  <p className="text-gray-500 italic font-dancing-script">
                    Là một chàng trai đáng yêu, thân thiện, hòa đồng, và rất
                    trầm tính nhưng vẫn có thể đối mặt với những thử thách và
                    khó khăn trong cuộc sống.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
