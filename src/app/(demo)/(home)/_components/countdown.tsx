"use client";

import React, { useState, useEffect, useMemo } from "react";

import { Card, CardContent } from "@/components/ui/card";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = "2025-12-13";

const EVENT_TIME_INFO =
  "09:30 Thứ Hai, ngày 13/12/2025 <br /> (Tức ngày 14/12 Ất Tỵ)";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(TARGET_DATE).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = useMemo(
    () => [
      { label: "Ngày", value: timeLeft.days },
      { label: "Giờ", value: timeLeft.hours },
      { label: "Phút", value: timeLeft.minutes },
      { label: "Giây", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <Card className="border-none shadow-none p-0 bg-transparent overflow-hidden">
      <CardContent className="p-4">
        <h3
          className="mb-4 text-center text-xl font-medium"
          dangerouslySetInnerHTML={{ __html: EVENT_TIME_INFO }}
        ></h3>
        <div className="grid grid-cols-4 gap-4">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="size-14 flex-center rounded-full bg-turquoise">
                <div className="text-2xl font-bold text-white">
                  {unit.value}
                </div>
              </div>
              <span className="mt-2 text-sm font-medium">{unit.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Countdown;
