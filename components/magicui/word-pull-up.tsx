"use client";

import React, {useState, useEffect, useRef} from "react";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  const [isInView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1}
    );

    if(containerRef.current){
      observer.observe(containerRef.current);
    }

    return () => {
      if(containerRef.current){
        observer.unobserve(containerRef.current);
      }
    }
  }, []);

  return (
    <motion.h1
      ref={containerRef}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
