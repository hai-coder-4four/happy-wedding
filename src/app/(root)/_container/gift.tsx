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
    <div className="flex flex-col items-center justify-center shadow-lg rounded-lg">
      <div className="w-full h-[120px] flex flex-col items-center justify-center">
        <Lottie
          animationData={GiftAnimation}
          loop={true}
          className="size-full"
        />
      </div>
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <Button>Click me</Button>
        </DialogTrigger>
        <DialogContent className="bg-white w-full !max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Gift</DialogTitle>
            <DialogDescription className="text-center">
              This is a gift for you.
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
