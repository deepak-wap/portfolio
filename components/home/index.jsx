import Head from "next/head";
import Image from "next/image";
import { useEffect } from 'react'
import "font-awesome/css/font-awesome.min.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "antd";

const Homepage = () => {
  useEffect(() => {
    const resumeUrl = '/assets/resume.pdf'
    const a = document.createElement('a')
    if (!sessionStorage.getItem('download')) a.href = resumeUrl
    a.download = 'deepak-mern-full-stack.pdf'
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
    return sessionStorage.setItem('download', 'true')
  }, []);

  const [word] = useTypewriter({
    words: ["FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
    loop: 0,
  });

  return (
    <>
      <Head>
        <title>Deepak - Full Stack Developer</title>
      </Head>
      <div id="home">
        <div className="grid grid-cols-2 px-[8.5%] bg-[#F7F7FF]">
          {" "}
          {/* bg-[#05192E] #EFFBF8*/}
          <div className="flex flex-col justify-center">
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
              With a comprehensive skill set in MongoDB, Express.js, React, and
              Node.js, I engineer robust and adaptable web solutions, ensuring
              seamless functionality and user satisfaction at every stage of
              development.
            </p>
            <div className="flex items-center gap-6 common-btn">
              <a href={'/assets/resume.pdf'} download='deepak-mern-full-stack'>
                <Button type="primary w-[192px] h-[56px] rounded-[30px] bg-[black] font-medium">
                  <span className="text-[15.5px] font-grotesk tracking-[0.3px]">
                    DOWNLOAD CV
                  </span>
                </Button>
              </a>
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
          <div className="px-8 pt-10 w-[546px] h-[581px]">
            <Image
              src={"/images/home-banner.png"}
              width={1092}
              height={1162}
              alt="home-banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
