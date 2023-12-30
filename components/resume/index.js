import Image from "next/image";
import { 
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaFigma,
  FaAngular,
  FaVuejs,
  FaAws,
  FaGitlab,
  FaGithub,
  FaDocker,
  FaWordpress,
  FaDigitalOcean,
  FaJava
} from "react-icons/fa";
import {
  SiMaterialdesign,
  SiAdobexd,
  SiNuxtdotjs,
  SiZoho,
  SiJirasoftware,
  SiApachekafka,
  SiMysql,
  SiAmazondynamodb,
  SiExpress,
  SiFastify,
  SiPython
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoBitbucket } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { GiCrystalWand, GiMushroomsCluster } from "react-icons/gi";
import { VscAzure } from "react-icons/vsc";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-[#05192E]" id="resume">
        <div className="grid grid-cols-12 h-[1280px]">
          <div className="col-span-3 flex flex-col items-center py-20 bg-[#181818]">
            <div className="w-[240px] h-[240px] rounded-[50%] bg-[#0788FF] overflow-hidden mb-8">
              <div className="w-[300px] mt-[-8%]">
                <Image src={'/images/resume.png'} width={720} height={480} />
              </div>
            </div>
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
          <div className="col-span-9 py-[10%] bg-white">
            <div className="py-8 bg-[#013185] text-center mb-9">
              <h1 className="text-[70px] text-white font-grotesk font-bold tracking-[4px] leading-[80px]">
                DEEPAK
              </h1>
              <h3 className="text-[35px] text-white font-grotesk font-bold tracking-[4px]">
                MERN DEVELOPER
              </h3>
            </div>
            <div className="px-8">
              <div className="mb-6">
                <div className="px-2 mb-5">
                  <div className="w-[226px] bg-[#003285] rounded-[40px]">
                    <h2 className="text-[18px] text-white font-grotesk text-center py-1">
                      Profile
                    </h2>
                  </div>
                </div>
                <div className="px-2 mb-4">
                  <p className="text-[16px] font-grotesk px-3">
                  Accomplished Full-Stack MERN Developer adept at crafting robust web applications with expertise in MongoDB, Express.js, React, and Node.js. Specialized in both front-end and back-end development, consistently delivering user-friendly and scalable solutions. Proven track record of creating high-performance applications through a comprehensive understanding of the MERN stack. Experienced in translating project requirements into seamless user experiences, ensuring optimal functionality and efficiency. A skilled professional committed to delivering innovative, maintainable solutions that meet the highest standards of quality and client satisfaction.
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
                  <div className="ui">
                      <div className="text-start mt-2">
                        <h2 className="font-bold" style={{ fontSize: "16px" }}>
                          FRONT UI
                        </h2>

                        <div className="mt-3">
                          <div className="flex">
                            <FaHtml5 style={{ fontSize: "25px" }} />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              HTML
                            </h2>

                            <IoLogoCss3
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              CSS
                            </h2>

                            <FaBootstrap
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              BOOTSTRAP
                            </h2>

                            <GiCrystalWand
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              TALWIND{" "}
                            </h2>

                            <SiMaterialdesign
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              MATERIAL UI
                            </h2>

                            <SiAdobexd
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              ADOBE XD
                            </h2>

                            <FaFigma
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              FIGMA
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="text-start mt-10">
                        <h2 className="font-bold" style={{ fontSize: "16px" }}>
                          JAVA SCRIPT FRAMEWORK AND LIBARY
                        </h2>

                        <div className="mt-3">
                          <div className="flex">
                            <RiReactjsFill style={{ fontSize: "25px" }} />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              REACT JS
                            </h2>

                            <TbBrandNextjs
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              NEXT JS
                            </h2>

                            <FaAngular
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              ANGULAR JS
                            </h2>

                            <FaVuejs
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              VUE JS{" "}
                            </h2>

                            <SiNuxtdotjs
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              NUXT JS
                            </h2>

                            <SiAdobexd
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              ANT DESIGN & MATERIAL
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* devepes eng Skills */}

                      <div className="text-start mt-10">
                        <h2 className="font-bold" style={{ fontSize: "20px" }}>
                          DevOps and Project Management tools
                        </h2>

                        <div className="mt-3">
                          <div className="">
                            <div className="flex">
                              <FaAws style={{ fontSize: "25px" }} />

                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                {" "}
                                AWS Cloud (EC2, Route 53, RDS, ACM, Load
                                Balancer, Lambda, API Gateway, CloudFront, S3,
                                SES, and Live Streaming)
                              </h2>
                            </div>

                            <div className="flex mt-5">
                              <SiZoho
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                {" "}
                                Zoho Sprints
                              </h2>

                              <SiJirasoftware
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                {" "}
                                JIRA
                              </h2>

                              <IoLogoBitbucket
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                BitBucket{" "}
                              </h2>

                              <FaGitlab
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Gitlab
                              </h2>

                              <FaGithub
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Github and Git
                              </h2>

                              <FaDigitalOcean
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Digital ocean
                              </h2>

                              <VscAzure
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Azure
                              </h2>

                              <SiApachekafka
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Apache Kafka
                              </h2>

                              <GiMushroomsCluster
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Cluster Architecture
                              </h2>

                              <FaDocker
                                style={{ fontSize: "25px", marginLeft: "10px" }}
                              />
                              <h2 className="text-black-500 font-bold ml-1 mt-1">
                                Docker
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end  */}

                      {/*Category of Database */}
                      <div className="text-start mt-10">
                        <h2 className="font-bold" style={{ fontSize: "20px" }}>
                          Database Management & Un-Management
                        </h2>

                        <div className="mt-3">
                          <div className="flex">
                            <SiMysql style={{ fontSize: "25px" }} />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              My SQL
                            </h2>

                            <BiLogoPostgresql
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              Postgresql
                            </h2>

                            <SiAmazondynamodb
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              AWS Dynamodb
                            </h2>

                            <BiLogoMongodb
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              MongoDB{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* End  */}

                      {/* Backend program */}
                      <div className="text-start mt-10">
                        <h2 className="font-bold" style={{ fontSize: "20px" }}>
                          Backend and ServerSide
                        </h2>

                        <div className="mt-3">
                          <div className="flex">
                            <FaNodeJs style={{ fontSize: "25px" }} />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              Node Js
                            </h2>

                            <SiExpress
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              Express
                            </h2>

                            <SiFastify
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1">
                              {" "}
                              Fastify
                            </h2>

                            <FaPhp
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              PHP{" "}
                            </h2>

                            <FaLaravel
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              Laravel{" "}
                            </h2>

                            <SiPython
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              Python{" "}
                            </h2>

                            <FaJava
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              Java{" "}
                            </h2>

                            <FaWordpress
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            />
                            <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                              WordPress{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* end Programs */}
                    </div>
                </div>
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
              <div className="mb-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
