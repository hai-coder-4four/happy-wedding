import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const Video = () => {
  return (
    <div className="rounded-lg py-10">
      <h2 className="text-center text-2xl font-bold mb-4">
        Video của chúng mình
      </h2>
      <HeroVideoDialog
        className="w-full"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Dummy Video Thumbnail"
      />
    </div>
  );
};

export default Video;
