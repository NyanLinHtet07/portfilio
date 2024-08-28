"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import WordPullUp from "@/components/magicui/word-pull-up";
import { motion } from "framer-motion";


const EduScreen = () => {
  const [openImg, setImg] = useState('');

  const eduList = [
    {id:1, dip:"B.Sc. (Botany)", university:"Taunggyi University", duration:"2014 - 2019", note: null, img:"/certificate.png" },
    {id:2, dip:"Diploma in International Business Management (US, OSG)", university:"Mimber Institute of Management Study", duration:"2020 February - 2020 December", note: null, img:"/certificate.png" },
    {id:3, dip:"Logistics Materials and Supply Chain Management (UK, NCFE)", university:"Mimber Institute of Management Study", duration:"2022 June - 2022 October", note: "Distinction", img:"/certificate.png" },
    {id:4, dip:"German Language Study A1 & A2", university:"Gothe Institude", duration:"2022 December - 2024 Present", note: null, img:"/certificate.png" },
    {id:5, dip:"Cabin Crew Language and Operation", university:"Myanmar Flight Attendent School", duration:"2019", note: null, img:"/certificate.png" },
    {id:6, dip:"Airline Ticket Reversation", university:"Trust Vocational Institute", duration:"2019", note: null, img:"/certificate.png" },
  
  ]


 


  return (
    <>
  <div>
  <div className=" grid grid-cols-5 gap-4">
      <div className=" col-span-2 text-white mt-10 mx-auto">
      <Image src='/edu.png' width={300} height={600} alt="edu" className="" />
      
      </div>
      <div className=" col-span-3">
        <WordPullUp
              className=" uppercase text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="Accomplished Academic Achievements"
            />
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
                {/* <div className="col-span-1 flex justify-center relative">
      
                  <div className="relative flex flex-col items-center">
                    <div className="w-px h-full border-r-2 border-dotted"></div>
                    <div
                      className="absolute bg-white backdrop-blur-lg drop-shadow-xl px-2 py-1 rounded-full text-center text-sm font-bold"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div> */}
                  <div className=" col-span-4 drop-shadow-2xl shadow-2xl bg-slate-400 bg-opacity-30 backdrop-blur-md ml-20 mr-10 py-3 px-4 rounded-lg text-white opacity-95 transition-opacity duration-500">
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
                    {
                      edu.note ? (
                        <div className="flex flex-row px-2 my-2 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 mr-6" color={"#fff"} fill={"none"}>
                            <path d="M9.42613 3.06269C10.6836 2.35423 11.3124 2 12 2C12.6876 2 13.3164 2.35423 14.5739 3.06269L16.3239 4.04861C17.6292 4.78401 18.2819 5.15171 18.6409 5.76664C19 6.38157 19 7.13157 19 8.63158V10.3684C19 11.8684 19 12.6184 18.6409 13.2334C18.2819 13.8483 17.6292 14.216 16.3239 14.9514L14.5739 15.9373C13.3164 16.6458 12.6876 17 12 17C11.3124 17 10.6836 16.6458 9.42613 15.9373L7.67613 14.9514C6.37081 14.216 5.71815 13.8483 5.35908 13.2334C5 12.6184 5 11.8684 5 10.3684V8.63158C5 7.13157 5 6.38157 5.35908 5.76664C5.71815 5.15171 6.37081 4.78401 7.67613 4.04861L9.42613 3.06269Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M9 10.1667C9 10.1667 9.75 10.1667 10.5 11.5C10.5 11.5 12.8824 8.16667 15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.8825 15L17.5527 18.2099C17.9833 20.2723 18.1986 21.3035 17.7563 21.7923C17.3141 22.281 16.546 21.8606 15.0099 21.0198L12.7364 19.7753C12.3734 19.5766 12.1919 19.4773 12 19.4773C11.8081 19.4773 11.6266 19.5766 11.2636 19.7753L8.99008 21.0198C7.45397 21.8606 6.68592 22.281 6.24365 21.7923C5.80139 21.3035 6.01669 20.2723 6.44731 18.2099L7.11752 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                          <p>{edu.note}</p>
                        </div>
                      ) : null
                    }
                    
                    <div className="flex ml-6 my-4">
                    <Modal>
                      <ModalTrigger>
                        <Image onClick={() => setImg(edu.img)} src={edu.img} width={100} height={100} alt="certificate" className="rounded-md drop-shadow-md" />
                      </ModalTrigger>
                      <ModalBody>
                          <Image src={openImg} width={900} height={900} alt="certificate" className="rounded-md drop-shadow-md" />
                      </ModalBody>
                    </Modal>
                    
                    </div>
                  </div>
                </div>
                  
              </SwiperSlide>
       
          ))
        }
       
      </Swiper>

      
     
      </div>
</div>


  </div>
    

    </>
  );
};

export default EduScreen;
