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
  IconMail,
  IconPhone
} from "@tabler/icons-react";
import { color } from "framer-motion";

export default function CoverScreen(){
  // const links = [
  //   {
  //     title: "Phone",
  //     icon: (
  //       <IconPhoneCall fill="#34564F" className="h-full w-full text-white"/>
  //     ),
  //     href:"tel:+959769586670"
  //   },
  //   {
  //     title: "Email",
  //     icon: (
  //       <IconMail fill="#002E4F" className="h-full w-full text-white"/>
  //     ),
  //     href:"mailto:kumarikdl9@gmail.com"
  //   },
  //   {
  //     title: "Whatsapp",
  //     icon: (
  //       <IconBrandWhatsapp fill="#25D366" className="h-full w-full text-white"/>
  //     ),
  //     href:"https://wa.me/959769586670"
  //   },
  //   {
  //     title: "Viber",
  //     icon: (
  //       <IconPhone fill="#7360f2" className="h-full w-full text-white"/>
  //     ),
  //     href: "viber://chat?number=959769586670"
  //   },
  //   {
  //     title: "LinkedIn",
  //     icon: (
  //       <IconBrandLinkedin fill=" #0077B5" className="h-full w-full text-white"/>
  //     ),
  //     href:"https://www.linkedin.com/in/kumari-kadial-juju-9a044818b"
  //   },
    
  
    
  // ]

  const links = [
    {
      title: "Phone",
      icon: (
        <IconPhoneCall className="h-full w-full text-blue-950 hover:text-white"/>
      ),
      href:"tel:+959769586670",
      bgColor: "#6FBEFF"
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-blue-950 hover:text-white"/>
      ),
      href:"mailto:kumarikdl9@gmail.com",
      bgColor: "#002E4F",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-blue-950 hover:text-white"/>
      ),
      href:"https://wa.me/959769586670",
      bgColor: "#25D366"
    },
    {
      title: "Viber",
      icon: (
        <IconPhone className=" w-full h-full text-blue-950 hover:text-white "/>
      ),
      href: "viber://chat?number=959769586670",
      bgColor:"#7360f2"
      
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-950 hover:text-white"/>
      ),
      href:"https://www.linkedin.com/in/kumari-kadial-juju-9a044818b",
      bgColor: "#0077B5"
    },
    
  
    
  ]

    return (
        
      
        <div className=" relative">
          <div className=" relative mt-24 w-60 h-60 mx-auto">
          <Image src='/front.png' alt="profile" 
                      width={220} height={220} 
                      className="object-cover drop-shadow-md px-4 py-4 rounded-full"/>
           <Image src='/curveDesign1.png' 
                      width={240} height={220} alt="curve" 
                      className=" absolute -top-5 right-4 object-cover drop-shadow-2xl filter-white" />
          </div>
            
            {/* <Parallax scale={[0.5,1.5]}  speed={10}  className=" relative mt-24 w-60 h-60 mx-auto">
              <Image src='/front.png' alt="profile" 
                      width={220} height={220} 
                      className="object-cover drop-shadow-md px-4 py-4 rounded-full"/>

              <Image src='/curveDesign1.png' 
                      width={240} height={220} alt="curve" 
                      className=" absolute -top-5 right-4 object-cover drop-shadow-2xl filter-white" />
            </Parallax> */}

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

            <div className=" text-white text-xs  text-center px-20 pb-5 -mt-3 drop-shadow-xl uppercase">
              I am a person who is Guided by solutions, powered by results, <br/> and always elevating through learning 
              and new challenging opportunities.
            </div>


            <TypingEffect texts={[
                    "Senior Business Development Executive",
                    "Ocean - Air - Land - Rail (Freight) Management"
                  ]} 
                  speed={100}
                  delayBetweenLines = {1000} />

           

            <div className=" flex mt-5 justify-center h-[35rem] w-full">
                <FloatingDock
                  mobileClassName="translate-y-20"
                  items={links}
                />
            </div>

       
        </div>
    )
}