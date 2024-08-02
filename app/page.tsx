import Image from "next/image";
// import  './components/css/main.css';
import React,{useState, useEffect} from "react";
import TypingEffect from "./components/component/typingEffect";
import BouncingLiquid from "./components/component/boucingEffect";
export default function Home() {
  return (
  
    <main className=" min-h-screen w-screen relative bg-slate-300">
        <Image src='/bg.png' fill={true} alt="background photo" className=" absolute object-cover inline-block backdrop-blur-sm bg-fixed "/>
        {/* <BouncingLiquid/> */}
        <div className=" flex flex-col w-11/12 glassmorphism  drop-shadow-lg  mx-auto items-center h-screen shadow-lg">
        
          <Image src='/profile.png' alt="profile" width={200} height={200} className="object-cover drop-shadow-md mt-24 bg-transparent px-4 py-4 rounded-full"/>
          <Image src='/curveDesign1.png' width={250} height={250} alt="curve" className=" absolute object-cover mt-16 drop-shadow-2xl" />
          
          <div className="mt-8">
            <p className=" text-3xl font-bold text-slate-800 tracking-wide">Kumari Kadial @ JuJu</p>
          </div>
          <TypingEffect texts={[
            "Senior Business Development Executive",
            "Ocean - Air - Land - Rail (Freight) Management"
          ]} 
          speed={100}
          delayBetweenLines = {1000} />
          
        </div>
        
    </main>
  );
}
