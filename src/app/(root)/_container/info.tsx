"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Facebook } from "lucide-react";

const GROOM_TESTIMONIALS = [
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BRIDE_TESTIMONIALS = [
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Info = () => {
  return (
    <div className="section w-full flex items-center justify-center">
      <div className="space-y-10 px-4 w-full bg-white rounded-lg overflow-hidden">
        <div className="w-full space-y-6">
          <h2 className="text-4xl font-lobster text-left text-turquoise">
            Chú rể
          </h2>
          <AnimatedTestimonials testimonials={GROOM_TESTIMONIALS} autoplay />
          <div className="text-left">
            <div className="flex items-center justify-start gap-2">
              <h2 className="text-2xl font-bold">Hải Trần</h2>
              <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Facebook className="size-4 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500">25/02/1997</p>
            <p className="text-sm text-gray-500">Cung Bạch Dương</p>
            <p className="text-sm text-gray-500">
              Là một chàng trai đáng yêu, thân thiện, hòa đồng, và rất trầm tính
              nhưng vẫn có thể đối mặt với những thử thách và khó khăn trong
              cuộc sống.
            </p>
          </div>
        </div>
        <div className="w-full space-y-6">
          <h2 className="text-4xl font-lobster text-right text-turquoise">
            Cô dâu
          </h2>
          <AnimatedTestimonials testimonials={BRIDE_TESTIMONIALS} autoplay />
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center">
                <Facebook className="size-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Hải Trần</h2>
            </div>
            <p className="text-sm text-gray-500">25/02/1997</p>
            <p className="text-sm text-gray-500">Cung Bạch Dương</p>
            <p className="text-sm text-gray-500">
              Là cô dâu đáng yêu, thân thiện, hòa đồng, và rất trầm tính nhưng
              vẫn có thể đối mặt với những thử thách và khó khăn trong cuộc
              sống.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
