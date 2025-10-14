"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks";
import SectionHeader from "@/components/common/section-header";

gsap.registerPlugin(ScrollTrigger);

const Preface = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    headerRef,
    titleRef,
  });

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div className="section flex items-center justify-center">
      <div className="w-full bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden p-4">
        <SectionHeader
          title="Lời Ngỏ"
          topIcon={{
            src: "/assets/images/leaf.png",
            alt: "leaf",
            width: 100,
            height: 100,
          }}
        />

        <div
          ref={textRef}
          className="py-4 space-y-4 leading-relaxed text-center"
        >
          <p>Cảm ơn bạn đã dành tình cảm cho vợ chồng mình. ❤️</p>
          <p>
            Chúng mình biết các bạn đều đang rất bận, bận với công việc, với
            cuộc sống và với cả gia đình bạn.
          </p>
          <p>
            Nhưng thực sự rất tuyệt vời nếu như ngày Hạnh Phúc của chúng mình có
            thêm sự góp mặt của bạn và người thương. Vợ chồng mình rất hi vọng
            sẽ có mặt bạn trong ngày quan trọng này để chúng kiến chứng chặng
            đường hạnh phúc này cùng chúng mình. 🙏
          </p>
          <p>Một lần nữa, chân thành cảm ơn tất cả các bạn ❤️</p>
        </div>

        <div ref={imageRef}>
          <div className="relative overflow-hidden">
            <Image
              src="/assets/images/wedding-11.jpg"
              alt="Wedding Photo"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preface;
