"use client";

import React from "react";

const experiences = [
  {
    company: "Owaay Travel Myanmar",
    title: "Airline Ticketing Specialist",
    duration: "25 Dec 2019 - 30 Oct 2020",
    position: "left",
  },
  {
    company: "Global Green Future Co., Ltd",
    title: "Business Development Internship",
    duration: "12 Oct 2020 - 20 Jan 2021",
    position: "right",
  },
  {
    company: "Nordic Group Limited",
    title: "Procurement Associate",
    duration: "25 Jan 2021 - 30 June 2022",
    position: "left",
  },
  {
    company: "Nordic Group Limited",
    title: "Business Development Executive",
    duration: "1 July 2022 - 31 July 2023",
    position: "right",
  },
  {
    company: "Nordic Group Limited",
    title: "Senior Business Development Executive",
    duration: "1 Aug 2023 - 17 May 2024",
    position: "left",
  },
];

const ExperienceScreen = () => {
  return (
    <div className="text-white py-20">
      <h2 className="text-white text-4xl mt-20 font-bold drop-shadow-lg text-center mb-20">
        DISTINGUISHED PROFESSIONAL JOURNEY
      </h2>
      <div className="relative container mx-auto my-16">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex w-full mb-8 ${
              exp.position === "left" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`relative w-5/12 p-4 bg-white text-black shadow-md rounded-lg ${
                exp.position === "left" ? "mr-8" : "ml-8"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>

              {/* Connecting line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-1 w-16 bg-white ${
                  exp.position === "left" ? "-left-16" : "-right-16"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceScreen;
