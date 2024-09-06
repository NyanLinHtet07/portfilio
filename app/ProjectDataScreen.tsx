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
        </>
    )

}

export default ProjectDataScreen;