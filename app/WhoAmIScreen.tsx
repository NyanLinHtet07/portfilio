"use client"

import React, { useState, useEffect, useRef } from "react"
import { Parallax, useParallax } from "react-scroll-parallax"
import TypingPageEffect from "./components/component/typingPageEffect"
import TypingEffect from "./components/component/typingEffect"


const WhoAmIScreen = () => {
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
    

    const parallax = useParallax<HTMLDivElement>({
        onProgressChange: (progress) => {
            if(parallax.ref.current){
                parallax.ref.current.style.setProperty(
                    '--progress',
                    progress.toString()
                );
            }
        },
    });

    return(
        <div className=" py-20">
             {/* <div className=" text-center text-white text-3xl font-bold mb-28">
              BIO
            </div> */}
            <div ref={parallax.ref} className="parallax-text text-center mb-10 drop-shadow-xl"> 
                WHO AM I 
            </div>
            <div className=" mt-4 text-left w-10/12 mx-auto drop-shadow-xl">
            <TypingPageEffect texts={[
                "I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges.",
                "My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker.",
                "This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations.",
                "This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards.",
                "I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."
              ]}  
              speed={50}
              delayBetweenLines = {1000} />
            </div>
            {/* <div className=" mt-4 text-left w-10/12 mx-auto drop-shadow-xl">
              { isTextVisible ? (<TypingPageEffect texts={[
                "I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges.",
                "My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker.",
                "This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations.",
                "This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards.",
                "I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."
              ]}  
              speed={50}
              delayBetweenLines = {1000} />) : null}
             
            </div> */}
          </div>
        
    )
}

export default WhoAmIScreen;