"use client"

import React, {useEffect, useState, useRef} from "react"
import { useParallax } from "react-scroll-parallax"
import TypingPageEffect from "./components/component/typingPageEffect"
import Image from "next/image"


const AboutMeScreen = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

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
    // const parallax = useParallax<HTMLDivElement>({
    //     onProgressChange: (progress) => {
    //         if(parallax.ref.current){
    //             parallax.ref.current.style.setProperty(
    //                 '--progress',
    //                 progress.toString()
    //             );
    //         }
    //     },
    // });


    return (
        
           <>
            <div ref={textRef}
                className={` text-white text-4xl font-bold drop-shadow-lg text-center w-10/12 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'} `}>
                 Driven Professional Seeking Challenging Opportunities in a Dynamic Environment 
            </div>
            

            <div className=" text-white mt-5 mx-10 text-justify w-10/12 px-2 py-3 drop-shadow-2xl backdrop-blur-xl">
                            I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.
                            Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.
            </div>
         
            {/* <div className=" text-left w-10/12 mx-auto">
                { isTextVisible ? (
                     <TypingPageEffect texts={[
                        "I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.",
                        "Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.",
                    ]}  
                    speed={50}
                    delayBetweenLines = {1000} />
                ) : null }
               
            </div> */}
        </>
    )
}

export default AboutMeScreen;