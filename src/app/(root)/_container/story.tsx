"use client";

import { useRef } from "react";
import { useEffect } from "react";
import HeartList from "../_components/heart-list";
import SectionHeader from "@/components/common/section-header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="section bg-[url('/assets/images/bg-section.png')] bg-cover bg-center bg-no-repeat !pt-0 flex items-center justify-center">
      <div className="w-full overflow-hidden py-2 px-4">
        <div className="flex justify-center">
          <SectionHeader
            title="Câu Chuyện Tình Yêu"
            topIcon={{
              src: "/assets/images/hold-hand.png",
              alt: "hold-hand",
              width: 100,
              height: 100,
            }}
          />
        </div>

        <div ref={textRef} className="py-4 space-y-4 leading-relaxed">
          <p className="text-line text-center">
            Chúng mình quen nhau khi cùng làm việc ở công ty. Thường xuyên phải
            tương tác với nhau, nên cứ thế phát sinh tình cảm khi nào chả hay.
            Các cụ hay bảo nên tránh các trường hợp con thầy, vợ bạn, gái cơ
            quan để yêu đương. Ấy thế mà chả hiểu sao, dây tơ hồng siết chặt quá
            nên là 2 đứa cứ thế va vào nhau. Yêu nhau nhùng nhằng thế mà giờ
            cũng hơn 3 năm, trải qua nhiều cảm xúc cùng nhau, vui có buồn có,
            nhưng tốt cái là chưa có chưa tay 😂. Mỗi đứa giờ 1 công việc, 1
            định hướng khác nhau, nhưng có cái yêu nhau thì vẫn còn cùng nhau
            🤣😍. Thế là 1 ngày đẹp trời, anh mua cái nhẫn, dẫn em đến quán bò
            bít tết, rồi á là quỳ xuống hỏi mình cưới nhau nha, em lia lịa gật
            đầu. Thế là giờ chúng mình có đám cưới, thế là chúng mình về chung 1
            nhà đó mí bạn :)) Chuyện tình yêu chúng mình đơn giản thế thôi đó.
            Cảm ơn bạn đã đọc đến tận đây nhé !! Cảm ơn bạn vì đã dành tình cảm
            cho Vợ Chồng mình !!! Yêu bạn 😜❤️
          </p>
        </div>

        <HeartList />
      </div>
    </div>
  );
};

export default Story;
