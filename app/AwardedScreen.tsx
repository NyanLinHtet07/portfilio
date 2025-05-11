"use client";

import React from 'react';
import {motion} from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import Image from 'next/image';

const AwardedScreen = () => {
    return (
        <div className=' pt-32 pb-32'>
             
            {/* <LampContainer> */}
            <Image src='/trophy.png' width={80} height={80} alt="trophy" className=" flex mx-auto  drop-shadow-xl -mt-10" />
                <motion.h1
                    initial={{ opacity:0.5, y: 100}}
                    whileInView={{ opacity:1, y:0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className=' bg-gradient-to-br from-slate-300 to-slate-600 pt-2 pb-4 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-4xl'    
                >
                    HONORED WITH RECOGNIZED AWARDS
                </motion.h1>

                <motion.p
                    initial={{ opacity:0.5, y: 100}}
                    whileInView={{ opacity:1, y:20}}
                    transition={{
                        delay: 0.5,
                        duration: 0.9,
                        ease: "easeInOut"
                    }}
                    className=' uppercase mt-8 bg-gradient-to-br text-white from-slate-300 to-slate-500 pt-2 bg-clip-text text-center text-lg font-semibold tracking-tight text-transparent md:text-2xl'    
                >
                    Star of the month award in Oway Travel <br /> 2020
                </motion.p>

                <motion.p
                    initial={{ opacity:0.5, y: 100}}
                    whileInView={{ opacity:1, y:40}}
                    transition={{
                        delay: 0.7,
                        duration: 1,
                        ease: "easeInOut"
                    }}
                    className=' uppercase  bg-gradient-to-br text-white from-slate-300 to-slate-500 bg-clip-text text-center text-lg font-semibold tracking-tight text-transparent md:text-2xl'    
                >
                    Distinction Award in Supply Chain and Logistics Management (NCFE UK Diploma) <br /> 2022
                </motion.p>

            {/* </LampContainer> */}
           
        </div>
    )
}

export default AwardedScreen;
