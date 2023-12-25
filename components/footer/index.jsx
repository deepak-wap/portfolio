import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io"

const Footer = ()=>{
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScrollHeight =
        typeof window !== "undefined"
          ? window.pageYOffset || document.documentElement.scrollTop
          : 0;
          console.log(currentScrollHeight);
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
        <div className="bg-[#07233B] text-center border-t border-slate-700 py-5">
        <span className="text-[14px] text-white  font-grotesk">
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