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

const Project = ()=>{
  const projects = [
    {
      key: 1,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
    {
      key: 2,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
    {
      key: 3,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
    {
      key: 4,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
    {
      key: 5,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
    {
      key: 6,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/popup-project-1.jpg',
      href: '/'
    },
  ]

    return (
        <div
        className="grid grid-cols-1 px-[8.6%] pb-16 bg-[#07233B]"
        id="projects"
      >
        <div className="mt-28">
        <Button
          type="primary"
          className="items-center bg-[#063661] w-fit h-[29px] px-3 py-0 mb-3 rounded-[4px]"
        >
          <h1 className="text-[16px] text-white font-grotesk tracking-[4px]">
            MY WORK
          </h1>
        </Button>
        <h2 className="text-[40px] text-white font-grotesk font-bold leading-[48px] mb-10">
          RECENT PROJECT
        </h2>
        <div className="grid grid-cols-3 gap-x-8">
          {
            projects.map((project,index) => {
              return (
                <Card className=" h-[350px] mb-10" key={index}>
                  <Image
                    src={project.img}
                    width={328}
                    height={246}
                    className="mb-4 rounded-[8px]"
                    alt={`project-${project.title}`}
                  />
                  <div className="flex justify-between items-end pr-1">
                    <div>
                      <h5 className="text-[20px] text-black font-grotesk font-semibold">
                        {project.title}
                      </h5>
                      <p className="text-[#707476] font-grotesk">
                        {project.desc}
                      </p>
                    </div>
                    <div className="w-[45px] h-[45px] bg-[#1877F2] rounded-[50%] border-2 border-black flex justify-center items-center">
                      <a href="/" className="text-[20px]">
                        <i className="fa fa-long-arrow-right text-white font-grotesk font-bold" />
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })
          }
        </div>
        </div>
      </div>
    )
}

export default Project