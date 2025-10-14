"use client";

import React, { useRef, ReactNode } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks";

interface SectionHeaderProps {
  title: string;
  lineImage?: string;
  lineWidth?: number;
  lineHeight?: number;
  titleClassName?: string;
  containerClassName?: string;
  lineClassName?: string;
  topIcon?:
    | {
        src: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
      }
    | ReactNode;
}

const SectionHeader = ({
  title,
  lineImage = "/assets/images/line-4.png",
  lineWidth = 150,
  lineHeight = 30,
  titleClassName = "text-4xl text-center text-brown-light font-bold",
  containerClassName = "space-y-1 mb-4",
  lineClassName = "w-[150px] h-auto mx-auto",
  topIcon,
}: SectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollAnimation({
    headerRef,
    titleRef,
  });

  return (
    <div ref={headerRef} className={containerClassName}>
      {topIcon &&
        (React.isValidElement(topIcon) ? (
          topIcon
        ) : (
          <div className="w-[80px] h-auto mx-auto">
            <Image
              src={(topIcon as { src: string }).src}
              alt={(topIcon as { alt: string }).alt}
              width={(topIcon as { width: number }).width}
              height={(topIcon as { height: number }).height}
              className={`size-full object-contain ${
                (topIcon as { className?: string }).className || ""
              }`}
            />
          </div>
        ))}
      <h2 ref={titleRef} className={titleClassName}>
        {title}
      </h2>
      <div className={lineClassName}>
        <Image
          src={lineImage}
          alt="decorative line"
          width={lineWidth}
          height={lineHeight}
          className="size-full object-contain"
        />
      </div>
    </div>
  );
};

export default SectionHeader;
