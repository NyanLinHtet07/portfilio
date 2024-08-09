"use client";

import React, {useState, useEffect} from "react";

interface MousePosition {
    x: number;
    y: number;
}

export default function useMousePosition(): MousePosition{
    const [mousePosition, setMousePosition] = useState<MousePosition>({x:0, y:0});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mouseover', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return mousePosition;
}