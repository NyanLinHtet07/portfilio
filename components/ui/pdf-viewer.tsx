"use client";

import React, {useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import { version } from 'pdfjs-dist/package.json';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
    file: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages } : {numPages: number}) => {
        setNumPages(numPages);
    };

    return (
        <div className=" w-96 h-96">
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}/>
            </Document>

            <div className=" text-white">
                <p>
                    Page {pageNumber} of {numPages}
                </p>

                <button
                    onClick={() => 
                        setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)
                    }>
                        Previous
                </button>

                <button
                    onClick={() => 
                        setPageNumber( numPages && pageNumber < numPages ? pageNumber + 1 : pageNumber)   
                    }></button>
            </div>
        </div>
    )
}

export default PdfViewer;