import Image from "next/image";
import ImageTextMask from "./image-text-mask";
import Spinning from "./spinning";

const Heading = () => {
  return (
    <div className="py-4 relative w-full flex flex-col items-center justify-center">
      <span className="pointer-events-none text-center text-lg leading-none uppercase font-lora inline-block pt-2 pb-4">
        Welcome To Our Wedding
      </span>
      <div className="flex items-center justify-center gap-2">
        <span className="text-5xl font-bold text-brown-light tracking-widest">
          Hải
        </span>
        <Image
          src="/assets/images/nhan.png"
          alt="nhan"
          width={100}
          height={100}
          className="w-[100px] h-auto object-contain mx-auto"
        />
        <span className="text-5xl font-bold text-brown-light tracking-widest">
          Hải
        </span>
      </div>
      <Spinning />
      <ImageTextMask />
    </div>
  );
};

export default Heading;
