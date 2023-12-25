import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
} from "antd";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="grid grid-cols-1 bg-[#07233B] px-[8.6%]" id="contact">
      <div className="mt-28 border border-[1px] border-[#05315B] rounded-[6px]">
        <div className="w-full h-[150px] bg-[#053059]/[0.4]"></div>
        <div className="w-full h-[150px] bg-[#053059]/[0.8]"></div>
      </div>
    </div>
  );
};

export default Contact;
