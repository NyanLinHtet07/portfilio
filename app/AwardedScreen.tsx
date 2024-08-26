"use client";

import React from 'react';

const AwardedScreen = () => {
    return (
        <div className='py-20'>
            <h2 className="text-white text-4xl mt-40 font-bold drop-shadow-lg text-center mb-20">
                HONORED WITH RECOGNIZED AWARDS
            </h2>

            <div className=' px-4 py-6 rounded-lg drop-shadow-lg shadow-xl text-white w-8/12 text-center mx-auto'>
                    <h2 className=' text-5xl font-bold'>March star of the month award in Oway Travel</h2>
                    <h2 className=' font-semibold mt-10 text-4xl'>2020</h2>
                </div>

            <div className=' px-4 py-6 rounded-lg drop-shadow-lg shadow-xl text-white w-8/12 text-center mx-auto'>
                    <h2 className=' text-5xl font-bold'>Distinction Award in Supply Chain and Logistics Management (NCFE UK Diploma)</h2>
                    <h2 className=' font-semibold mt-10 text-4xl'>2022</h2>
                </div>

            {/* <div className=' grid grid-cols-2 gap-4'>
                <div className=' px-4 py-6 rounded-lg drop-shadow-lg shadow-xl bg-white w-8/12 text-center mx-auto'>
                    <h2 className=' text-5xl font-bold'>March star of the month award in Oway Travel</h2>
                    <h2 className=' text-lg font-semibold mt-5'>2020</h2>
                </div>
                <div className=' px-4 py-6 rounded-lg drop-shadow-lg shadow-xl bg-white w-8/12 text-center mx-auto'>
                    <h2 className=' text-xl font-bold'>Distinction Award in Supply Chain and Logistics Management (NCFE UK Diploma)</h2>
                    <h2 className=' text-lg font-semibold'>2022</h2>
                </div>
            </div> */}
        </div>
    )
}

export default AwardedScreen;
