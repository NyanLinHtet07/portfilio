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
import ProjectDataScreen from "./ProjectDataScreen";
import GlobePage from "./ThreeGlobeScreen";
import RecommendationScreen from "./RecommendationScreen";
import SlideNav from "./SlideNav";
import SlideNavDash from "./SlideNavDash";
import { Switch } from "@headlessui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";



export default function Home() {
    const [isLightOn, setIsLightOn] = useState(true);


    return (
        <main className=" relative">
          {/** slider  */}
              <SlideNav/>

          {/** Bulb */}
                <div className=" fixed inset-0">
                         <div
                        className={`absolute inset-0 transition-all duration-1000 ${
                          isLightOn
                            ? ' bg-gradient-to-r from-cyan-300 via-cyan-700 to-cyan-800'
                            : 'bg-slate-950'
                        }`}
                      >
                        {/* <Image 
                          src="/bulb1.png" 
                          width={250} 
                          height={100} alt="test" 
                          className={`bottom-0 absolute -left-24  object-center transition-all duration-700 object-cover ${
                            isLightOn ? 'opacity-50' : 'filter grayscale opacity-10'
                          }`} /> */}
                           <Image 
                          src="/bg.png" 
                          fill={true}
                           alt="test" 
                          className={` transition-all duration-700 object-cover ${
                            isLightOn ? 'opacity-60' : 'filter grayscale opacity-30'
                          }`} />

                        
                          <div
                            className={`absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t ${
                                isLightOn ? 'from-transparent' : 'from-black'
                            } transition-all duration-700`}>
                          </div>
                      </div>


                      {/* <div
                        className={`absolute bottom-48 -left-16 border-none h-44 w-44 rounded-full transition-all duration-500 ${
                          isLightOn
                            ? 'bg-sky-900 bg-opacity-40 shadow-[0_0_100px_50px_rgba(0,109,235,0.9)]'
                            : 'bg-gray-900 bg-opacity-10'
                        }`}
                      ></div> */}
                   <div
                        className={`absolute top-10 left-1/3 opacity-50 border-none h-10 w-10 rounded-full transition-all duration-500 ${
                          isLightOn
                            ? 'bg-sky-900 bg-opacity-40 shadow-[0_0_100px_50px_rgba(0,109,235,0.9)]'
                            : 'bg-gray-900 bg-opacity-10'
                        }`}
                      ></div>

                  <Particles className=" w-full h-full absolute pointer-events-none" quantity={50} />
                  </div>
                  
                  <Switch.Group>
                      <div className=" absolute top-0 left-10 mt-10 flex justify-end items-center space-x-2 z-50">
                        {/* <Switch.Label className="text-gray-100 dark:text-gray-300">
                          {isLightOn ? 'Light Mode' : 'Dim Mode'}
                        </Switch.Label> */}
                        <Switch
                          checked={isLightOn}
                          onChange={setIsLightOn}
                          className={`${isLightOn ? 'bg-gray-600' : 'bg-gray-200'}
                                        relative inline-flex items-center h-7 rounded-full w-11 transition-colors focus:outline-none`}>
                          <span
                            className={`${
                              isLightOn ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform flex items-center justify-center`}>
                            {isLightOn ? <IconSun className="w-5 h-5 text-yellow-500" /> : <IconMoon className="w-5 h-5 text-gray-500" />}
                          </span>
                        </Switch>
                      </div>
                    </Switch.Group>
                 

                    <div className=" relative" style={{ overflowY:'auto', height:'100vh', paddingTop:'8px'}}>
                    {/* <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-6 max-w-7xl mx-auto"> */}
                    
                      <section id="about">
                        <CoverScreen/>
                      </section>  

                      <section>
                        <WhoAmIScreen/>
                      </section> 

                      <section id="about">
                        <AboutMeScreen/>
                      </section>  

                      <section id="education">
                        <EduScreen/>
                        <LanguageScreen/>
                        <AwardedScreen/>
                      </section>

                      <section id="experience">
                        <TimelineScreen/>
                      </section> 

                      <section id="projects">
                        <ProjectDataScreen/>
                      </section>  

                      <section id="recommendations">
                      <RecommendationScreen/>
                      </section>  
                      </div>  
                    {/* </div> */}
                

      </main>

   
         
         
           
           
        

    )
}

 {/* <GlobeScreen/> */}
{/* <GlobePage/> */}

 //   <div className="relative bg-black h-screen overflow-auto w-screen">

    //   <div className="absolute top-5 left-10 z-50">
    //     <button onClick={() => setIsOpen(!isOpen)}>
    //       <Image
    //         src="/5.png"
    //         width={100}
    //         height={100}
    //         alt="logo"
    //         className="rounded-full"
    //       />
    //     </button>
    //   </div>

  
    //   <div
    //     className={`bg-slate-200 bg-opacity-80 backdrop-blur-md w-60 h-fit rounded-r-full py-12 top-32 left-0 z-10 mt-1 transform transition-transform duration-700 ease-in-out absolute ${
    //       isOpen ? 'translate-x-0' : '-translate-x-full'
    //     }`}
    //   >
    //     <ul className=" px-2 space-y-6 ">
    //       <li>
    //         <a href="#about" className="hover:underline uppercase">
    //           About Me
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#education" className="hover:underline uppercase">
    //           Education
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#experience" className="hover:underline uppercase">
    //           Experience
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#projects" className="hover:underline uppercase">
    //           Projects
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#recommendations" className="hover:underline uppercase">
    //           Recommendations
    //         </a>
    //       </li>
    //     </ul>
    //   </div>


    //   <main
    //     className={`flex-1 transition-all duration-700 relative bg-black h-screen overflow-y-scroll ${
    //       isOpen ? 'ml-60' : 'ml-0'
    //     }`}
    //   >

    //     <Particles className="w-full h-full absolute pointer-events-none" quantity={50} />

    //     <div className="relative z-40 max-w-full">
    //       <section id="about">
    //         <CoverScreen />
    //       </section>

    //       <section>
    //         <WhoAmIScreen />
    //       </section>

    //       <section id="about">
    //         <AboutMeScreen />
    //       </section>

    //       <section id="education">
    //         <EduScreen />
    //         <LanguageScreen />
    //         <AwardedScreen />
    //       </section>

    //       <section id="experience">
    //         <TimelineScreen />
    //       </section>

    //       <section id="projects">
    //         <ProjectDataScreen />
    //       </section>

    //       <section id="recommendations">
    //         <RecommendationScreen />
    //       </section>
    //     </div>
    //   </main>


    // </div>

  