"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks";

gsap.registerPlugin(ScrollTrigger);

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

const peopleData = [
  {
    id: "groom",
    testimonials: [
      { src: "/assets/images/re-1.jpg" },
      { src: "/assets/images/re-2.jpg" },
      { src: "/assets/images/re-3.jpg" },
      { src: "/assets/images/re-4.jpg" },
    ],
    roomImg: "/assets/images/room-1.png",
    name: "Hải Trần",
    facebook: "#",
    bday: "25/02/1997",
    zodiac: "♈ Cung Bạch Dương",
    description:
      "Là một chàng trai đáng yêu, thân thiện, hòa đồng, và rất trầm tính nhưng vẫn có thể đối mặt với những thử thách và khó khăn trong cuộc sống.",
    refName: "groomTextRef",
  },
  {
    id: "bride",
    testimonials: [
      { src: "/assets/images/dau-1.jpg" },
      { src: "/assets/images/dau-2.jpg" },
      { src: "/assets/images/dau-3.jpg" },
      { src: "/assets/images/dau-4.jpg" },
    ],
    roomImg: "/assets/images/room-2.png",
    name: "Hải Trần",
    facebook: "#",
    bday: "25/02/1997",
    zodiac: "♈ Cung Bạch Dương",
    description:
      "Là một cô gái xinh đẹp, thân thiện, hòa đồng, và rất trầm tính nhưng vẫn có thể đối mặt với những thử thách và khó khăn trong cuộc sống.",
    refName: "brideTextRef",
  },
];

const Info = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useScrollAnimation({
    headerRef,
    titleRef,
  });

  useEffect(() => {
    // Map animation for groom (id=0, slide from left)
    if (refs[0].current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          refs[0].current,
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
              trigger: refs[0].current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, refs[0]);
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Map animation for bride (id=1, slide from right)
    if (refs[1].current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          refs[1].current,
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
              trigger: refs[1].current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, refs[1]);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="section w-full flex items-center justify-center">
      <div className="w-full space-y-2 rounded-lg overflow-hidden">
        <div ref={headerRef} className="space-y-1 mb-4">
          <h2
            ref={titleRef}
            className="text-4xl text-center text-brown-light font-bold"
          >
            Giới thiệu
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
        <div className="space-y-1">
          {peopleData.map((person, idx) => (
            <div
              key={person.id}
              className="relative w-full max-w-[432px] h-[620px] mx-auto"
            >
              <div className="absolute inset-0">
                <div className="relative size-full">
                  <Image
                    src={person.roomImg}
                    alt={`room-${idx + 1}`}
                    width={500}
                    height={500}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[70%] space-y-6">
                <AnimatedTestimonials
                  testimonials={person.testimonials}
                  autoplay
                />
                <div className="text-center" ref={refs[idx]}>
                  <div className="flex items-center justify-center gap-3">
                    <h2 className="text-3xl font-lobster tracking-widest text-turquoise">
                      {person.name}
                    </h2>
                    <AnimatedFacebookIcon />
                  </div>
                  <div className="text-center font-titillium-web">
                    <p>{person.bday}</p>
                    <p className="mb-2">{person.zodiac}</p>
                    <p className="italic font-dancing-script">
                      {person.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
