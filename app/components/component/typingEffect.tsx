"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    texts: string[];
    speed?: number;
    delayBetweenLines?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts, speed = 100, delayBetweenLines = 1000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < texts.length) {
            if (charIndex < texts[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(prev => prev + texts[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                if (lineIndex < texts.length - 1) {
                    const timeout = setTimeout(() => {
                        setDisplayedText(prev => prev + '\n');
                        setLineIndex(lineIndex + 1);
                        setCharIndex(0);
                    }, delayBetweenLines);
                    return () => clearTimeout(timeout);
                }
            }
        }
    }, [lineIndex, charIndex, texts, speed, delayBetweenLines, displayedText]);

    return (
        <div className="text-xl text-white mt-4 drop-shadow-lg text-center whitespace-pre-line">
            {displayedText}
            <span className="border-r-2  ml-1 border-slate-100 animate-pulse"></span>
        </div>
           );
        };
        
        export default TypingEffect;