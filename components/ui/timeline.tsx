"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import WordPullUp from "../magicui/word-pull-up";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  position: string
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black text-white  md:px-10"
      ref={containerRef}
    >
       <Image src='/success.png' width={100} height={100} alt="edu" className= " mx-auto flex" />

      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-10">
      {/* <WordPullUp
              className=" uppercase text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="DISTINGUISHED PROFESSIONAL JOURNEY"
            /> */}
      
      <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
      DISTINGUISHED PROFESSIONAL JOURNEY
            </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 pt-10 bg-black text-white">
        {data.map((item, index) => (
          <div key={index} className="relative flex w-full pt-10 md:pt-40 pb-5">
          {/* Content Box */}
          <div
            className={`absolute top-0 ${
              item.position === "left"
                ? "right-1/2 pr-10 text-right"
                : "left-1/2 pl-10 text-left"
            }`}
            style={{ width: "calc(50% - 20px)" }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">{item.title}</h3>
            <div>{item.content}</div>
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-4 w-4 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-full"></div>
        </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
