"use client";

import { Calendar as CalendarIcon, Heart } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Card, CardContent } from "@/components/ui/card";
import Countdown from "../_components/countdown";
import { DateIcon } from "@/assets/icons";

const Calendar = () => {
  const [selectedDates] = useState<number[]>([5]);

  // Vietnamese day names
  const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

  // April 2025 calendar data - starting on Tuesday (Thứ 3)
  const daysInMonth = 30;
  const firstDayOfWeek = 1; // Tuesday (0 = Monday, 6 = Sunday)

  // Only 5 rows (5*7 = 35 cells)
  const totalRows = 5;
  const totalCells = totalRows * 7;

  // Generate calendar grid
  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add all days of the month, but only up to the number of cells in 5 rows
  for (
    let day = 1;
    day <= daysInMonth && calendarDays.length < totalCells;
    day++
  ) {
    calendarDays.push(day);
  }

  // Add days from next month to fill the grid (if needed)
  for (let day = 1; calendarDays.length < totalCells; day++) {
    calendarDays.push(day);
  }

  // GSAP refs
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayHeaderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dayCellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heartZoomRef = useRef<HTMLDivElement>(null);
  const heartPulseRef = useRef<HTMLDivElement>(null);
  const heartBurstRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const bottomHeartRef = useRef<HTMLDivElement>(null);

  // Animate on mount
  useEffect(() => {
    // Header fade in
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
    // Title scale in
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8 },
        { scale: 1, delay: 0.2, duration: 0.6, ease: "power2.out" }
      );
    }
    // Month fade in
    if (monthRef.current) {
      gsap.fromTo(
        monthRef.current,
        { opacity: 0 },
        { opacity: 1, delay: 0.6, duration: 0.5 }
      );
    }
    // Day headers
    dayHeaderRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, delay: 0.1 * i + 0.8, duration: 0.4 }
        );
      }
    });
    // Calendar days
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
          }
        );
      }
    });
    // Heart zoom animation (dramatic zoom)
    if (heartZoomRef.current) {
      gsap.fromTo(
        heartZoomRef.current,
        { scale: 0, rotate: 0 },
        {
          scale: 1.8,
          rotate: -10,
          delay: 1.5,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
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
        }
      );
    }
    // Heart pulse animation (continuous)
    if (heartPulseRef.current) {
      gsap.to(heartPulseRef.current, {
        scale: 1.15,
        delay: 2.7,
        duration: 0.75,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
    // Heart burst effect
    if (heartBurstRef.current) {
      gsap.fromTo(
        heartBurstRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 2.5,
          opacity: 0.3,
          delay: 1.8,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(heartBurstRef.current, {
              scale: 0,
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        }
      );
    }
    // Bottom element
    if (bottomRef.current) {
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, delay: 2.5, duration: 0.8 }
      );
    }
    // SVG path draw
    if (svgPathRef.current) {
      gsap.fromTo(
        svgPathRef.current,
        { strokeDasharray: 100, strokeDashoffset: 100 },
        {
          strokeDasharray: 100,
          strokeDashoffset: 0,
          delay: 3,
          duration: 1.5,
          ease: "power2.inOut",
        }
      );
    }
    // Bottom heart pop
    if (bottomHeartRef.current) {
      gsap.fromTo(
        bottomHeartRef.current,
        { scale: 0 },
        {
          scale: 1,
          delay: 4,
          duration: 0.5,
          ease: "back.out(2)",
        }
      );
    }
  }, []);

  // For hover scale on day cells
  const handleDayMouseEnter = (el: HTMLDivElement | null) => {
    if (el) {
      gsap.to(el, { scale: 1.1, duration: 0.2 });
    }
  };
  const handleDayMouseLeave = (el: HTMLDivElement | null) => {
    if (el) {
      gsap.to(el, { scale: 1, duration: 0.2 });
    }
  };

  return (
    <div className="w-full bg-white py-4">
      <Countdown />
      <Card className="border-none shadow-none p-0">
        <CardContent className="p-0">
          {/* Header with decorative title and heart */}
          <div className="relative mb-2">
            <div
              ref={headerRef}
              className="flex flex-col items-center text-center"
            >
              <h1 ref={titleRef} className="text-3xl text-gray-700">
                Lưu ngày này nhé !
              </h1>
              <DateIcon className="size-24" />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border-t border-gray-300 pt-4">
            {/* Day headers */}
            <div className="mb-3 grid grid-cols-7 gap-2">
              {dayNames.map((day, index) => (
                <div
                  key={day}
                  ref={(el) => {
                    dayHeaderRefs.current[index] = el;
                  }}
                  className="py-1 text-center text-sm font-medium text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const isCurrentMonth =
                  index >= firstDayOfWeek &&
                  index < firstDayOfWeek + daysInMonth;
                const isHighlighted =
                  isCurrentMonth &&
                  day !== null &&
                  selectedDates.includes(day as number);

                // For refs
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      dayCellRefs.current[index] = el;
                    }}
                    className="relative flex aspect-square items-center justify-center"
                  >
                    {day && (
                      <div
                        ref={isHighlighted && day === 5 ? undefined : undefined}
                        onMouseEnter={(e) =>
                          handleDayMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                          handleDayMouseLeave(e.currentTarget)
                        }
                        className={`relative flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ${
                          !isCurrentMonth
                            ? "text-gray-300"
                            : isHighlighted
                            ? "text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        } `}
                        style={
                          isHighlighted && day === 5 ? { zIndex: 2 } : undefined
                        }
                      >
                        {isHighlighted && day === 5 && (
                          <>
                            {/* Heart background with dramatic zoom animation */}
                            <div
                              ref={heartZoomRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 1 }}
                            >
                              <Heart className="h-8 w-8 fill-rose-300 text-rose-300" />
                            </div>

                            {/* More dramatic continuous pulse animation */}
                            <div
                              ref={heartPulseRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 2 }}
                            >
                              <Heart className="h-8 w-8 fill-rose-300 text-rose-300" />
                            </div>

                            {/* Additional dramatic zoom burst effect */}
                            <div
                              ref={heartBurstRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 0 }}
                            >
                              <Heart className="h-10 w-10 fill-rose-200 text-rose-200" />
                            </div>
                          </>
                        )}

                        <span className="relative z-10">{day}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decorative bottom element */}
          <div ref={bottomRef} className="mt-6 flex justify-end pr-4">
            <div className="relative">
              <svg
                width="80"
                height="20"
                viewBox="0 0 80 20"
                className="text-rose-300"
              >
                <path
                  ref={svgPathRef}
                  d="M5 15 Q 25 5, 45 10 T 75 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div ref={bottomHeartRef} className="absolute -top-1 -right-1">
                <Heart className="h-3 w-3 fill-rose-300 text-rose-300" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
