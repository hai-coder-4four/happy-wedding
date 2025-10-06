import Image from "next/image";
import React from "react";

const HEART_GRID = [
  // 7 columns per row, 7 rows
  // true = show image, false = empty cell
  [false, true, true, false, true, true, false],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [false, true, true, true, true, true, false],
  [false, false, true, true, true, false, false],
  [false, false, false, true, false, false, false],
];

const HeartImage = () => {
  return (
    <div>
      <h2 className="text-center text-xl mb-4 text-gray-500">
        Thân mời bạn tham gia bữa tiệc đánh dấu ngày chúng mình về chung một
        nhà!
      </h2>
      <div className="grid grid-cols-7 gap-2 px-4">
        {HEART_GRID.flat().map((showImage, idx) => (
          <div className="aspect-square w-full" key={idx}>
            {showImage && (
              <div className="relative size-full">
                <Image
                  src="/assets/images/wedding.png"
                  alt="wedding"
                  width={300}
                  height={300}
                  className="size-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartImage;
