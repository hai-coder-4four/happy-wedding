"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useWeddingStore } from "@/stores/wedding-store";
import { useShallow } from "zustand/react/shallow";
import Lottie from "lottie-react";
import HandTapAnimation from "/public/assets/json/hand-tap.json";

const OpenWedding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(
    "/assets/images/close-wedding-1.png"
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const handTapRef = useRef<HTMLDivElement>(null);

  const { setIsWelcome } = useWeddingStore(
    useShallow((state) => ({
      setIsWelcome: state.setIsWelcome,
    }))
  );

  useEffect(() => {
    if (noteRef.current && !isOpen) {
      const zoomAnimation = gsap.to(noteRef.current, {
        scale: 1.25,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      return () => {
        zoomAnimation.kill();
      };
    }
  }, [isOpen]);

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
            setIsWelcome(true);
          },
        });
      },
    });

    // Animate button out (fade and shrink)
    tl.to(noteRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut",
    })
      .to(handTapRef.current, {
        opacity: 0,
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
      className="h-dvh w-full bg- border-4 border-turquoise overflow-hidden"
    >
      <div className="size-full flex flex-col items-center justify-center gap-5 bg-[url('/assets/images/wedding-poster.png')] background-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/assets/svg/wedding-couple.svg"
            alt="wedding-couple"
            width={300}
            height={300}
            className="size-24 object-contain"
          />
          <h2 className="text-4xl text-green-dark font-bold">
            Hải Trần ❤️ Hải Trần
          </h2>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden gap-1">
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
            <div className="relative w-[250px] h-auto mx-auto">
              <Image
                src="/assets/images/wedding-invitation.jpg"
                alt="wedding-invitation"
                width={500}
                height={500}
                className="size-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Click Animation */}
          <div ref={handTapRef}>
            <Lottie
              animationData={HandTapAnimation}
              loop={true}
              className="absolute top-[55%] left-[56%] -translate-x-1/2 -translate-y-1/2 z-20 size-28"
            />
          </div>

          {/* Overlay */}
          <div
            onClick={handleOpenInvitation}
            className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[300px] h-[208px] opacity-0"
          ></div>

          <div className="flex items-center justify-center z-20">
            <div ref={noteRef}>Nhấn vào đây để mở thiệp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenWedding;
