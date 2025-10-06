import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src="/assets/images/wedding.png"
          alt="wedding"
          width={300}
          height={300}
          className="size-full object-cover"
        />
        <div className="absolute bottom-3 left-0 right-0 text-center text-white">
          <span className="text-4xl font-bold">20</span>
        </div>
      </div>
      <div className="relative aspect-[2/3] w-full">
        <Image
          src="/assets/images/wedding.png"
          alt="wedding"
          width={300}
          height={300}
          className="size-full object-cover"
        />
        <div className="absolute bottom-3 left-0 right-0 text-center text-white">
          <span className="text-4xl font-bold">10</span>
        </div>
      </div>
      <div className="relative aspect-[2/3] w-full">
        <Image
          src="/assets/images/wedding.png"
          alt="wedding"
          width={300}
          height={300}
          className="size-full object-cover"
        />
        <div className="absolute bottom-3 left-0 right-0 text-center text-white">
          <span className="text-4xl font-bold">2025</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
