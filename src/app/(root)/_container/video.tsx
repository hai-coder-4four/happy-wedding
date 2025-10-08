import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const Video = () => {
  return (
    <div className="section rounded-lg">
      <h2 className="text-center text-4xl font-bold mb-4">
        Video của chúng mình
      </h2>
      <HeroVideoDialog
        className="w-full"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/assets/images/wedding.png"
        thumbnailAlt="Wedding Video Thumbnail"
      />
    </div>
  );
};

export default Video;
