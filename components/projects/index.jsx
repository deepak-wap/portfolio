import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      img: '/images/holidify.png',
      href: 'https://www.holidify.com/'
    },
    {
      key: 2,
      img: '/images/vr.png',
      href: 'https://www.infivr.com/'
    },
    {
      key: 3,
      img: '/images/ramagya.png',
      href: 'https://ramagyaschool.com/'
    },
    {
      key: 4,
      img: '/images/chennai-taxi.png',
      href: 'https://chennaitaxiservice.com/'
    },
    {
      key: 5,
      img: '/images/maya-architects.png',
      href: 'https://www.mayaarchitects.com/'
    },
    {
      key: 6,
      title: 'Website Design',
      desc: 'Web Design, App Design',
      img: '/images/mcc-school.png',
      href: 'http://mccpublicschool.edu.in/'
    },
  ]

    return (
        <div
        className="grid grid-cols-1 px-[8.6%] pb-16 bg-[#97B2BB]"
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
        <h2 className="text-[40px] text-black font-grotesk font-bold leading-[48px] mb-10">
          RECENT PROJECT
        </h2>
        <div className="grid grid-cols-3 gap-x-8">
          {
            projects.map((project,index) => {
              return (
                <Card className="mb-10 shadow-xl shadow-inner overflow-hidden" key={index}>
                    <Link href={project.href} target="_blank" >
                      <div 
                        className="project_effect h-[250px] rounded-lg"  
                        style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover' }}
                      >
                      </div>
                    </Link>
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