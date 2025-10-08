"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Preface = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      const textLines = textRef.current?.querySelectorAll(".text-line");
      if (textLines && textLines.length > 0) {
        gsap.from(textLines, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full bg-white rounded-lg overflow-hidden p-4">
        <div ref={headerRef} className="py-4 flex justify-center">
          <div className="w-16 h-16 relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#8b7355]"
              fill="currentColor"
            >
              <path d="M50 20 L45 30 L35 32 L42 40 L40 50 L50 45 L60 50 L58 40 L65 32 L55 30 Z" />
              <path d="M30 35 L28 40 L23 41 L26 44 L25 49 L30 46 L35 49 L34 44 L37 41 L32 40 Z" />
              <path d="M70 35 L68 40 L63 41 L66 44 L65 49 L70 46 L75 49 L74 44 L77 41 L72 40 Z" />
              <path
                d="M25 55 L30 65 L20 70 L25 75 L20 85 L30 80 L35 90"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M75 55 L70 65 L80 70 L75 75 L80 85 L70 80 L65 90"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-1 mb-4">
          <h2 ref={titleRef} className="text-4xl text-center text-[#4a4a4a]">
            Lời Ngỏ
          </h2>
          <div className="required w-[150px] h-auto mx-auto">
            <Image
              src="/assets/images/line.png"
              alt="line"
              width={150}
              height={30}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="py-4 space-y-4 text-[#5a5a5a] leading-relaxed"
        >
          <p className="text-line text-center">
            Cảm ơn bạn đã dành tình cảm cho vợ chồng mình. ❤️
          </p>
          <p className="text-line text-center">
            Chúng mình biết các bạn đều đang rất bận, bận với công việc, với
            cuộc sống và với cả gia đình bạn.
          </p>
          <p className="text-line text-center">
            Nhưng thực sự rất tuyệt vời nếu như ngày Hạnh Phúc của chúng mình có
            thêm sự góp mặt của bạn và người thương. Vợ chồng mình rất hi vọng
            sẽ có mặt bạn trong ngày quan trọng này để chúng kiến chứng chặng
            đường hạnh phúc này cùng chúng mình. 🙏
          </p>
          <p className="text-line text-center font-medium">
            Một lần nữa, chân thành cảm ơn tất cả các bạn ❤️
          </p>
        </div>

        <div ref={imageRef}>
          <div className="relative overflow-hidden">
            <Image
              src="/assets/images/wedding.png"
              alt="Wedding Photo"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preface;
