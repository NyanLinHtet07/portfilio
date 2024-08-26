"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import {motion} from "framer-motion";

const scores = [
    {language: "English", score: 95, color: '#e63946'},
    {language: "Deutsh", score: 85, color: '#f1faee'},
    {language: "Burmese", score: 95, color: '#a8dadc'},
    {language: "Nepalese", score: 90, color: '#457b9d'},
    {language: "Hindi", score: 85, color: '#bde0fe'},
]

const LanguageScreen:React.FC = () => {
    const { ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return(
        <>
           <div className=" mx-auto text-center pt-24">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                    Accomplished Academic Achievements
                    </h2>

                <div ref={ref} className="language-race w-10/12 mx-auto mt-10 bg-white bg-opacity-70 rounded-lg">
                    { scores.map((item, index) => (
                        <div className="  grid grid-cols-6 gap-2" key={index}>
                            <div className=" drop-shadow-lg mt-5 col-span-1 text-lg font-semibold" style={{ color: item.color }}>
                                { item.language }
                            </div>
                            <motion.div
                            key={index}
                            animate={{width: inView ? `${item.score}%`: '0%'}}
                            transition={{duration: 2, delay:index * 0.5}}
                            className="language-bar drop-shadow-lg col-span-5"
                            style={{
                                background: item.color,
                                margin:'20px',
                                color:'white',
                                fontWeight: "bold",
                               
                            }}
                            >
                         {item.score}

                        </motion.div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default LanguageScreen;