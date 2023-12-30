import React from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const App = () => (
  <Form onFinish={onFinish} layout="vertical">
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
        <Form.Item label="YOUR MESSAGE" name={'message'}>
          <TextArea
            rows={6}
            className="bg-transparent outline-none focus:outline-none"
          />
        </Form.Item>
      </div>
      <Form.Item className="w-full">
        <Button type="primary" 
            htmlType="submit" 
            className="w-[250px] text-[20px] h-[40px] px-8 bg-[blue] rounded-[40px] hover:border hover:border-1"
        >
            Submit
        </Button>
      </Form.Item>
    </div>
  </Form>
);
export default App;
