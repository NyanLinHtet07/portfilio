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
import ExperienceScreen from "./ExperienceScreen";
import AwardedScreen from "./AwardedScreen";
import { ProjectScreen } from "./ProjectScreen";
import { GlobeScreen } from './GlobeScreen';
import { TimelineScreen } from './TimelineScreen';
import FreightDoc from "./FreightDoc";
import ProjectDataScreen from "./ProjectDataScreen";
import GlobePage from "./ThreeGlobeScreen";

// import ProjectDataScreen from "./ProjectDataScreen";



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
                style={{  height: 'auto',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center', }}>
                
                <div className=" absolute inset-0 w-full mx-auto bg-gradient-to-b from-transparent to-black shadow-2xl"></div>
                  <CoverScreen/>
            
            </ParallaxBanner>

            <div className=" bg-black" style={{ height:'auto'}}>
              <Particles className=" w-full h-full absolute pointer-events-none" quantity={50} />
                <div className=" z-40">
                        <WhoAmIScreen/>
                        <GlobeScreen/>
                        {/* <GlobePage/> */}
                        <AboutMeScreen/>
                </div>
            </div>
              
            <div className=" bg-black" style={{ height: 'auto'}}>
                <EduScreen/>
                <LanguageScreen/>
                <AwardedScreen/>
                {/* <ExperienceScreen/> */}
                <TimelineScreen/>
                <ProjectDataScreen/>
                {/* <FreightDoc/> */}
            </div>
          
          
        </main>
        

    )
}