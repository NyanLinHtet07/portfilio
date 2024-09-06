"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import { EffectCards } from "swiper/modules";

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import WordPullUp from "@/components/magicui/word-pull-up";
import { IconBuildingBank, IconClock, IconAward } from "@tabler/icons-react";

import HtmlFlipBook from "react-pageflip"



const EduScreen = () => {
  const [openImg, setImg] = useState('');
  let [isOpen, setIsOpen] = useState(false);
  let [item, setItem] = useState('');
  const [flipped, setFlipped] = useState(false);

  function open(item:any){
    setIsOpen(true);
    setItem(item)
  }

  function close(){
    setIsOpen(false);
  }

  const handleFlip = () => {
    setFlipped(! flipped)
  }

  const eduList = [
    {id:1, dip:"Bachelor of Science ~ B.Sc.(Botany)", university:"Taunggyi University", duration:"2014 - 2019", note: null, img:"/certificate.png" },
    {id:2, dip:"Diploma ~ International Business Management (US, OSG)", university:"Mimber Institute of Management Study", duration:"2020 February - 2020 December", note: null, img:"/certificate.png" },
    {id:3, dip:"Diploma ~ Logistics Materials and Supply Chain Management (UK, NCFE)", university:"Mimber Institute of Management Study", duration:"2022 June - 2022 October", note: "Distinction", img:"/certificate.png" },
    {id:4, dip:"German Language Study A1, A2 & B1", university:"Gothe Institude", duration:"2022 December - 2024 Present", note: null, img:"/certificate.png" },
    {id:5, dip:"Certificate ~ Cabin Crew Language and Operation", university:"Myanmar Flight Attendent School", duration:"2019", note: null, img:"/certificate.png" },
    {id:6, dip:"Certificate ~ Airline Ticket Reversation", university:"Trust Vocational Institute", duration:"2019", note: null, img:"/certificate.png" },
  
  ]

  return (
    <>
  <div>
  <Image src='/book.png' width={100} height={100} alt="edu" className=" flex mx-auto mb-5" />
  <WordPullUp
              className=" uppercase text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="Accomplished Academic Achievements"
            />

          
  <div className=" grid grid-cols-5 gap-4 max-w-5xl">
      <div className=" col-span-3 mx-auto">
      <Image src='/edu.png' width={350} height={700} alt="edu" className="" />
      
      </div>
      <div className=" col-span-2">
       
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          eduList?.map((edu, index) => (
               <SwiperSlide key={index}>
                <div className="mt-20 ml-10">
                  <div className=" drop-shadow-lg bg-slate-300 backdrop-blur-md  py-3 px-4 h-96 w-80 rounded-xl text-slate-900 transition-opacity duration-500 flex flex-col">
                  <p className="text-2xl font-semibold mt-4 mb-5">{ edu.dip }</p>
                  
                  <div className=" flex flex-col justify-center items-start flex-grow font-semibold px-2">
                    <div className="flex flex-row  my-1">
                     <IconBuildingBank className="mr-2 "/>
                      <p>{edu.university}</p>
                    </div>
                    <div className="flex flex-row  my-1">
                      < IconClock className=" mr-2" />
                      <p>{edu.duration}</p>
                    </div>
                    {
                      edu.note && (
                        <div className="flex flex-row  my-1 ">
                          <IconAward className="mr-2"/>
                          <p>{edu.note}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex my-2">
                      <Image onClick={() => open(edu.img)} src={edu.img} width={100} height={100} alt="certificate" className="rounded-md drop-shadow-md" />
                   
                    
                    </div>
                  </div>
                </div>
                  
              </SwiperSlide>
       
          ))
        }
       
      </Swiper>

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none " onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl ring-2 ring-white rounded-xl bg-white/10  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
            
              <Image src={item} width={800} height={600} alt={""} />
            
            </DialogPanel>
          </div>
        </div>
      </Dialog>
     
      </div>
  </div>

  <div className=" grid grid-cols-5 gap-4 w-full">
      <div className=" col-span-2 mx-auto">
      {/* <Image src='/edu.png' width={350} height={700} alt="edu" className="" /> */}
      
      </div>
      <div className=" col-span-3">
       
      <div className=" grid grid-cols-3 gap-3">
        {
          eduList?.map((edu, index) => (
             
         
            <div className="drop-shadow-2xl bg-slate-300 backdrop-blur-md py-3 px-4 w-52 h-60 rounded-r-xl rounded-l-sm border-r-4 border-l-2 border-white text-slate-900 transition-opacity duration-500 flex flex-col justify-between">
             <Image src="/graduation.png" alt="Book Cover" width={50} height={50} className=" flex mx-auto" />
            <p className="text-lg font-bold ">{edu.dip}</p>
  
            <Button onClick={() =>handleFlip}
              className="rounded-2xl flex mx-auto bg-slate-800 py-1 px-3 text-sm font-medium text-white focus:outline-none hover:text-black data-[hover]:bg-white/70 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Details
            </Button>
          </div>

          ))
        }
       
      </div>

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none " onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl ring-2 ring-white rounded-xl bg-white/10  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
            
              <Image src={item} width={800} height={600} alt={""} />
            
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
