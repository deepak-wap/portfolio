import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "@/styles/Navbar.module.css";
import { useState,  useEffect} from "react";
import { Button, Layout, Menu } from "antd";

const { Header } = Layout;
const items = [
  {
    key: "home",
    label: <a href="/#home">HOME</a>,
  },
  {
    key: "about-me",
    label: <Link href="/#about">ABOUT ME</Link>,
  },
  {
    key: "projects",
    label: <Link href="/#projects">PROJECTS</Link>,
  },
  {
    key: "skills",
    label: <Link href="/#skills">SKILLS</Link>,
  },
  {
    key: "experience",
    label: <Link href="/#experience">EXPERIENCE</Link>,
  },
  {
    key: "resume",
    label: <Link href="resume">RESUME</Link>,
  },
];
const Navbar = ()=>{
const [scrollHeight, setScrollHeight] = useState(0);

useEffect(()=>{
  const handleScroll = ()=>{
    const currentScrollHeight =
      typeof window !== "undefined"
        ? window.pageYOffset || document.documentElement.scrollTop
        : 0;
    setScrollHeight(currentScrollHeight);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
}, []);

  return (
    <div className="mb-[95px]">
      <Header className={`w-full flex justify-between items-center px-[8.7%] h-[95px] z-[50] transition ease-in-out duration-700 fixed top-0 left-0 navbar bg-[#F7F7FF]`}> {/*bg-[#040B17] */}
        <h1 className="text-[38px] text-black font-grotesk font-bold">
          DEEPAK
        </h1>
        <div className="flex items-center gap-14">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={'home'}
            items={items}
            style={{
              flex: 1,
              minWidth: 500,
            }}
            className={`gap-1 text-[14.7px] text-[#ece9e9] font-grotesk font-semibold tracking-[0.8px]`}
          />
          <a href="/#contact" className="nav-btn">
          <Button type="primary w-[145px] h-[56px] rounded-[30px] bg-[black] font-normal">
            <span className="text-[15.5px] font-grotesk tracking-[0.3px]">
              CONTACT
            </span>
          </Button>
          </a>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
