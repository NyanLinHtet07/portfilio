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
        <div>
            <div className=" text-left mb-10 text-white text-3xl font-bold ml-8 relative flex flex-row w-10/12 pt-10">
            <Image src='/quotes.png' width={70} height={50} alt="background photo" className=" ml-7 mr-6 absolute -top-0"/>
            <div ref={textRef}
                className={`transition-opacity duration-1000  ml-28 ${isTextVisible ? 'opacity-100' : 'opacity-0'} `}>
                 Driven Professional Seeking Challenging Opportunities in a Dynamic Environment 
            </div>
            </div>
            {/* <div ref={parallax.ref} className="parallax-text-about text-center mb-10">
                Driven Professional Seeking Challenging Opportunities in a Dynamic Environment
            </div> */}
            <div className="mt-4 text-left w-10/12 mx-auto">
                { isTextVisible ? (
                     <TypingPageEffect texts={[
                        "I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.",
                        "Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.",
                    ]}  
                    speed={50}
                    delayBetweenLines = {1000} />
                ) : null }
               
            </div>
        </div>
    )
}

export default AboutMeScreen;