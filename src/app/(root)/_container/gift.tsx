"use client";

import Lottie from "lottie-react";
import React, { useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import GiftAnimation from "/public/assets/json/gift.json";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks";

const bankAccounts = [
  {
    bankName: "VietcomBank",
    accountNumber: "0348843383",
    accountHolder: "Nguyễn Văn A",
    qrCode: "/assets/svg/qr-code.svg",
  },
  {
    bankName: "VietinBank",
    accountNumber: "12308123123123",
    accountHolder: "Nguyễn Thị B",
    qrCode: "/assets/svg/qr-code.svg",
  },
];

const Gift = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useScrollAnimation({
    headerRef,
    titleRef,
    textRef,
  });

  return (
    <div className="section">
      <div className="relative px-2 flex flex-col items-center justify-center bg-[url('/assets/images/wedding-13.jpg')] background-center py-10 backdrop-blur-md border-4 border-turquoise rounded-lg overflow-hidden">
        <div className="w-full h-full absolute inset-0 bg-black/70"></div>
        <div ref={headerRef} className="z-10 max-w-[80%] mx-auto">
          <h2
            ref={titleRef}
            className="text-center text-4xl font-bold mb-4 z-10 text-white"
          >
            Hộp mừng cưới
          </h2>
          <p ref={textRef} className="text-center text-lg mb-4 z-10 text-white">
            Hãy chia sẻ hạnh phúc với chúng mình bằng cách gửi hộp mừng cưới
          </p>
        </div>
        <div
          className="w-full h-[150px] flex flex-col items-center justify-center z-10 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Lottie
            animationData={GiftAnimation}
            loop={true}
            className="size-full"
          />
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full !max-w-md bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat">
          <DialogHeader className="gap-0">
            <DialogTitle className="text-center text-2xl text-brown-light font-bold">
              QR Ngân Hàng
            </DialogTitle>
            <DialogDescription className="text-center hidden">
              Quét mã QR để chuyển tiền.
            </DialogDescription>
            <Image
              src="/assets/gif/lucky-bag.gif"
              alt="lucky-bag"
              width={100}
              height={100}
              className="w-[80px] h-auto object-contain mx-auto"
            />
          </DialogHeader>
          <div className="grid grid-cols-2 gap-2">
            {bankAccounts.map((bank) => (
              <div
                key={bank.accountNumber}
                className="p-2 rounded-lg border-2 border-turquoise space-y-2"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={bank.qrCode}
                    alt="qr-code"
                    width={500}
                    height={500}
                    className="size-full object-cover"
                  />
                </div>
                <div className="font-lora text-center text-sm">
                  <div className="flex flex-col items-center">
                    <p className="font-bold">{bank.bankName}</p>
                    <p>{bank.accountNumber}</p>
                  </div>
                  <p>{bank.accountHolder}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gift;
