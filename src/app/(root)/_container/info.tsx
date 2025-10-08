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
    <div className="space-y-10">
      <div>
        <h2 className="text-4xl font-bold text-left text-green-500">Chú rể</h2>
        <AnimatedTestimonials testimonials={GROOM_TESTIMONIALS} />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Hải Trần</h2>
            <div className="size-6 rounded-full bg-blue-500">
              <Facebook className="size-6 text-white" />
            </div>
          </div>
          <span className="text-sm text-gray-500">25/02/1997</span>
          <span className="text-sm text-gray-500">Cung Bạch Dương</span>
          <p className="text-sm text-gray-500">Là một chàng trai đáng yêu</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-left text-green-500">Cô dâu</h2>
        <AnimatedTestimonials testimonials={BRIDE_TESTIMONIALS} />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Hải Trần</h2>
            <div className="size-6 rounded-full bg-blue-500">
              <Facebook className="size-6 text-white" />
            </div>
          </div>
          <span className="text-sm text-gray-500">25/02/1997</span>
          <span className="text-sm text-gray-500">Cung Bạch Dương</span>
          <p className="text-sm text-gray-500">Là cô dâu đáng yêu</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
