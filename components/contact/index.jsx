import React from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
const {TextArea} = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const sendMessage = async (values) => {
    try{
      await axios.post("/api/mail", values);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 bg-[#F7F7FF] px-[8.6%] py-14" id="contact">
      <div className="border border-[1px] border-[#05315B] rounded-[6px]">
        <div className="w-full flex gap-8 h-auto bg-[#323946] h-[150px] bg-[#053059] px-12 pt-12">
          <div onSubmit={(e) => sendMessage(e)} className="w-full">
            <div className="flex justify-between mb-10">
              <div className="bg-[#063660] px-6 py-2 rounded-[8px]">
                <p className="text-[12px] text-white font-grotesk leading-[19.2px]">
                  WRITE AN E-MAIL
                </p>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCblQnHXLmkPpWzqjDJmNXhNDTzVfLmcnWQwMfHfqntQtpzTscQLGTgfNKmbwJwbjNMqzk"
                  target="_blank"
                  className="text-[22px] text-white font-grotesk font-medium leading-[35.2px]"
                >
                  wapdk.09@gmail.com
                </a>
              </div>
              <div className="bg-[#063660] px-6 py-2 rounded-[8px]">
                <p className="text-[12px] text-white font-grotesk leading-[19.2px]">
                  CONTACT ME
                </p>
                <p
                  href="/"
                  className="text-[22px] text-white font-grotesk font-medium leading-[35.2px]"
                >
                  +91 98105 67218
                </p>
              </div>
              <div className="flex gap-5">
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
            <Form onFinish={sendMessage} layout="vertical" autoComplete="off">
              <div className="grid grid-cols-2 gap-x-5 px-5">
                <div className="col-span-1">
                  <Form.Item label="FULL NAME" className="mb-0">
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter you name here"
                        className="h-[45px] bg-transparent"
                      />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item label="EMAIL" className="mb-0">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your email here"
                        className="h-[45px] bg-transparent"
                      />
                    </Form.Item>
                  </Form.Item>
                </div>
                <div className="col-span-1 mb-0">
                  <Form.Item label="YOUR MESSAGE" name={"message"}>
                    <TextArea
                      rows={6}
                      className="bg-transparent outline-none focus:outline-none"
                    />
                  </Form.Item>
                </div>
                <Form.Item className="w-full">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-[250px] text-[20px] h-[40px] px-8 bg-[blue] rounded-[40px] hover:border hover:border-1"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
