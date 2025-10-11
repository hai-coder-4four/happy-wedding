"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks";

const Video = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollAnimation({
    headerRef,
    titleRef,
  });
  return (
    <div className="section px-2 rounded-lg">
      <div ref={headerRef} className="space-y-1 mb-4">
        <h2
          ref={titleRef}
          className="text-4xl text-center text-brown-light font-bold"
        >
          Video của chúng mình
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
      <HeroVideoDialog
        className="w-full rounded-xl border-4 border-turquoise overflow-hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/rIXhXaQ8tiM?si=Ov7l-682yLod_GBD"
        thumbnailSrc="/assets/images/wedding-1.jpg"
        thumbnailAlt="Wedding Video Thumbnail"
      />
    </div>
  );
};

export default Video;
