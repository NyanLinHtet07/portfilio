"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";



const EduScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(true)
  }

  const eduList = [
    {id:1, dip:"B.Sc. (Botany)", university:"Taunggyi University", duration:"2014 - 2019", note: null, img:"/certificate.jpg" },
    {id:2, dip:"Diploma in International Business Management (US, OSG)", university:"Mimber Institute of Management Study", duration:"2020 February - 2020 December", note: null, img:"/certificate.jpg" },
    {id:3, dip:"Logistics Materials and Supply Chain Management (UK, NCFE)", university:"Mimber Institute of Management Study", duration:"2022 June - 2022 October", note: "Distinction", img:"/certificate.jpg" },
    {id:4, dip:"German Language Study A1 & A2", university:"Gothe Institude", duration:"2022 December - 2024 Present", note: null, img:"/certificate.jpg" },
    {id:5, dip:"Cabin Crew Language and Operation", university:"Myanmar Flight Attendent School", duration:"2019", note: null, img:"/certificate.jpg" },
    {id:6, dip:"Airline Ticket Reversation", university:"Trust Vocational Institute", duration:"2019", note: null, img:"/certificate.jpg" },
  
  ]


  const close = () => {
    setOpenModal(false)
  }
  // const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const handleScroll = () => {
  //     const cards = slider.querySelectorAll<HTMLDivElement>(".card");
  //     const sliderRect = slider.getBoundingClientRect();
      
  //     cards.forEach((card, index) => {
  //       const cardRect = card.getBoundingClientRect();
  //       const isVisible = cardRect.top >= sliderRect.top && cardRect.bottom <= sliderRect.bottom;
        
  //       if (isVisible) {
  //         card.classList.add("visible");
  //       } else {
  //         card.classList.remove("visible");
  //       }
  //     });
  //   };

  //   slider.addEventListener("scroll", handleScroll);
  //   handleScroll(); 

  //   return () => {
  //     slider.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
  <div>
  <div className=" grid grid-cols-4 gap-4">
      <div className=" col-span-2 text-white">
      <Image src='/edu.png' width={400} height={800} alt="edu" />
      
      </div>
      <div className=" col-span-2">
      <h2 className="text-white text-4xl mt-20 mb-12 font-bold drop-shadow-lg">
          Accomplished Academic Achievements
        </h2>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[ Pagination, Mousewheel]}
        className="mySwiper h-screen"
      >
        {
          eduList?.map((edu, index) => (
               <SwiperSlide key={index}>
                <div className=" grid grid-cols-4 gap-2">
                <div className="col-span-1 flex justify-center relative">
      
                  <div className="relative flex flex-col items-center">
                    <div className="w-px h-full border-r-2 border-dotted"></div>
                    <div
                      className="absolute bg-white backdrop-blur-lg drop-shadow-xl px-2 py-1 rounded-full text-center text-sm font-bold"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
                  <div className=" col-span-3 drop-shadow-2xl shadow-2xl glassmorphism md:w-96 py-3 px-4 rounded-md text-white opacity-95 transition-opacity duration-500">
                  <p className="text-2xl font-bold mt-4 mb-5">{ edu.dip }</p>
                    <div className="flex flex-row text-lg font-semibold px-2 my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                      </svg>
                      <p>{edu.university}</p>
                    </div>
                    <div className="flex flex-row px-2 my-2 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p>{edu.duration}</p>
                    </div>

                    <div className="flex flex-row px-2 my-2 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p>{edu.note}</p>
                    </div>
                    <div className="flex ml-6 my-4">
                      <button type="button"
                              onClick={open}>
                      <Image src={edu.img} width={100} height={100} alt="certificate" className="rounded-md drop-shadow-md" />
                      </button>
                      
                    </div>
                  </div>
                </div>
                  
              </SwiperSlide>
       
          ))
        }
       
      </Swiper>

      <Dialog as="div" open={openModal} onClose={close}
              className="relative z-10 focus:outline-none">
          <div className=" fixed inset-0 z-10 w-screen overflow-y-hidden">
            <div className=" flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <Image src="/certificate.jpg" width={900} height={900} alt="certificate" className="rounded-md drop-shadow-md" />
              </DialogPanel>
            </div>
          </div>
      </Dialog>
      </div>
</div>


  </div>
    

    </>
  );
};

export default EduScreen;
