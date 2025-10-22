"use client";

import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import SectionHeader from "@/components/common/section-header";

const Video = () => {
  return (
    <div className="section px-2 rounded-lg">
      <SectionHeader title="Video của chúng mình" />
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
