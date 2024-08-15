"use client"
import { Parallax, useParallax } from "react-scroll-parallax";
import React, {useRef} from "react";
import { progress } from "framer-motion";
import TypingEffect from "./components/component/typingEffect";
import Image from "next/image";
import TypingPageEffect from "./components/component/typingPageEffect";

export default function CoverScreen(){
    const parallax = useParallax<HTMLDivElement>({
        onProgressChange: (progress) => {
          if (parallax.ref.current) {
            parallax.ref.current.style.setProperty(
              '--progress',
              progress.toString()
            );
          }
        },
      });
    return (
        
      
        <div className=" relative">

            <Parallax scale={[0.5,1.5]}  speed={10}  className=" relative mt-24 w-60 h-60 mx-auto">
              <Image src='/profile.png' alt="profile" 
                      width={200} height={200} 
                      className="object-cover drop-shadow-md px-4 py-4 rounded-full glassmorphismCover"/>

              <Image src='/curveDesign1.png' 
                      width={240} height={220} alt="curve" 
                      className=" absolute -top-5 right-4 object-cover drop-shadow-2xl filter-white" />
            </Parallax>
            
            <div ref={parallax.ref} className="parallax-text text-center mb-10">
                Kumari Kadial @ JuJu
            </div>

            <TypingEffect texts={[
                    "Senior Business Development Executive",
                    "Ocean - Air - Land - Rail (Freight) Management"
                  ]} 
                  speed={100}
                  delayBetweenLines = {1000} />

            {/* <div ref={parallax.ref} className="parallax-text"> 
                WHO AM I 
            </div>
            <div className=" mt-2">
              <TypingPageEffect texts={[
                "I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges.",
                "My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker.",
                "This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations.",
                "This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards.",
                "I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."
              ]}  
              speed={50}
              delayBetweenLines = {1000} />
            </div> */}
        </div>
    )
}