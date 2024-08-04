import Image from "next/image";
import  './components/css/main.css';
import React,{useState, useEffect} from "react";
import TypingEffect from "./components/component/typingEffect";
import TypingPageEffect from "./components/component/typingPageEffect";
import BouncingLiquid from "./components/component/boucingEffect";
export default function Home() {
  return (
  
    <main className="mx-auto">
      <div className=" relative w-full h-screen mx-auto overflow-hidden">
          <div className=" flex items-center h-full">
            <Image src='/bg.png' fill={true} alt="background photo" className=" relative object-cover w-full h-full backdrop-blur-sm bg-scroll "/>
          </div>

          <div className=" absolute inset-0 flex flex-col items-center">
            <div className=" flex flex-col w-11/12 glassmorphism h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
              
              <Image src='/profile.png' alt="profile" width={200} height={200} className="object-cover drop-shadow-md mt-24 bg-transparent px-4 py-4 rounded-full"/>
              <Image src='/curveDesign1.png' width={250} height={250} alt="curve" className=" absolute object-cover mt-16 drop-shadow-2xl" />
              
              <div className="mt-8">
                <p className=" text-3xl font-bold text-white tracking-wide">Kumari Kadial @ JuJu</p>
              </div>
              <TypingEffect texts={[
                "Senior Business Development Executive",
                "Ocean - Air - Land - Rail (Freight) Management"
              ]} 
              speed={100}
              delayBetweenLines = {1000} />

              {/* <div className=" mt-4">
                <h3 className=" text-3xl font-semibold text-white"> BIO </h3>
              </div>   */}


            </div>
          </div>
      
      </div>
       
       
       <div className=" relative w-full h-screen mx-auto overflow-hidden">
       <div className=" flex items-center h-full">
        <Image src='/bg6.png' fill={true} alt="background photo" className="relative object-cover w-full h-full opacity-80 blur-sm"/>
       </div>
       <div className="absolute inset-0 flex flex-col items-center">
          <div className="flex flex-col w-11/12 glassmorphismForWhoAmI h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
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

       <div className=" relative w-full h-screen mx-auto overflow-hidden">
       <div className=" flex items-center h-full">
        <Image src='/bg4.png' fill={true} alt="background photo" className="relative object-cover w-full h-full opacity-80 blur-sm"/>
       </div>
       <div className="absolute inset-0 flex flex-col items-center">
          <div className="flex flex-col w-11/12 glassmorphismForWhoAmI h-screen  drop-shadow-lg  mx-auto items-center shadow-lg">
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

            {/* <div className=" mt-4">
              <p className=" text-white px-6 py-4 opacity-90 bg-sky-800 text-justify backdrop-blur-xl drop-shadow-lg mx-24 rounded-lg">
                <em> " I am eager to leverage my strong work ethic, education, and expertise in a role that challenges me and aligns with my passion for growth. 
                Committed to achieving excellence and contributing to team success, I thrive in diverse settings where 
                I can apply my skills, pursue personal development, and drive meaningful results for the company. "</em>
              </p>
            </div> */}
          </div>
        </div>  
       </div>
        
    </main>
  );
}
