import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCalendarAnimations = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dayHeaderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dayCellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heartZoomRef = useRef<HTMLDivElement>(null);
  const heartPulseRef = useRef<HTMLDivElement>(null);
  const heartBurstRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const bottomHeartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { scale: 0.8 },
          {
            scale: 1,
            delay: 0.2,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Day headers animation
      dayHeaderRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              delay: 0.1 * i + 0.8,
              duration: 0.4,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Calendar days animation
      dayCellRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              delay: 0.05 * i + 1,
              duration: 0.4,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: el,
                start: "top 100%",
                end: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Heart animations
      if (heartZoomRef.current) {
        gsap.fromTo(
          heartZoomRef.current,
          { scale: 0, rotate: 0 },
          {
            scale: 1.8,
            rotate: -10,
            duration: 0.4,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heartZoomRef.current,
              start: "top 100%",
              end: "top 70%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.to(heartZoomRef.current, {
                  scale: 1.1,
                  rotate: 10,
                  duration: 0.3,
                  ease: "power2.inOut",
                  onComplete: () => {
                    gsap.to(heartZoomRef.current, {
                      scale: 1,
                      rotate: 0,
                      duration: 0.3,
                      ease: "power2.inOut",
                    });
                  },
                });
              },
            },
          }
        );
      }

      if (heartPulseRef.current) {
        gsap.to(heartPulseRef.current, {
          scale: 1.15,
          duration: 0.75,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heartPulseRef.current,
            start: "top 100%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (heartBurstRef.current) {
        gsap.fromTo(
          heartBurstRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 2.5,
            opacity: 0.3,
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heartBurstRef.current,
              start: "top 100%",
              end: "top 70%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.to(heartBurstRef.current, {
                  scale: 0,
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              },
            },
          }
        );
      }

      // Bottom elements animation
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: bottomRef.current,
              start: "top 100%",
              end: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (svgPathRef.current) {
        gsap.fromTo(
          svgPathRef.current,
          { strokeDasharray: 100, strokeDashoffset: 100 },
          {
            strokeDasharray: 100,
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: svgPathRef.current,
              start: "top 100%",
              end: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (bottomHeartRef.current) {
        gsap.fromTo(
          bottomHeartRef.current,
          { scale: 0 },
          {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: bottomHeartRef.current,
              start: "top 100%",
              end: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return {
    headerRef,
    titleRef,
    dayHeaderRefs,
    dayCellRefs,
    heartZoomRef,
    heartPulseRef,
    heartBurstRef,
    bottomRef,
    svgPathRef,
    bottomHeartRef,
  };
};
