"use client"

import React, {useEffect, useState, useRef} from "react"
import WordPullUp from "@/components/magicui/word-pull-up";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutMeScreen = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const words = " I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth. Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company."
    const handleScroll =  () => {
        if(textRef.current){
            const rect = textRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isVisble = rect.top < windowHeight && rect.bottom > 0;
            setIsTextVisible(isVisble);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  


    return (
        
           <div className="pt-20 pb-60">
                {/* <div ref={textRef}
                    className={` text-white text-4xl font-bold drop-shadow-lg text-center w-10/12 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'} `}>
                    Driven Professional Seeking Challenging Opportunities in a Dynamic Environment 
                </div> */}
                <h2 className="text-white uppercase text-3xl mt-20 mb-12 px-2 font-bold drop-shadow-lg text-center">
                Professional Driven and Challenging Opportunities Seeking in a Dynamic Environment
                 </h2>
                {/* <WordPullUp
                    className=" uppercase text-2xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-3xl md:leading-[5rem]"
                    words="Professional Driven and Challenging Opportunities Seeking in a Dynamic Environment"
                    /> */}
                

                {/* <div className=" text-white mt-5 mx-10 text-justify w-10/12 px-2 py-3 drop-shadow-2xl backdrop-blur-xl">
                                I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.
                                Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.
                </div> */}
                  <div className=" mt-4 text-left w-10/12 mx-auto">
                    <TextGenerateEffect words={words} />
                  </div>
        
            </div>
    )
}

export default AboutMeScreen;