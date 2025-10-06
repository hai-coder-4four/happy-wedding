import { SpinningText } from "@/components/ui/spinning-text";
import React from "react";

const Spinning = () => {
  return (
    <div className="w-full flex-center overflow-hidden">
      <SpinningText className="w-full h-[220px] text-2xl">
        Hai Trần ❤️ Hải Trần ❤️
      </SpinningText>
    </div>
  );
};

export default Spinning;
