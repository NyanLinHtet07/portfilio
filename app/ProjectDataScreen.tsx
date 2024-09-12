"use client"

import React from "react"
import { ProjectHoverEffect } from "@/components/ui/project-hover-effect"


const ProjectDataScreen:React.FC = () => {
    const projects = [
        {
            name:"Oxygon Procuring and importing for NGO and Hospital", 
            description:"During the Covid-19 pandemic, from May to August 2021, we supported most of the NGO teams by procuring thousands of O2 concentrators and O2 cylinders, as well as around 15 containers of O2 plants and generators for each containerized O2 plant. Additionally, we also supported various medical staff. We also provided door-to-door logistics services and offered free storage in our warehouse, with well-managed inventory.",
            pdf:''
        },
        {
            name:"Pfizer Vaccine Import Porject",
            description: "In December 2023, we supported the Ministry of Health and Sports (MOHS) with the Pfizer vaccine import process. The project was completed smoothly through strong collaboration with each organization involved.",
            pdf:''
        },
        {
            name: "Chest Exray Machine & Ultrasound machine Import Project",
            description: "In December 2022, we supported Medical Action Myanmar with the import of loads of X-ray machines from London to Myanmar. In April 2023, we supported Community Partner International with an ultrasound machine import project donated from Hong Kong.",
            pdf: ''
        },
        {
            name: "Humanitarian Staff Delivering project for Moca Cyclone Hitted",
            description: "Humanitarian Staff Delivering project in Moca Cyclone . During the humanitarian project for Cyclone Moca in Rakhine in May, we supported by delivering house staff, food supplies, and essential items. We also facilitated the paperwork and transportation of humanitarian staff, coordinating closely with the local team.",
            pdf:''
        },
        {
            name: "Maesai - Tachileik (Thailand - Myanmar) Cross Border Project",
            description: "Cross border Project In December 2023, we operated the very first Maesai-Tachileik cross-border service in Myanmar, supporting a customer in real need of this service for importing Coolgate raw materials from Thailand. This service solution was crucial, as the regular Maesot-Myawaddy cross-border route was difficult to operate due to internal political conflict.",
            pdf: ''
        },
        {
            name: "Freight Management System",
            description: '',
            pdf: '/Freight.pdf'
        }

    ];

    return (
        <>
        <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
            Accomplished Projects
        </h2>
        <div className="max-w-5xl mx-auto px-8">
            <ProjectHoverEffect items={projects} />
        </div>



        {/* <div className=" bg-black">
        <iframe src='https://widgets.sociablekit.com/linkedin-recommendations/iframe/25460448' width='100%' height='1000' className=" bg-black"></iframe>
        </div> */}
          {/* <div className="recommendation-card max-w-2xl mt-20 mx-auto bg-slate-950 bg-opacity-45 rounded-xl shadow-md overflow-hidden md:max-w-4xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className=" h-24 w-24 object-cover border-slate-200 mx-2 mt-3 border-2 p-1 rounded-full"
            src="/profile.png"
            alt="Kumari Kadial Juju"
          />
        </div>
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-white font-semibold">
            Recommendation
          </div>
          <a
            href="https://www.linkedin.com/in/kumari-kadial-juju-9a044818b/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
          >
            Kumari Kadial Juju
          </a>
          <p className="mt-2 text-gray-100">
          I had the pleasure of working with Ju Ju @ Kumari in the Business Development Department at Nordic Group Ltd for nearly two years.
During our time together, One of the Nordic Group's youngest team members with a strong passion. She is always interested in learning new things, Never be afraid to set high standards for herself and others, 
and to encourage others to achieve good results. 
Ju Ju @ Kumari was a successful, easy-to-manage associate who always went above and beyond to meet deadlines with a positive attitude.
She leans toward participating in prospective opportunities with various parties. She is also a highly responsible and accountable person for her own and others. 
Always willing to take opinions and advice from superiors. She was promoted as permanent staff after the probation period, and successfully managed more than 20+ international and domestic vendors such as MAERSK, EVERGREEN, ONE, K+N, Rhenus Logistics, DB Schenker 
Bollore Logistics etc. Aside from her daily procurement duties, she also assists in Freight Sales with both international and domestic clients G-Link Freight, Pho La Min Group, Pioneer Logistics, SCAN Logistics, etc... 
With her dedication and hard work, our Freight Service monthly sales revenue increased to $250,000 USD during the COVID19 and Military coup.
          </p>
        </div>
      </div>
    </div> */}

     

        </>
    )

}

export default ProjectDataScreen;