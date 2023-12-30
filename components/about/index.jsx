import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "@/styles/Home.module.css";
import Navbar from "../navbar";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button, Layout, Card } from "antd";

const About = () => {
  return (
    <div className="grid grid-cols-2 px-[8.5%]" id="about">
      <div className="pl-24 pt-10 pb-24 mt-28 relative">
        <div className="w-[450px] h-[519px] bg-gradient-to-t from-[#697d8f] to-[#113c61] rounded-[30px] overflow-hidden">
          <div 
            className="w-[125px] h-[117px] bg-[#112538] rounded-tl-[30px] rounded-br-[30px] absolute px-5 py-4"
          >
            <p className="text-[27px] text-white font-grotesk font-medium">
              2+
            </p>
            <p className="text-[13px] text-white font-grotesk leading-[17px]">
              Years Experience
            </p>
          </div>
          <Image
            src="/images/about-banner.png"
            width={600}
            height={736}
            alt="about-banner"
          />
        </div>
      </div>
      <div className="pl-12 mt-28">
        <Button
          type="primary"
          className="items-center bg-[#063661] w-fit h-[29px] p-0 px-3 mb-3 rounded-[4px]"
        >
          <h1 className="text-[16px] text-white font-grotesk tracking-[4px]">
            ABOUT US
          </h1>
        </Button>
        <div className="w-[583px] flex justify-between items-start mb-5">
          <h2 className="text-[40px] text-black font-grotesk font-bold leading-[48px]">
            <p>I AM AVAILABLE FOR</p>
            <p className="text-[#0788FF]">UI UX DESIGN</p>
            <p>PROJECTS</p>
          </h2>
          <Image
            src="/images/effect-1.svg"
            width={151}
            height={151}
            alt="effect-1"
          />
        </div>
        <p className="text-[16px] text-black font-grotesk w-[380px] leading-[25px] mb-8">
          My experience spans across the entire development cycle, allowing me
          to build and deploy applications that are efficient, responsive, and
          adaptable. Combining technical proficiency with a passion for clean and
          maintainable code, I am dedicated to producing top-notch applications
          that exceed expectations.
        </p>
        <div className="flex gap-3 mb-10">
          
        </div>
        <div className="common-btn">
          <Button type="primary w-[192px] h-[56px] rounded-[30px] bg-[black] font-medium">
            <span className="text-[15.5px] font-grotesk tracking-[0.3px]">
              GET IN TOUCH
              <i className="fa fa-long-arrow-right text-[16px] ml-2"></i>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
