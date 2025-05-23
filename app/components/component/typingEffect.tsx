"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  delayBetweenLines?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts, speed = 100, delayBetweenLines = 1000 }) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < texts.length) {
      if (charIndex < texts[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => {
            const newLines = [...prev];
            newLines[lineIndex] = (newLines[lineIndex] || '') + texts[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        if (lineIndex < texts.length - 1) {
          const timeout = setTimeout(() => {
            setLineIndex(lineIndex + 1);
            setCharIndex(0);
          }, delayBetweenLines);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [lineIndex, charIndex, texts, speed, delayBetweenLines]);

  return (
    <div className="text-lg text-white mt-4 drop-shadow-lg text-center">
      {displayedText.map((line, index) => (
        <div key={index} className="mb-1">
          {line} <span className="border-r-2 ml-1 border-slate-100 animate-pulse"></span>
        </div>
      ))}
      
    </div>
  );
};

export default TypingEffect;
