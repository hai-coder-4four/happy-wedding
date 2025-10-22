"use client";

import React, { useEffect, useRef, useState } from "react";
import OpenWedding from "./open-wedding";
import Banner from "./banner";
import Story from "./story";
import Info from "./info";
import Preface from "./preface";
import Video from "./video";
import Album from "./album";
import Calendar from "./calendar";
import EventLocation from "./event-location";
import WeddingWishes from "./wedding-wishes";
import Gift from "./gift";
import Map from "./map";
import ThankYou from "./thank-you";
import Footer from "./footer";
import { useWeddingStore } from "@/stores/wedding-store";
import { useShallow } from "zustand/react/shallow";
import { gsap } from "gsap";

const SCENE_DURATION = 1.2;

type SceneMaskProps = {
  show: boolean;
  onComplete?: () => void;
};
const SceneMask = ({ show, onComplete }: SceneMaskProps) => {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!maskRef.current) return;

    if (show) {
      gsap.set(maskRef.current, { opacity: 0, pointerEvents: "auto" });
      gsap.to(maskRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      });
    } else {
      gsap.to(maskRef.current, {
        opacity: 0,
        duration: SCENE_DURATION,
        ease: "power2.out",
        pointerEvents: "none",
        onComplete,
      });
    }
  }, [show, onComplete]);

  return (
    <div
      ref={maskRef}
      className="fixed z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-[#f6d365]/90 to-[#fdc097]/90 pointer-events-none select-none"
      style={{ opacity: show ? 1 : 0, transition: "opacity 0.2s" }}
    />
  );
};

const MainContent = () => (
  <>
    <Banner />
    <Story />
    <Info />
    <Preface />
    <Video />
    <Album />
    <Calendar year={2025} month={12} highlightDates={[13]} />
    <EventLocation />
    <WeddingWishes />
    <Gift />
    <Map />
    <ThankYou />
    <Footer />
  </>
);

const HomeContainer = () => {
  const { isWelcome } = useWeddingStore(
    useShallow((state) => ({ isWelcome: state.isWelcome }))
  );

  const [showMask, setShowMask] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isWelcome) return;

    setShowMask(true);
    setShowContent(false);

    const timerShowContent = setTimeout(() => {
      setShowContent(true);

      const timerHideMask = setTimeout(
        () => setShowMask(false),
        SCENE_DURATION * 700
      );
      return () => clearTimeout(timerHideMask);
    }, SCENE_DURATION * 800);

    return () => clearTimeout(timerShowContent);
  }, [isWelcome]);

  return (
    <div className="size-full relative">
      <OpenWedding />
      <SceneMask show={showMask} />
      {showContent && <MainContent />}
    </div>
  );
};

export default HomeContainer;
