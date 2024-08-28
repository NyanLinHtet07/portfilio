"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  text: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, text }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radius = 40;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center bg-transparent">
      <svg width={radius * 2} height={radius * 2}>
        <circle
          stroke="lightgray"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#0AB6FF"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={isInView ? { strokeDashoffset } : {}} // Start animation only when in view
          transition={{
            
            duration: 1,
       
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-lg font-bold fill-slate-200"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
