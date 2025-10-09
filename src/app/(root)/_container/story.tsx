"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HeartList from "../_components/heart-list";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      const textLines = textRef.current?.querySelectorAll(".text-line");
      if (textLines && textLines.length > 0) {
        gsap.from(textLines, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="section w-full flex items-center justify-center">
      <div className="w-full bg-white rounded-lg overflow-hidden p-2">
        <div ref={headerRef} className="flex justify-center mb-4">
          <div className="space-y-1">
            <div className="required w-[80px] h-auto mx-auto">
              <Image
                src="/assets/images/leaf.png"
                alt="leaf"
                width={100}
                height={100}
                className="size-full object-contain"
              />
            </div>
            <h2
              ref={titleRef}
              className="text-4xl text-center text-[#4a4a4a] font-bold"
            >
              Câu Chuyện Tình Yêu
            </h2>
          </div>
        </div>

        <div
          ref={textRef}
          className="py-4 space-y-4 text-[#5a5a5a] leading-relaxed"
        >
          <p className="text-line text-center">
            Chúng mình quen nhau khi cùng làm việc ở công ty. Thường xuyên phải
            tương tác với nhau, nên cứ thế phát sinh tình cảm khi nào chả hay.
            Các cụ hay bảo nên tránh các trường hợp con thầy, vợ bạn, gái cơ
            quan để yêu đương. Ấy thế mà chả hiểu sao, dây tơ hồng siết chặt quá
            nên là 2 đứa cứ thế va vào nhau. Yêu nhau nhùng nhằng thế mà giờ
            cũng hơn 3 năm, trải qua nhiều cảm xúc cùng nhau, vui có buồn có,
            nhưng tốt cái là chưa có chưa tay 😂. Mỗi đứa giờ 1 công việc, 1
            định hướng khác nhau, nhưng có cái yêu nhau thì vẫn còn cùng nhau
            🤣😍. Thế là 1 ngày đẹp trời, Thịnh mua cái nhẫn, dẫn nàng đến quán
            bò bít tết khứa khứa uống rượu vang, rồi á là quỳ xuống hỏi mình
            cưới nhau nha, Em lia lịa gật đầu. Thế là giờ chúng mình có đám
            cưới, thế là chúng mình về chung 1 nhà đó mí bạn :)) Chuyện tình yêu
            chúng mình đơn giản thế thôi đó. Cảm ơn bạn đã đọc đến tận đây nhé
            !! Cảm ơn bạn vì đã dành tình cảm cho Vợ Chồng mình !!! Yêu bạn 😜❤️
          </p>
        </div>

        <HeartList />
      </div>
    </div>
  );
};

export default Story;
