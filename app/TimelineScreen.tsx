import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineScreen() {
  const data = [
    {
      title: "December 2019 - October 2020",
      content: (
        <div className="pb-10">
          <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-6">
            Airline Ticketing Specialist
          </p>
          <p className="text-neutral-200 text-2xl font-semibold ml-4">
            Owaay Travel Myanmar
          </p>
          
         
        </div>
      ),
      position: 'right'
    },
    {
      title: "October 2020 - January 2021",
      content: (
        <div className="pb-10">
          <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-6">
            Business Development Internship
          </p>
          <p className="text-neutral-200 text-2xl font-semibold ml-4">
            Global Green Future Co., Ltd
          </p>
         
        </div>
      ),
      position: "left"
    },
    {
      title: "January 2021 - June 2022",
      content: ( 
        <div className="pb-10">
          <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-6">
            Procurement Associate
          </p>
          <p className="text-neutral-200 text-2xl font-semibold ml-4">
            Nordic Group Limited
          </p>
         
        </div>
      ),
      position: "right"
    },

    {
      title: "July 2022 - July 2023",
      content: (
        <div className="pb-10">
          <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-6">
            Business Development Executive
          </p>
          <p className="text-neutral-200 text-2xl font-semibold ml-4">
            Nordic Group Limited
          </p>
         
        </div>
      ),
      position: "left"
    },

    {
      title: "August 2023 - May 2024",
      content: (
        <div className="pb-10">
          <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-6">
            Senior Business Development Executive
          </p>
          <p className="text-neutral-200 text-2xl font-semibold ml-4">
            Nordic Group Limited
          </p>
         
        </div>
      ),
      position: "right"
    },
  ];
  return (
    <div className="w-full pb-40">
      <Timeline data={data} />
    </div>
  );
}
