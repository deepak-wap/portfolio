import Head from "next/head";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "antd";

const Homepage = () => {  
  const [word] = useTypewriter({
    words: ["FULL STACK DEVELOPER"],
    loop: 1,
  });

  return (
    <>
      <Head>
        <title>Deepak - Full Stack Developer</title>
      </Head>
      <div id="home">
        <div className="grid grid-cols-2 px-[8.5%] bg-[#F7F7FF]"> {/* bg-[#05192E] */}
          <div className="flex flex-col justify-start mt-28 pt-24">
            <Button
              type="primary"
              className="items-center bg-[#063661] w-fit h-[30px] px-3 py-0 rounded-[4px]"
            >
              <h1 className="text-[16px] text-white font-grotesk tracking-[4px]">
                DEEPAK - MERN DEVELOPER
              </h1>
            </Button>
            <h2 className="text-[70px] text-black font-grotesk font-bold leading-snug">
              HAY! I'M DEEPAK
            </h2>
            <h2 className="text-[48px] text-[#0788FF] font-grotesk font-bold leading-snug mb-5">
              {word}
              <Cursor />
            </h2>
            <p className="text-[20px] text-black font-grotesk mb-6">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
            <div className="flex items-center gap-6 common-btn">
              <Button type="primary w-[192px] h-[56px] rounded-[30px] bg-[black] font-medium">
                <span className="text-[15.5px] font-grotesk tracking-[0.3px]">
                  DOWNLOAD CV
                </span>
              </Button>
              <div className="flex gap-[9px]">
                <div className="hover:mt-[-2px] w-[46px] h-[46px] bg-[#1877F2] rounded-[50%] border-2 border-white flex justify-center items-center">
                  <a href="/" className="text-[20px]">
                    <i className="fa fa-facebook text-white font-grotesk font-bold" />
                  </a>
                </div>
                <div className="hover:mt-[-2px] w-[46px] h-[46px] bg-[#F26798] rounded-[50%] border-2 border-white flex justify-center items-center">
                  <a href="/" className="text-[20px]">
                    <i className="fa fa-dribbble text-white font-grotesk font-bold" />
                  </a>
                </div>
                <div className="hover:mt-[-2px] w-[46px] h-[46px] bg-[#1877F2] rounded-[50%] border-2 border-white flex justify-center items-center">
                  <a href="/" className="text-[20px]">
                    <i className="fa fa-linkedin text-white font-grotesk font-bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-28 pt-10">
            <Image src={"/images/home-banner.png"} width={546} height={581} alt="home-banner"/>
          </div>
        </div>
        <div className="w-full flex items-center bg-[#07233B] px-[8.6%] py-10">
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <Image src={"/images/brand-1.svg"} width={172} height={40} alt="brand-1"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={"/images/brand-2.svg"} width={172} height={40} alt="brand-2"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={"/images/brand-1.svg"} width={172} height={40} alt="brand-1"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={"/images/brand-2.svg"} width={172} height={40} alt="brand-2"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={"/images/brand-1.svg"} width={172} height={40} alt="brand-1"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Homepage;
