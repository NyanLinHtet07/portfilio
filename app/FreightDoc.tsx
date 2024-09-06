"use client";
import React, { useState, useRef } from "react";



const FreightDoc = () => {

   

    return (
        <div className=" bg-black py-36">
        <div className=" text-white text-4xl uppercase">
            I Made It ...
        </div>
      
        <div className=" absolute items-center justify-center mx-32 rounded-lg bg-black">
                <iframe
                    src="/Freight.pdf"
                    className=" bg-black"
                ></iframe>
               
        
        </div>
        </div>
    )
}

export default FreightDoc;