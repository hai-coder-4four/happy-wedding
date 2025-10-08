import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const Video = () => {
  return (
    <div className="section rounded-lg">
      <h2 className="text-center text-4xl text-turquoise font-bold mb-4">
        Video của chúng mình
      </h2>
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
