import Image from "next/image";
import React from "react";

const ThankYou = () => {
  return (
    <div className="section">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-8">
        <div className="grid grid-rows-3 grid-cols-2 h-[800px] gap-4 overflow-hidden">
          <div className="col-span-2 row-span-2 rounded-t-full overflow-hidden">
            <Image
              src="/assets/images/wedding-3.jpg"
              alt="wedding"
              width={1000}
              height={100}
              className="size-full object-cover rounded-t-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/assets/images/wedding-4.jpg"
              alt="wedding"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/assets/images/wedding-5.jpg"
              alt="wedding"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </div>
        <Image
          src="/assets/images/thank-you.png"
          alt="thank-you"
          width={300}
          height={300}
          className="w-[300px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ThankYou;
