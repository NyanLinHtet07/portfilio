"use client";

import Image from "next/image";
import  './components/css/main.css';
import React,{useState, useEffect} from "react";
import TypingEffect from "../typingEffect";
import TypingPageEffect from "../typingPageEffect";
import BouncingLiquid from "../boucingEffect";
export default function Home() {

  // useEffect(() => {
  //   const handleScroll = (event: any) => {
  //     const sections = document.querySelectorAll('.section');
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     const windowHeight = window.innerHeight;

  //     sections.forEach((section, index) => {
  //       if (scrollPosition >= index * windowHeight && scrollPosition < (index + 1) * windowHeight) {
  //         window.scrollTo({
  //           top: index * windowHeight,
  //           behavior: 'smooth'
  //         });
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
  
    <main className="mx-auto">
      <div className="relative w-full h-screen mx-auto overflow-hidden">
          <div className=" flex items-center h-full">
            <Image src='/bg.png' fill={true} alt="background photo" className=" relative object-cover w-full h-full backdrop-blur-sm bg-scroll "/>
          </div>

          <div className=" absolute inset-0 flex flex-col">
            <div className=" flex flex-col w-11/12 glassmorphism h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
              
              <div>
              <Image src='/profile.png' alt="profile" width={200} height={200} className="object-cover drop-shadow-md mt-24 bg-transparent px-4 py-4 rounded-full"/>
              <Image src='/curveDesign1.png' width={250} height={250} alt="curve" className=" absolute object-cover mt-16 drop-shadow-2xl" />
              </div>
              
              <div className="mt-12">
                <p className=" text-3xl font-bold text-white tracking-wide">Kumari Kadial @ JuJu</p>
              </div>
              <TypingEffect texts={[
                "Senior Business Development Executive",
                "Ocean - Air - Land - Rail (Freight) Management"
              ]} 
              speed={100}
              delayBetweenLines = {1000} />

            


            </div>
          </div>
      
      </div>
       
       
       <div className="relative w-full h-screen mx-auto overflow-hidden">
       <div className=" flex items-center h-full">
        <Image src='/bg7.png' fill={true} alt="background photo" className="relative object-cover w-full h-full"/>
       </div>
       <div className="absolute inset-0 flex flex-col items-center">
          <div className="flex flex-col w-11/12 glassmorphism h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
            <h3 className=" text-3xl font-semibold text-white mt-24"> WHO AM I </h3>
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
            </div>
          </div>
        </div>  
       </div>

       <div className="relative w-full h-screen mx-auto overflow-hidden">
       <div className=" flex items-center h-full">
        <Image src='/bg9.png' fill={true} alt="background photo" className="relative object-cover w-full h-full"/>
       </div>
       <div className="absolute inset-0 flex flex-col items-center">
          <div className="flex flex-col w-11/12 glassmorphism h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
            <h3 className=" text-3xl font-semibold text-white mt-24 px-4"> 
            Driven Professional Seeking Challenging Opportunities in a Dynamic Environment
            </h3>
            <div className=" mt-2">
              <TypingPageEffect texts={[
                "I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth.",
                "Committed to achieving excellence and contributing to team success, I thrive in diverse settings where I can apply my skills, pursue personal development, and drive meaningful results for the company.",
              ]}  
              speed={50}
              delayBetweenLines = {1000} />
            </div>
          </div>
        </div>  
       </div>
        
    </main>
  );
}
