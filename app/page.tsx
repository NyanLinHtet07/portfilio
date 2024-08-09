"use client";
import React, { useEffect, useState, useRef }  from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import Image from "next/image";
import CoverScreen from "./CoverScreen";
import TypingEffect from "./components/component/typingEffect";
import WhoAmIScreen from "./WhoAmIScreen";
import AboutMeScreen from "./components/AboutMeScreen";
import Particles from "./components/utility/particles";


export default function Home() {
    const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      setIsTextVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <main className="parallax-container">

            <ParallaxBanner
                layers={[
                    {image: './bg.png', speed: -20},
                ]}
                style={{height:'100vh', backgroundPosition:"cover"}}>
                
                <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-b from-transparent to-black bg-opacity-10 backdrop-blur-sm shadow-2xl"></div>
                {/* <div className=" absolute w-11/12 glassmorphism h-full  drop-shadow-lg  mx-auto justify-center items-center shadow-lg"></div> */}
                  <CoverScreen/>
                {/* <div className=" absolute items-center justify-center flex">
                <div 
                        ref={textRef} 
                        className={`content-center transition-opacity duration-700 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <h1 className="text-white text-4xl">Black Screen Section</h1>
          </div>
                </div> */}
            </ParallaxBanner>

            <div className=" bg-black" style={{ height:'120vh'}}>
            <Particles className=" w-full h-full absolute pointer-events-none" quantity={50} />
                <div className=" z-40">
                        <WhoAmIScreen/>
                </div>
            </div>

            <ParallaxBanner
                layers={[
                    { image: '/bg7.png', speed:-5 },
                ]}
                style={{ height: '100vh' }}
                >
             <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-t from-black via-transparent to-black bg-opacity-10 backdrop-blur-sm shadow-2xl"></div>
        
             <AboutMeScreen/>
         
        </ParallaxBanner>
        </main>
        // <main className="  p-24">
        //     <div className=" fixed inset-0 -z-10">
        //     <Image src='/bg.png' 
        //            fill={true} alt="background photo" 
        //            className=" object-cover w-full h-full backdrop-blur-md bg-fixed "
        //     />
        //     <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-b from-transparent to-black bg-opacity-10 backdrop-blur-sm shadow-2xl"></div>
        //     </div>
            
        //     <div className="flex flex-col items-center justify-between w-fit">
        //         <CoverScreen/>
        //         <WhoAmIScreen/>
        //     </div>
        // </main>

    )
}