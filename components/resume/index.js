import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-[8.5%] py-2 bg-[#05192E]" id="resume">
        <div className="grid grid-cols-12 h-[1280px] px-12 mt-28">
          <div className="col-span-4 w-[340px] flex flex-col items-center py-20 bg-[#181818]">
            <div className="w-[245px] h-[245px] rounded-[50%] bg-[#0788FF] border border-[4px] border-[#013185] overflow-hidden mb-4">
              <div className="w-[300px] mt-[-20px]">
                <Image src={'/images/d-2.png'} width={720} height={480} />
              </div>
            </div>
            <h2 className="text-[25px] text-white font-grotesk mb-1">
              About Me
            </h2>
            <p className="text-[15px] text-white text-center font-grotesk px-14 leading-[20px] mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada
              justo. Ut aliquam augue dui.
            </p>
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[30px] h-[30px] p-[7px] bg-[#0774BE]  rounded-[50%]">
                  <FaPhoneAlt className="text-[#00050D]" />
                </div>
                <span className="text-white font-grotesk">+91 8802966275</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[30px] h-[30px] bg-[#0774BE] p-[5px] rounded-[50%]">
                  <MdEmail className="text-[20px] text-[#00050D]" />
                </div>
                <span className="text-[17px] text-white font-grotesk">
                  wapdk.09@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[30px] h-[30px] bg-[#0774BE] p-[7px] rounded-[50%]">
                  <FaMapMarkerAlt className="text-[#00050D]" />
                </div>
                <span className="text-white font-grotesk">
                  123 Anywhere St., Any City
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className=" border border-[2px] border-[#0774BE] rounded-[40px] mb-4">
                <h2 className="text-[18px] text-white font-grotesk px-20 py-1">
                  Language
                </h2>
              </div>
              <ul className="list-disc leading-[29.8px] px-12">
                <li className="text-[17px] text-[#9F9F9F] font-normal tracking-[0.8px]">
                  Hindi
                </li>
                <li className="text-[17px] text-[#9F9F9F] font-normal tracking-[0.8px]">
                  English
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <div className=" border border-[2px] border-[#0774BE] rounded-[40px] mb-4">
                <h2 className="text-[18px] text-white font-grotesk px-20 py-1">
                  Expertise
                </h2>
              </div>
              <ul className="list-disc leading-[29.8px] px-12">
                <li className="text-[17px] text-[#9F9F9F] font-normal tracking-[0.8px]">
                  Management Skills
                </li>
                <li className="text-[17px] text-[#9F9F9F] font-normal tracking-[0.8px]">
                  Creativity
                </li>
                <li className="text-[17px] text-[#9F9F9F] font-normal tracking-[0.8px]">
                  Leadership
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-8 py-[17%] bg-white">
            <div className="h-[177px] bg-[#013185] text-center mb-9">
              <h1 className="text-[70px] text-white font-grotesk font-bold tracking-[4px]">
                DEEPAK
              </h1>
              <h3 className="text-[35px] text-white font-grotesk font-bold tracking-[4px]">
                MERN DEVELOPER
              </h3>
            </div>
            <div className="mb-6">
              <div className="px-2 mb-5">
                <div className="w-[226px] bg-[#003285] rounded-[40px]">
                  <h2 className="text-[18px] text-white font-grotesk text-center py-1">
                    Experience
                  </h2>
                </div>
              </div>
              <div className="px-2 mb-4">
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Arowwai Industries
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Sydney - Australia
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3 mb-1">
                  2020 - 2022
                </p>
                <p className="w-[450px] text-[15px] font-grotesk font-medium px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada
                  justo. Ut aliquam augue.
                </p>
              </div>
              <div className="px-2 mb-4">
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Wardiere Inc.
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Sydney - Australia
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3 mb-1">
                  2016 - 2020
                </p>
                <p className="w-[450px] text-[15px] font-grotesk font-medium px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada
                  justo. Ut aliquam augue.
                </p>
              </div>
              <div className="px-2 mb-4">
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Studio Showde
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Sydney - Australia
                </p>
                <p className="text-[17px] font-grotesk font-bold px-3 mb-1">
                  2010 - 2015
                </p>
                <p className="w-[450px] text-[15px] font-grotesk font-medium px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada
                  justo. Ut aliquam augue.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="px-2">
                <div className="w-[226px] bg-[#003285] rounded-[40px]">
                  <h2 className="text-[18px] text-white font-grotesk text-center py-1 mb-5">
                    Education
                  </h2>
                </div>
              </div>
              <div className="px-2 mb-4">
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Borcelle University
                </p>
                <p className="text-[15px] font-grotesk font-medium px-3">
                  Bachelor of Business Management
                </p>
                <p className="text-[15px] font-grotesk font-medium px-3">
                  2014 - 2023
                </p>
              </div>
              <div className="px-2 mb-4">
                <p className="text-[17px] font-grotesk font-bold px-3">
                  Borcelle University
                </p>
                <p className="text-[15px] font-grotesk font-medium px-3">
                  Bachelor of Business Management
                </p>
                <p className="text-[15px] font-grotesk font-medium px-3">
                  2014 - 2023
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="px-2">
                <div className="w-[226px] bg-[#003285] rounded-[40px] mb-5">
                  <h2 className="text-[18px] text-white font-grotesk text-center py-1">
                    Skills Summary
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
