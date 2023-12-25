import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "@/styles/Home.module.css";
import Navbar from "../navbar";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button, Layout, Card } from "antd";

const Experience = ()=>{
  const experiences = [
    {
      key: 1,
      company: 'WELAB',
      designation: 'Front-end Developer',
      type: 'REMOTE',
      join: 'JAN 2019',
      leave: 'PRESENT',
      time: 'FULL TIME',      
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .',
    },
    {
      key: 2,
      company: 'WELAB',
      designation: 'Front-end Developer',
      type: 'REMOTE',
      join: 'JAN 2019',
      leave: 'PRESENT',
      time: 'FULL TIME',      
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .',
    },
    {
      key: 3,
      company: 'WELAB',
      designation: 'Front-end Developer',
      type: 'REMOTE',
      join: 'JAN 2019',
      leave: 'PRESENT',
      time: 'FULL TIME',      
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .',
    },
  ]
    return (
        <div
          className="grid grid-cols-1 px-[8.6%] pb-16 bg-[#F7F7FF]"
          id="experience"
        >
        <div className="mt-28">
          <Button
            type="primary"
            className="items-center bg-[#063661] w-fit h-[29px] p-0 px-3 mb-3 rounded-[4px]"
          >
            <h1 className="text-[16px] text-white font-grotesk tracking-[4px]">
              EXPERIENCE
            </h1>
          </Button>
          <h2 className="text-[40px] text-black font-grotesk font-bold leading-[48px] mb-11">
            MY WORK <span className="text-[#0788FF]">EXPERIENCE</span>
          </h2>
        </div>
        <div>
          {
            experiences.map((experience, index) => {
              return (
                <div className="grid grid-cols-12 px-2 py-6 bg-[#063660] rounded-[10px] mb-4" key={index}>
                  <div className="col-span-3">
                    <div className="ml-4 w-[250px] h-[200px] px-5 py-5 bg-[#0788FF] rounded-[8px]">
                      <h4 className="text-[24px] text-white font-grotesk font-bold leading-[28.8px] mb-2">
                        {experience.designation}
                      </h4>
                      <span className="text-[14px] text-white font-grotesk mb-2">
                        {experience.company} | {experience.type}
                      </span>
                      <p className="text-[16px] text-white font-grotesk mb-4">
                        {experience.join} - {experience.leave}
                      </p>
                      <button className="bg-white px-4 py-[2px] rounded-[40px]">
                        <span className="text-[12px] text-[#040c16] font-grotesk font-bold">
                          {experience.time}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-span-9 px-4 ">
                    <h5 className="text-[32px] text-white font-grotesk font-bold mb-1">
                      About Company
                    </h5>
                    <p className="text-[16px] text-white font-grotesk leading-[25.6px]">
                      {experience.description}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    )
}

export default Experience