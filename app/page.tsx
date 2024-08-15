"use client";
import React, { useEffect, useState, useRef }  from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import Image from "next/image";
import CoverScreen from "./CoverScreen";
import TypingEffect from "./components/component/typingEffect";
import WhoAmIScreen from "./WhoAmIScreen";
import AboutMeScreen from "./AboutMeScreen";
import Particles from "./components/utility/particles";
import EduScreen from "./EduScreen";
import LanguageScreen from "./LanguageScreen";



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
                style={{  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center', }}>
                
                <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-b from-transparent to-black shadow-2xl"></div>
                <div className=" absolute w-11/12 h-full  drop-shadow-lg  mx-auto justify-center items-center shadow-lg"></div>
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

            {/* <ParallaxBanner
                layers={[
                    { image: '/bg7.png', speed:-15 },
                      ]}
                      style={{
                        height: '100vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                    }}
                      >
                  <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-t from-black via-transparent to-black"></div>
              
                  <AboutMeScreen/>
              
              </ParallaxBanner> */}

              <ParallaxBanner
                layers={[
                  {
                    speed: -20,
                    children: (
                      <div className=" absolute inset-0 bg-black h-full" style={{ height:'140vh'}}>
                        <Particles className=" w-full h-full absolute pointer-events-none" quantity={50} />
                      </div>
                    ),
                  },
                  {
                    speed: -15,
                    children: (
                      <div className=" absolute inset-0 flex flex-col items-center top-1/4">
                        <h1 className="  text-white text-4xl font-bold drop-shadow-lg text-center w-10/12"> 
                        Driven Professional Seeking Challenging Opportunities in a Dynamic Environment 
                        </h1>
                        <div className=" text-white mt-5 mx-10 text-justify w-10/12 px-2 py-3 drop-shadow-2xl backdrop-blur-xl">
                        I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.
                        Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.
                        </div>
                      </div>
                    )
                  },
                  { speed: -5,
                    children: (
                      <>
                     
                      <div className="relative w-full h-full flex items-end justify-center">
                        <img 
                          src="./moon.png" 
                          alt="Globe"
                          className=" w-full object-cover"
                          
                        />
                         <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-b from-transparent via-transparent to-black "></div>
                     </div>
                     </>
                    ),
                  }
                ]}

                  className="aspect-[2/1]"
                >

                </ParallaxBanner>


            <div className=" bg-black relative" style={{ height: '120vh'}}>
                <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-bl from-transparent via-transparent to-black"></div>
                <EduScreen/>
            </div>
            <div className=" bg-black" style={{ height: '100vh'}}>
                <LanguageScreen/>
            </div>
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