"use client";

import React from 'react';

const AwardedScreen = () => {
    return (
        <div className='py-20'>
            <h2 className="text-white text-4xl mt-20 font-bold drop-shadow-lg text-center mb-20">
                HONORED WITH RECOGNIZED AWARDS
            </h2>

            <div className=' grid grid-cols-2 gap-4'>
                <div className=' px-4 py-6 rounded-lg drop-shadow-lg bg-white bg-opacity-70'>
                    <h2 className=' text-xl font-bold'>March star of the month award in Oway Travel</h2>
                    <h2 className=' text-lg font-semibold'>2020</h2>
                </div>
                <div className=' px-4 py-6 rounded-lg drop-shadow-lg bg-white bg-opacity-70'>
                    <h2 className=' text-xl font-bold'>Distinction Award in Supply Chain and Logistics Management (NCFE UK Diploma)</h2>
                    <h2 className=' text-lg font-semibold'>2022</h2>
                </div>
            </div>
        </div>
    )
}

export default AwardedScreen;
