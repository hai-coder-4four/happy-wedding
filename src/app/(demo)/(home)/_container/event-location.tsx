"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/common/section-header";
import { useAppStore } from "@/stores/app-store";

gsap.registerPlugin(ScrollTrigger);

const EventLocation = () => {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { info } = useAppStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      eventRefs.current.forEach((eventRef, index) => {
        if (eventRef) {
          // Set initial state
          gsap.set(eventRef, {
            scale: 0.5,
            opacity: 0,
            y: 50,
          });

          // Animate on scroll
          gsap.to(eventRef, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: eventRef,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="section">
      <SectionHeader
        title="Địa điểm tiệc cưới"
        containerClassName="space-y-1 mb-8"
      />
      <div className="grid grid-cols-1 gap-10">
        {info?.eventLocations?.map((event, idx) => (
          <div
            key={idx}
            ref={(el) => {
              eventRefs.current[idx] = el;
            }}
            className="relative w-full h-[370px] pt-16 bg-[url('/assets/images/event-location.png')] background-center"
          >
            <div className="px-[62px] flex flex-col items-center justify-center text-center z-10">
              <h2 className="text-3xl text-center text-brown-light font-bold mb-4">
                {event.title}
              </h2>
              <p className="font-lora">
                {event.date}
                <br />
                <span className="font-bold">{event.lunarDate}</span>
                <br />
                <span>
                  Bắt đầu vào tiệc{" "}
                  <span className="font-bold">{event.time}</span>
                </span>
              </p>
              <p className="mt-2 font-lora">{event.address}</p>
            </div>
            <div className="absolute bottom-7 left-0 right-0 flex justify-center">
              <Image
                src="/assets/svg/wedding-dinner.svg"
                alt="wedding-dinner"
                width={300}
                height={300}
                className="w-[50px] h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLocation;
