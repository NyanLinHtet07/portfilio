import Image from "next/image";
// import  './components/css/main.css';
import React,{useState, useEffect} from "react";
import TypingEffect from "./components/component/typingEffect";
import BouncingLiquid from "./components/component/boucingEffect";
export default function Home() {
  return (
  
    <main className=" bg-fixed bg-cover bg-center min-h-screen custom-bg relative">
        <Image src='/bg.png' fill={true} alt="background photo" className=" absolute object-cover inline-block backdrop-blur-sm bg-scroll "/>
        {/* <BouncingLiquid/> */}
        <div className=" flex flex-col w-11/12 glassmorphism  drop-shadow-lg  mx-auto items-center h-screen shadow-lg">
        
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

          {/* <div className=" mt-9">
              <h3 className=" text-3xl font-semibold text-left text-white">
              Who Am I
              </h3>

              <TypingEffect texts={[
                  " I am a dedicated Logistics Specialist with over three years of practical experience and a strong academic foundation from various universities and colleges. My role at Nordic Group Limited has involved collaborating with leading industry players such as Maersk, MSC, DHL, Kuehne+Nagel, and DB Schenker. This has provided me with valuable insights across multiple sectors, including garment trading, automotive distribution, pharmaceuticals, food and beverage, chemicals, and NGO/INGO organizations.",
                  "This diverse experience has refined my expertise in logistics and supply chain management, with a strong focus on compliance standards.",
                  "I am enthusiastic about leveraging my skills to make impactful contributions and drive success to your esteemed organization."
                ]} 
                speed={50}
                delayBetweenLines = {1000} />
          </div> */}
          
        </div>
        
    </main>
  );
}
