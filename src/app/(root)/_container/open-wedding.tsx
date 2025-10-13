"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const OpenWedding = () => {
  // State to track if the invitation has been opened
  const [isOpen, setIsOpen] = useState(false);

  // State to manage which wedding image to display (closed or open)
  const [currentImage, setCurrentImage] = useState(
    "/assets/images/close-wedding.png"
  );

  // Refs for DOM elements to be animated
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handles the opening animation for the invitation
  const handleOpenInvitation = () => {
    if (isOpen) return;

    // Create a GSAP timeline for sequential animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate container height to 0, then set display to none after animation
        gsap.to(containerRef.current, {
          height: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
          },
        });
      },
    });

    // Animate button out (fade and shrink)
    tl.to(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut",
    })
      // Scale down the main image
      .to(
        mainImageRef.current,
        {
          scale: 0.8,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.1"
      )
      // Change the main image to the open wedding image
      .call(() => {
        setCurrentImage("/assets/images/open-wedding.png");
      })
      // Scale up main image with a bounce effect
      .to(mainImageRef.current, {
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      })
      // Animate the wedding invitation from bottom to top and fade it in
      .fromTo(
        invitationRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Set state to true to prevent repeated animations
    setIsOpen(true);
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden gap-4">
        {/* Open Invitation Button */}
        <div className="absolute left-0 right-0 bottom-14 flex items-center justify-center z-20">
          <Button
            ref={buttonRef}
            onClick={handleOpenInvitation}
            className="text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Mở Thiệp
          </Button>
        </div>

        {/* Main Wedding Image - changes source based on open state */}
        <div
          ref={mainImageRef}
          className="relative w-[300px] h-auto mx-auto z-10"
        >
          <Image
            src={currentImage}
            alt="wedding"
            width={500}
            height={500}
            className="size-full object-contain"
          />
        </div>

        {/* Wedding Invitation - hidden at start, revealed after open */}
        <div
          ref={invitationRef}
          className="absolute top-0 left-0 right-0 h-[195px] overflow-hidden opacity-0"
        >
          <div className="relative w-[240px] h-auto mx-auto">
            <Image
              src="/assets/images/wedding-invitation.jpg"
              alt="wedding-invitation"
              width={500}
              height={500}
              className="size-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenWedding;
