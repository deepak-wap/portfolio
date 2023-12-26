import React, { useState } from "react";
import Image from "next/image";
import { Button, Form, Input } from "antd";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="grid grid-cols-1 bg-[#F7F7FF] px-[8.6%] py-14" id="contact">
      <div className=" border border-[1px] border-[#05315B] rounded-[6px]">
        <div className="w-full flex gap-8 h-[206px] bg-[#1F242D]/[0.5] px-12 py-14">
          <div className="w-[30%]">
            <Image src={"/images/contact-us.png"} width={291} height={291} />
          </div>
          <div className="w-[565px]">
            <h1 className="text-[40px] text-[white] font-grotesk font-medium leading-[48px]">
              Let’s Discuss Your Project
            </h1>
            <p className="text-[17px] text-[white] font-grotesk font-medium leading-[27.2px]">
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 h-[510px] bg-[#323946] h-[150px] bg-[#053059] px-12 py-14">
          <div className="w-[30%]">
            <div className="mb-5">
            <p className="text-[12px] text-white font-grotesk leading-[19.2px] mt-[125px]">
              WRITE AN E-MAIL
            </p>
            <a
              href="/"
              className="text-[22px] text-white font-grotesk font-medium leading-[35.2px]"
            >
              wapdk.09@gmail.com
            </a>
            </div>
            <div className="mb-10">
            <p className="text-[12px] text-white font-grotesk leading-[19.2px]">
              WRITE AN E-MAIL
            </p>
            <a
              href="/"
              className="text-[22px] text-white font-grotesk font-medium leading-[35.2px]"
            >
              +91 88029 66275
            </a>
            </div>
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
          <div>
            <form>
              <div className="flex gap-5 mb-7">
                <div>
                  <p
                    htmlFor="fullname"
                    className="text-[14px] text-white font-grotesk font-bold leading-[19.2px] mb-1"
                  >
                    FULL NAME
                  </p>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Name"
                    className="w-[324px] h-[42px] rounded-[4px] bg-transparent border border-1 px-2"
                  />
                </div>
                <div>
                  <p
                    htmlFor="fullname"
                    className="text-[14px] text-white font-grotesk font-bold leading-[19.2px] mb-1"
                  >
                    EMAIL
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-[324px] h-[42px] rounded-[4px] bg-transparent border border-1 px-2"
                  />
                </div>
              </div>
              <div className="flex gap-5 mb-7">
                <div className="w-full">
                  <p
                    htmlFor="fullname"
                    className="text-[14px] text-white font-grotesk font-bold leading-[19.2px] mb-1"
                  >
                    SUBJECT
                  </p>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Subject"
                    className="w-full h-[42px] rounded-[4px] bg-transparent border border-1 px-2"
                  />
                </div>
              </div>
              <div className="flex gap-5 mb-4">
                <div className="w-full">
                  <p
                    htmlFor="fullname"
                    className="text-[14px] text-white font-grotesk font-bold leading-[19.2px] mb-1"
                  >
                    YOUR MESSAGE
                  </p>
                  <textarea
                    name="fullname"
                    placeholder="Your Message"
                    className="w-full h-[120px] rounded-[4px] bg-transparent border border-1 px-2 py-3"
                  />
                </div>
              </div>
              <div className="flex mb-7">
                <button className="w-full h-[55px] bg-[#0788FF] rounded-[40px]">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
