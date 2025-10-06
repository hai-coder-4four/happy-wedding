"use client";

import Lottie from "lottie-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import GiftAnimation from "/public/assets/json/gift.json";
import Image from "next/image";

const Gift = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-[120px] flex flex-col items-center justify-center">
        <Lottie
          animationData={GiftAnimation}
          loop={true}
          className="size-full"
        />
      </div>
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <Button>
            <span>Mừng cưới</span>
            <Image
              src="/assets/gif/lucky-bag.gif"
              alt="lucky-bag"
              width={24}
              height={24}
              className="mb-2"
            />
          </Button>
        </DialogTrigger>
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
