import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  headerRef: React.RefObject<HTMLElement | null>;
  titleRef: React.RefObject<HTMLElement | null>;
  textRef?: React.RefObject<HTMLElement | null>;
  headerAnimation?: {
    opacity?: number;
    y?: number;
    duration?: number;
    ease?: string;
    delay?: number;
  };
  titleAnimation?: {
    opacity?: number;
    y?: number;
    duration?: number;
    ease?: string;
    delay?: number;
  };
  textAnimation?: {
    opacity?: number;
    y?: number;
    duration?: number;
    stagger?: number;
  };
  scrollTrigger?: {
    start?: string;
    end?: string;
    toggleActions?: string;
  };
}

export const useScrollAnimation = ({
  headerRef,
  titleRef,
  textRef,
  headerAnimation = {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power3.out",
  },
  titleAnimation = {
    opacity: 0,
    y: 30,
    duration: 2,
    delay: 0.3,
    ease: "power3.out",
  },
  textAnimation = {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
  },
  scrollTrigger = {
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
}: UseScrollAnimationOptions) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: headerAnimation.opacity,
          y: headerAnimation.y,
          duration: headerAnimation.duration,
          ease: headerAnimation.ease,
          scrollTrigger: {
            trigger: headerRef.current,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            toggleActions: scrollTrigger.toggleActions,
          },
        });
      }

      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: titleAnimation.opacity,
          y: titleAnimation.y,
          duration: titleAnimation.duration,
          delay: titleAnimation.delay,
          ease: titleAnimation.ease,
          scrollTrigger: {
            trigger: titleRef.current,
            start: scrollTrigger.start,
            end: scrollTrigger.end,
            toggleActions: scrollTrigger.toggleActions,
          },
        });
      }

      // Text animation (optional)
      if (textRef?.current) {
        const textLines = textRef.current.querySelectorAll(".text-line");
        if (textLines && textLines.length > 0) {
          gsap.from(textLines, {
            opacity: textAnimation.opacity,
            y: textAnimation.y,
            duration: textAnimation.duration,
            stagger: textAnimation.stagger,
            scrollTrigger: {
              trigger: textRef.current,
              start: scrollTrigger.start,
              end: scrollTrigger.end,
              toggleActions: scrollTrigger.toggleActions,
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, [
    headerRef,
    titleRef,
    textRef,
    headerAnimation,
    titleAnimation,
    textAnimation,
    scrollTrigger,
  ]);
};
