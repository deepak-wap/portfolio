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

const About = ()=>{
    return (
      <div className="grid grid-cols-2 px-[8.5%] pb-16" id="about">
        <div className="pl-24 pt-10 pb-24 mt-28 relative">
          <Image
            src="/images/about-banner.png"
            width={450}
            height={551}
            alt="about-banner"
            className="relative z-[1]"
          />
          <Image
            src="/images/effect-1.svg"
            width={339}
            height={339}
            alt="effect-1"
            className="absolute left-[-10px] bottom-[2px]"
          />
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
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <div className="flex gap-3 mb-10">
            <div className="w-[111px] h-[117px] bg-[#112538] rounded-[8px] border boder-[1px] border-slate-500 px-5 py-4">
              <h3 className="text-[27px] text-white font-grotesk font-medium">
                280+
              </h3>
              <p className="text-[13px] text-white font-grotesk leading-[17px]">
                Google Review
              </p>
            </div>
            <div className="w-[125px] h-[117px] bg-[#112538] rounded-[8px] border boder-[1px] border-slate-500 px-5 py-4">
              <p className="text-[27px] text-white font-grotesk font-medium">
                15+
              </p>
              <p className="text-[13px] text-white font-grotesk leading-[17px]">
                Years Experience
              </p>
            </div>
            <div className="w-[125px] h-[117px] bg-[#112538] rounded-[8px] border boder-[1px] border-slate-500 px-5 py-4">
              <p className="text-[27px] text-white font-grotesk font-medium">
                49+
              </p>
              <p className="text-[13px] text-white font-grotesk leading-[17px]">
                Award Winning
              </p>
            </div>
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
    )
}

export default About