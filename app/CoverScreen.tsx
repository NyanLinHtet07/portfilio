"use client"
import { Parallax, useParallax } from "react-scroll-parallax";
import React, {useRef} from "react";
import TypingEffect from "./components/component/typingEffect";
import Image from "next/image";
import TypingPageEffect from "./components/component/typingPageEffect";
import WordPullUp from "@/components/magicui/word-pull-up";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandGmail,
  IconPhoneCall,
  IconMail

} from "@tabler/icons-react";

export default function CoverScreen(){
  const links = [
    {
      title: "Phone",
      icon: (
        <IconPhoneCall className="h-full w-full text-blue-950"/>
      ),
      href:"#"
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-blue-950"/>
      ),
      href:"#"
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-950"/>
      ),
      href:"#"
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-blue-950"/>
      ),
      href:"#"
    },
  
    
  ]
    // const parallax = useParallax<HTMLDivElement>({
    //     onProgressChange: (progress) => {
    //       if (parallax.ref.current) {
    //         parallax.ref.current.style.setProperty(
    //           '--progress',
    //           progress.toString()
    //         );
    //       }
    //     },
    //   });
    return (
        
      
        <div className=" relative">
            
            <Parallax scale={[0.5,1.5]}  speed={10}  className=" relative mt-24 w-60 h-60 mx-auto">
              <Image src='/profile.png' alt="profile" 
                      width={200} height={200} 
                      className="object-cover drop-shadow-md px-4 py-4 rounded-full"/>

              <Image src='/curveDesign1.png' 
                      width={240} height={220} alt="curve" 
                      className=" absolute -top-5 right-4 object-cover drop-shadow-2xl filter-white" />
            </Parallax>

            {/* <div className=" relative mt-24 w-60 h-60 mx-auto">
                 <Image src='/profile.png' alt="profile" 
                      width={200} height={200} 
                      className="object-cover drop-shadow-md px-4 py-4 rounded-full"/>

              <Image src='/curveDesign1.png' 
                      width={240} height={220} alt="curve" 
                      className=" absolute -top-5 right-4 object-cover drop-shadow-2xl filter-white" />
            </div> */}

            <WordPullUp
              className="text-2xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="Kumari Kadial @ JuJu"
            />
            
            {/* <div ref={parallax.ref} className="parallax-text text-center mb-10">
                Kumari Kadial @ JuJu
            </div> */}

            <TypingEffect texts={[
                    "Senior Business Development Executive",
                    "Ocean - Air - Land - Rail (Freight) Management"
                  ]} 
                  speed={100}
                  delayBetweenLines = {1000} />

            <div className=" flex mt-10 justify-center h-[35rem] w-full">
                <FloatingDock
                  mobileClassName="translate-y-20"
                  items={links}
                />
            </div>
        </div>
    )
}