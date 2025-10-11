"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlayBlocked, setIsAutoPlayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setIsAutoPlayBlocked(false);
        } catch (error) {
          console.log("Auto-play was prevented:", error);
          setIsAutoPlayBlocked(true);
        }
      }
    };

    const timer = setTimeout(playAudio, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (isAutoPlayBlocked && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsAutoPlayBlocked(false);
          })
          .catch(() => {});
      }
    };
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isAutoPlayBlocked]);

  const toggleMusic = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Play failed:", error);
        }
      }
    }
  };

  return (
    <div className="fixed bottom-20 left-4 z-50 flex flex-col items-center justify-center">
      <div
        className={cn(
          "relative size-10 rounded-full bg-turquoise/40 flex items-center justify-center hover:scale-105 transition-all cursor-pointer",
          { "animate-pulse": isAutoPlayBlocked }
        )}
        onClick={toggleMusic}
        title={
          isAutoPlayBlocked
            ? "Click để phát nhạc"
            : isPlaying
            ? "Click để tắt nhạc"
            : "Click để phát nhạc"
        }
        style={{ zIndex: 30 }}
      >
        <div
          className={`relative size-6 transition-transform ${
            isPlaying ? "animate-slow-spin" : ""
          }`}
        >
          <Image
            src={
              isPlaying ? "/assets/svg/music.svg" : "/assets/svg/music-off.svg"
            }
            alt="music"
            width={24}
            height={24}
            className="size-full object-contain"
          />
        </div>
      </div>

      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/assets/audio/wedding-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;
