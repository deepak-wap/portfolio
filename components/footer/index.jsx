import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io"

const Footer = ()=>{
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
        <div className="bg-[#F7F7FF] text-center border-t border-slate-700 py-5">
        <span className="text-[14px] text-black  font-grotesk">
          © 2023 copyright all right reserved
        </span>
        <div className={`fixed right-[25px] bottom-[40px] ${scrollHeight > 400 ? '' : 'hidden'}`}>
          <div className="w-[45px] h-[45px] p-2 bg-[#0788ff] rounded-[50%]">
            <a href="#home" className="text-[30px]">
              <IoMdArrowUp />
            </a>
          </div>
        </div>
      </div>
    )
}

export default Footer