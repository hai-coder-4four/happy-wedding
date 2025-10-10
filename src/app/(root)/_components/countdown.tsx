"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = "2025-10-30";

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

  const timeUnits = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <Card className="border-none shadow-none rounded-b-none rounded-t-lg p-0 bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <CardContent className="p-4">
        <h3 className="mb-4 text-center text-xl font-medium">
          09:30 Thứ Hai, ngày 30/10/2025 <br /> (Tức ngày 01/10 Ất Tỵ)
        </h3>
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
