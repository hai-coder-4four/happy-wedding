import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  headerRef: React.RefObject<HTMLElement | null>;
  titleRef: React.RefObject<HTMLElement | null>;
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
  scrollTrigger?: {
    start?: string;
    end?: string;
    toggleActions?: string;
  };
}

export const useScrollAnimation = ({
  headerRef,
  titleRef,
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
    });

    return () => ctx.revert();
  }, [headerRef, titleRef, headerAnimation, titleAnimation, scrollTrigger]);
};
