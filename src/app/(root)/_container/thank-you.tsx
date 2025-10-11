import Image from "next/image";
import React from "react";

const ThankYou = () => {
  return (
    <div className="section bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-8">
        <div className="grid grid-rows-3 grid-cols-2 h-[800px] gap-4 overflow-hidden">
          <div className="col-span-2 row-span-2 rounded-t-full border-4 border-[rgb(178,188,163)] overflow-hidden">
            <Image
              src="/assets/images/wedding-10.jpg"
              alt="wedding"
              width={1000}
              height={100}
              className="size-full object-cover rounded-t-full"
            />
          </div>
          <div className="col-span-1 border-4 border-[rgb(178,188,163)]">
            <Image
              src="/assets/images/wedding-4.jpg"
              alt="wedding"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
          <div className="col-span-1 border-4 border-[rgb(178,188,163)]">
            <Image
              src="/assets/images/wedding-5.jpg"
              alt="wedding"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/images/thanks-you.png"
            alt="thank-you"
            width={300}
            height={300}
            className="w-[300px] h-auto object-contain"
          />
          <p className="text-center text-lg">
            for coming to our wedding and sharing this wonderful day with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
