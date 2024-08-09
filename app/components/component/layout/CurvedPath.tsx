"use client";

import React from "react";

const CurvedPath: React.FC = () => {
    return (
        <svg width="0" height="0">
            <defs>
                <path id="curve" d="M0,100 Q50, 0 100, 100" />
            </defs>
        </svg>
    )
}

export default CurvedPath;