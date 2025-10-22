import { Marquee } from "@/components/ui/marquee";

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:30s] font-bold text-md tracking-wider"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-8 whitespace-nowrap">
            Make by Hải Trần
          </span>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

export default Footer;
