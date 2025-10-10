import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import Image from "next/image";

const Video = () => {
  return (
    <div className="section px-2 rounded-lg">
      <div className="space-y-1 mb-4">
        <h2 className="text-4xl text-center text-[#4a4a4a] font-bold">
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
        className="w-full"
        animationStyle="from-center"
        videoSrc="https://youtu.be/rIXhXaQ8tiM?si=Ov7l-682yLod_GBD"
        thumbnailSrc="/assets/images/wedding-1.jpg"
        thumbnailAlt="Wedding Video Thumbnail"
      />
    </div>
  );
};

export default Video;
