"use client"

import React, { useState, useEffect, useRef } from "react"
import { Parallax, useParallax } from "react-scroll-parallax"
import TypingPageEffect from "./components/component/typingPageEffect"
import TypingEffect from "./components/component/typingEffect"
import WordPullUp from "@/components/magicui/word-pull-up";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"


const WhoAmIScreen = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const words = "I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges. My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker. This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations. This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards. I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."

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

    return(
        <div className=" pt-20">
             
          
            {/* <WordPullUp
              className="text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="WHO AM I"
            /> */}
            <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
               WHO AM I
            </h2>
            <div className=" mt-4 text-left w-10/12 mx-auto">
              <TextGenerateEffect words={words} />
            {/* <TypingPageEffect texts={[
                "I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges.",
                "My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker.",
                "This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations.",
                "This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards.",
                "I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."
              ]}  
              speed={50}
              delayBetweenLines = {1000} /> */}
            </div>
            
          </div>
        
    )
}

export default WhoAmIScreen;