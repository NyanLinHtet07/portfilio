"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SlideNavProps{
  isLightOn: boolean
}

const SlideNav:React.FC<SlideNavProps> = ({
  isLightOn
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        className="fixed top-4 right-20 z-50 text-white"
        onClick={toggleSidebar}
      >
        {isLightOn ? <Image src="/logo1.png" width={70} height={70} alt="logo" className=" drop-shadow-lg"/> 
                : <Image src="/logo2.png" width={70} height={70} alt="logo" className=" drop-shadow-lg"/> }
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="p-4 space-y-6 mt-32">
          <li>
            <a href="#about" className="hover:underline uppercase">
              About Me
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline uppercase">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline uppercase">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline uppercase">
              Projects
            </a>
          </li>
          <li>
            <a href="#recommendations" className="hover:underline uppercase">
              Recommendations
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default SlideNav;