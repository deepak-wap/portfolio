import React from "react";
import {
  Button,
  Progress,
} from "antd";

const SkillPage = () => {
  return (
    <div className="main" id="skills">
      <div className="bg-[#F7F7FF] px-[8.6%] pb-8">
        <div className="grid grid-cols-1">
          <div>
            <div className="mt-24">
              <Button
                type="primary"
                className="items-center bg-[#063661] w-fit h-[29px] p-0 px-3 mb-3 rounded-[4px]"
              >
                <h1 className="text-[16px] text-white font-grotesk tracking-[4px]">
                  SKILLS
                </h1>
              </Button>
              <h2 className="text-[40px] text-black font-grotesk font-bold leading-[48px] mb-8">
                MY <span className="text-[#0788FF]">SKIILS</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="mb-3">
              <h2>HTML & CSS</h2>
              <Progress percent={95} status="active" />
            </div>
            <div className="mb-3">
              <h2>Java Script </h2>
              <Progress percent={90} status="active" />
            </div>
            <div className="mb-3">
              <h2>Bootsrap</h2>
              <Progress percent={90} status="active" />
            </div>
            <div className="mb-3">
              <h2>PHP</h2>
              <Progress percent={60} status="active" />
            </div>
            <div className="mb-3">
              <h2>MySQL</h2>
              <Progress percent={68} status="active" />
            </div>
          </div>
          <div>
            <div className="mb-3">
              <h2>React Js </h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>Next js </h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>Tailwind Css </h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>Node Js </h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>Mongo DB </h2>
              <Progress percent={90} status="active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
