"use client";

import Lottie from "lottie-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import GiftAnimation from "/public/assets/json/gift.json";
import Image from "next/image";

const Gift = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center bg-[url('/assets/images/wedding.png')] background-center py-10 backdrop-blur-md">
      <div className="w-full h-full absolute inset-0 bg-black/50"></div>
      <div className="z-10 max-w-[80%] mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4 z-10 text-white">
          Hộp mừng cưới
        </h2>
        <p className="text-center text-sm mb-4 z-10 text-white">
          Hãy chia sẻ hạnh phúc của mình với chúng mình bằng cách gửi hộp mừng
          cưới
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white w-full !max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">QR Ngân Hàng</DialogTitle>
            <DialogDescription className="text-center">
              Quét mã QR để chuyển tiền.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Image
              src="/assets/svg/qr-code.svg"
              alt="qr-code"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gift;
