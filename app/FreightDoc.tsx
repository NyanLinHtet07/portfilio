"use client";

import dynamic from "next/dynamic";
import React from "react";


const PdfViewer = dynamic(() => import('./../components/ui/pdf-viewer'), {
    ssr: false,
})

const FreightDoc = () => {
    return (
        <>
        <div className=" text-white text-4xl uppercase">
            I Made It
        </div>
        <div>
            <PdfViewer file="/Freight.pdf" />
        </div>
        </>
    )
}

export default FreightDoc;