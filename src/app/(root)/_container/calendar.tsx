"use client";

import { Heart } from "lucide-react";
import React from "react";
import { gsap } from "gsap";

import { Card, CardContent } from "@/components/ui/card";
import Countdown from "../_components/countdown";
import { DateIcon } from "@/assets/icons";
import { generateCalendarGrid, dayNames } from "@/utils/calendar";
import { useCalendarAnimations } from "@/hooks/useCalendarAnimations";

// Interface cho props của Calendar component
interface CalendarProps {
  year?: number;
  month?: number; // 1-12
  highlightDates?: number[]; // Các ngày cần highlight
  className?: string;
}

const Calendar = ({
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  highlightDates = [5],
  className = "",
}: CalendarProps) => {
  // Generate calendar data
  const { calendarDays, daysInMonth, firstDayOfWeek } = generateCalendarGrid(
    year,
    month
  );

  // Get animation refs
  const {
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
  } = useCalendarAnimations();

  // Helper functions
  const handleDayMouseEnter = (el: HTMLDivElement | null) => {
    if (el) gsap.to(el, { scale: 1.1, duration: 0.2 });
  };

  const handleDayMouseLeave = (el: HTMLDivElement | null) => {
    if (el) gsap.to(el, { scale: 1, duration: 0.2 });
  };

  return (
    <div
      className={`section px-4 rounded-lg overflow-hidden bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat ${className}`}
    >
      <Countdown />
      <Card className="px-4 border-none shadow-none p-0 bg-transparent overflow-hidden">
        <CardContent className="p-0">
          {/* Header with decorative title and heart */}
          <div className="relative">
            <div
              ref={headerRef}
              className="flex flex-col items-center text-center"
            >
              <h2
                ref={titleRef}
                className="text-3xl font-bold text-brown-light"
              >
                Save the date
              </h2>
              <DateIcon className="size-24 text-turquoise" />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border-t border-turquoise/50 pt-4">
            {/* Day headers */}
            <div className="mb-3 grid grid-cols-7">
              {dayNames.map((day, index) => (
                <div
                  key={day}
                  ref={(el) => {
                    dayHeaderRefs.current[index] = el;
                  }}
                  className="py-1 text-center text-sm font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => {
                const isCurrentMonth =
                  index >= firstDayOfWeek &&
                  index < firstDayOfWeek + daysInMonth;
                const isHighlighted =
                  isCurrentMonth &&
                  day !== null &&
                  highlightDates.includes(day as number);

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
                        style={isHighlighted ? { zIndex: 2 } : undefined}
                      >
                        {isHighlighted && (
                          <>
                            {/* Heart background with dramatic zoom animation */}
                            <div
                              ref={heartZoomRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 1 }}
                            >
                              <Heart className="h-8 w-8 text-turquoise/10 fill-turquoise" />
                            </div>

                            {/* More dramatic continuous pulse animation */}
                            <div
                              ref={heartPulseRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 2 }}
                            >
                              <Heart className="h-8 w-8 text-turquoise/10 fill-turquoise" />
                            </div>

                            {/* Additional dramatic zoom burst effect */}
                            <div
                              ref={heartBurstRef}
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ zIndex: 0 }}
                            >
                              <Heart className="h-10 w-10 text-turquoise/10 fill-turquoise" />
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
                className="text-turquoise"
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
                <Heart className="h-3 w-3 text-turquoise/10 fill-turquoise" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
