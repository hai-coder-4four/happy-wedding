import Image from "next/image";
import React from "react";

const eventLocations = [
  {
    title: "Tiệc Nhà Trai",
    date: "Thứ Hai, ngày 30 tháng 10 năm 2025",
    lunarDate: "(Tức ngày 01 tháng 11 Ất Tỵ)",
    time: "11:00",
    address: "Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Đà Nẵng",
  },
  {
    title: "Tiệc Nhà Gái",
    date: "Thứ Ba, ngày 01 tháng 11 năm 2025",
    lunarDate: "(Tức ngày 02 tháng 11 Ất Tỵ)",
    time: "11:00",
    address: "Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Huế",
  },
];

const EventLocation = () => {
  return (
    <div className="section">
      <div className="space-y-1 mb-8">
        <h2 className="text-4xl text-center text-[#4a4a4a] font-bold">
          Địa điểm tiệc cưới
        </h2>
        <div className="required w-[150px] h-auto mx-auto">
          <Image
            src="/assets/images/line-4.png"
            alt="line"
            width={150}
            height={30}
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {eventLocations.map((event, idx) => (
          <div
            key={idx}
            className="relative w-full h-[370px] pt-16 bg-[url('/assets/images/event-location.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="px-[62px] flex flex-col items-center justify-center text-center z-10">
              <h2 className="text-3xl text-center text-[#4a4a4a] font-bold mb-4">
                {event.title}
              </h2>
              <p className="font-lora">
                {event.date}
                <br />
                <span className="font-bold">{event.lunarDate}</span>
                <br />
                <span>
                  Bắt đầu vào tiệc{" "}
                  <span className="font-bold">{event.time}</span>
                </span>
              </p>
              <p className="mt-2 font-lora">{event.address}</p>
            </div>
            <div className="absolute bottom-7 left-0 right-0 flex justify-center">
              <Image
                src="/assets/svg/wedding-dinner.svg"
                alt="wedding-dinner"
                width={300}
                height={300}
                className="w-[50px] h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLocation;
