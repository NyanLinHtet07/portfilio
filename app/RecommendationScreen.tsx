'use client';
import Image from "next/image";
import React from "react"


const RecommendationScreen = () => {
    return(
        <div className=" pb-20">
             <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
                What My Colleagues Say
             </h2>
             <div>
                <div className=" container px-6 text-justify w-10/12 rounded-xl text-slate-200 bg-slate-800 bg-opacity-30 drop-shadow-2xl shadow-lg ring-1 ring-white py-6 hover:ring-8 hover:ring-blue-900/[0.8] duration-700 transition">
                 <article className=" border-b-2 border-slate-200 pb-6 flex flex-col">
                   <Image 
                     src="/quotes.png"
                     width={40}
                     height={40}
                     className=" object-cover"
                     alt="quotes"/>
                     <span className="italic tracking-wider indent-16 text-xs">
                     I had the pleasure of working with Ju Ju @ Kumari in the Business Development Department at Nordic Group Ltd for nearly two years.
                    During our time together, One of the Nordic Group's youngest team members with a strong passion. She is always interested in learning new things, Never be afraid to set high standards for herself and others, 
                    and to encourage others to achieve good results. 
                    Ju Ju @ Kumari was a successful, easy-to-manage associate who always went above and beyond to meet deadlines with a positive attitude.
                    She leans toward participating in prospective opportunities with various parties. She is also a highly responsible and accountable person for her own and others. 
                    Always willing to take opinions and advice from superiors. She was promoted as permanent staff after the probation period, and successfully managed more than 20+ international and domestic vendors such as MAERSK, EVERGREEN, ONE, K+N, Rhenus Logistics, DB Schenker 
                    Bollore Logistics etc. Aside from her daily procurement duties, she also assists in Freight Sales with both international and domestic clients G-Link Freight, Pho La Min Group, Pioneer Logistics, SCAN Logistics, etc... 
                    With her dedication and hard work, our Freight Service monthly sales revenue increased to $250,000 USD during the COVID19 and Military coup.
                     </span>
                     
                 </article>
                 <div className=" flex flex-row justify-end text-right pt-3">
                
                    <a href="https://www.linkedin.com/in/zay-yar-myo-simon/">
                    <div className=" text-lg font-semibold"> ZAY YAR MYO SIMON </div>
                    <small className=" text-sm"> Business Development Manager at Nordic Group Ltd. Co-Founder at Shwe Wala Business Group. </small>
                    </a>
                 </div>
                    
                </div>
             </div>
        </div>
    )
}

export default RecommendationScreen;