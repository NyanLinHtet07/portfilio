"use client";

import React from "react";

const BouncingLiquid: React.FC = () => {
    return (
        <svg className=" absolute inset-0 w-full h-full opacity-60 pointer-events-none">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#F4F5F5', stopOpacity:1}}/>
                    <stop offset="100%" style={{stopColor: '#C2FFFF', stopOpacity:1}}/>
                </linearGradient>
            </defs>
            <circle cx="0%" cy="0%" r="20%" fill="url(#grad1)" className="animate-move">
               
            </circle>
            <circle cx="20%" cy="20%" r="15%" fill="url(#grad1)" className="animate-move delay-2000">
                
            </circle>
        </svg>
    )
};

export default BouncingLiquid;