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
import WordPullUp from "@/components/magicui/word-pull-up";
import { IconBuildingBank, IconClock, IconAward } from "@tabler/icons-react";


import HTMLFlipBook from "react-pageflip";

interface bookItem {
  id: number,
  dip: string,
  university: string,
  duration: string,
  note: null | string,
  img: string
}

const EduScreen = () => {
  const [openImg, setImg] = useState('');
  let [isOpen, setIsOpen] = useState(false);
  let [item, setItem] = useState('');
  
  let [bookItemData, setBookItem] = useState<bookItem | null>(null);
  let [flippedPages, setFlippedPages] = useState<number[]>([]);
  let [isBookOpen, setBookOpen] = useState(false);

  const togglePageFlip = (pageIndex: number) => {
    setFlippedPages((prevFlipped) => 
        prevFlipped.includes(pageIndex)
          ? prevFlipped.filter((index) => index !== pageIndex)
          : [...prevFlipped, pageIndex]
  )}

  function openBook(item: bookItem){
    setBookOpen(true);
    setBookItem(item);
  }

  function closeBook(){
    setBookOpen(false)
  }

  function open(item:any){
    setIsOpen(true);
    setItem(item)
  }

  function close(){
    setIsOpen(false);
  }

  const isPageFlipped = (pageIndex: number) => flippedPages.includes(pageIndex);



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
  {/* <WordPullUp
              className=" uppercase text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
              words="Accomplished Academic Achievements"
            /> */}
  <h2 className="text-white uppercase text-4xl mt-20 mb-12 font-bold drop-shadow-lg text-center">
  Accomplished Academic Achievements
                 </h2>

          
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
                <div className=" mt-32 ml-10">
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
      <Image src='/edu.png' width={350} height={700} alt="edu" className="" />
      
      </div>
      <div className=" col-span-3">
       
      <div className=" grid grid-cols-3 gap-3 mt-20">
        {
          eduList?.map((edu, index) => (
    
              <div className="flex flex-col justify-between p-2 my-1 rounded-r-xl border-r-4 border-slate-100 bg-slate-900 text-white w-60 h-80"
                    key={index}
                    onClick={() => openBook(edu)}>
                        <Image 
                          src="/diploma.png" 
                          alt="Book Cover" 
                          width={60} 
                          height={60} 
                          className="flex mx-auto mt-6" 
                        />
                        <p className="tracking-tight font-semibold text-2xl drop-shadow-xl">{edu.dip}</p>
                    
                        <div
                          className="w-full rounded-lg text-center mx-auto bg-slate-950 py-1 px-3 text-sm font-medium text-slate-100 focus:outline-none hover:text-black data-[hover]:bg-white/70 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
              Detail
            </div>
            </div>

          ))
        }
        
       
      </div>

      <Dialog open={isBookOpen} as="div" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClose={close}>
      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={closeBook} /> {/* This div captures clicks to close the modal */}
        
        <DialogPanel className="flex items-center justify-center min-h-screen p-4">
          {/* Page 1 */}
          <div
            className={`page absolute flex origin-left w-80 h-2/3 transform mx-auto ${
              isPageFlipped(1) ? 'turn z-10' : 'z-20'
            }`} // z-20 when not flipped, z-10 when flipped
            onClick={() => togglePageFlip(1)}
          >
            <div className={`front flex flex-col justify-between p-2 my-1 rounded-r-xl border-r-4 border-slate-100 bg-slate-900 text-white  h-full absolute right-0 w-full ${isPageFlipped(1) ? 'border-l-4 border-white rounded-l-xl' : 'border-r-4 border-white rounded-r-xl'}`}>
           
                        <Image 
                          src="/diploma.png" 
                          alt="Book Cover" 
                          width={70} 
                          height={70} 
                          className="flex mx-auto mt-6" 
                        />
                        <p className="tracking-tight font-semibold text-3xl drop-shadow-xl">{bookItemData?.dip}</p>
                    
                        <div
                          className="w-full rounded-lg text-center mx-auto bg-slate-950 py-4 px-3 text-sm font-medium text-slate-100 focus:outline-none hover:text-black data-[hover]:bg-white/70 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
              
            </div>
            </div>
            
            <div className={`back font-bold flex flex-col items-start justify-center px-2  bg-gray-800 text-slate-200 h-full absolute w-full ${isPageFlipped(1) ? 'border-l-4 border-white rounded-l-xl' : 'border-r-4 border-white rounded-r-xl'}`}>
                  <div className="flex items-start">
                     <IconBuildingBank className="mr-2 "/>
                      <p>{bookItemData?.university}</p>
                    </div>
                    <div className="flex  my-3">
                      < IconClock className=" mr-2" />
                      <p>{bookItemData?.duration}</p>
                    </div>
                    {
                      bookItemData?.note && (
                        <div className="flex my-3 ">
                          <IconAward className="mr-2"/>
                          <p>{bookItemData?.note}</p>
                        </div>
                      )}
            </div>
          </div>

          {/* Page 2 */}
          <div
            className={`page absolute flex origin-left w-80 h-2/3 transform ${
              isPageFlipped(2) ? 'turn z-20' : 'z-10'
            }`} // z-20 when flipped, z-10 when not flipped
            onClick={() => togglePageFlip(2)}
          >
            <div className={`front text-xl sm:text-3xl md:text-5xl flex items-center justify-start p-3 font-bold bg-gray-900 h-full absolute right-0 w-full ${isPageFlipped(2) ? 'border-l-4 border-white rounded-l-xl' : 'border-r-2 border-white rounded-r-xl'}`}>
            <Image  src={bookItemData?.img || "/certificate.png"} width={400} height={300} alt="certificate" className="rounded-md drop-shadow-md" />
            </div>
            <div className={`back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-full absolute w-full ${isPageFlipped(2) ? 'border-l-4 border-white rounded-l-xl' : 'border-r-2 border-white rounded-r-xl'}`}>
           
            </div>
          </div>
        </DialogPanel>
        
      </Dialog>
     
      </div>
</div>




  </div>
    

    </>
  );
};

export default EduScreen;
