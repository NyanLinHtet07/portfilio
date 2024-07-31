"use client";
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
}

const TypingEffect:React.FC<TypingEffectProps> = ({ text, speed = 100}) => {
    const [displayedText, setDispayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index < text.length){
            const timeout = setTimeout(() => {
                setDispayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed, displayedText]);

    return (
        <div className=" text-xl mt-3 tracking-wide">
            {displayedText}
        </div>
    )
}

export default TypingEffect;