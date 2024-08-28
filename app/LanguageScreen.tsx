"use client"

import React from "react"
import CircularProgress from "@/components/ui/circular-progress";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const LanguageScreen:React.FC = () => {
    const languages = [
        {name: "English", percentage: 95},
        {name: "Deutsh", percentage: 85},
        {name: "Burmese", percentage: 95},
        {name: "Nepalese", percentage: 90},
        {name: "Hindi", percentage: 85},
    ];
    return(
        <>
         <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
         Multilingual skills
        </h2>
       {/* <div className=" flex justify-around px-4 py-10">
            {languages.map((language) => (
                <CircularProgress
                key={language.name}
                percentage={language.percentage}
                text={language.name}
                />
            ))}
       </div> */}

        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={languages} />
        </div>

        </>
    )
}

export default LanguageScreen;

