"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    texts: string[];
    speed?: number;
    delayBetweenLines?: number;
}

const TypingPageEffect: React.FC<TypingEffectProps> = ({ texts, speed = 100, delayBetweenLines = 1000 }) => {
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
        <div className=" text-white text-lg mt-4 drop-shadow-2xl whitespace-pre-line px-4 py-4 my-10">
            {displayedText}
            <span className="border-r-2  ml-1 border-slate-100 animate-pulse"></span>
        </div>
           );
        };
        
        export default TypingPageEffect;