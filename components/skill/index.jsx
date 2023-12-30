import { FacebookOutlined } from "@ant-design/icons";
// import Style from "../../styles/index.module.css";
import Icon from "@mui/material/Icon";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

// import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Progress,
  Layout,
} from "antd";
// import Layout from "../shared/layout";

//  tab import statement
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// function

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SkillPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <h2>HTML</h2>
              <Progress percent={98} status="active" />
            </div>
            <div className="mb-3">
              <h2>Css</h2>
              <Progress percent={95} status="active" />
            </div>
            <div className="mb-3">
              <h2>Bootsrap</h2>
              <Progress percent={90} status="active" />
            </div>
            <div className="mb-3">
              <h2>Java Script </h2>
              <Progress percent={90} status="active" />
            </div>
            <div className="mb-3">
              <h2>PHP</h2>
              <Progress percent={88} status="active" />
            </div>
          </div>
          <div>
            <div className="mb-3">
              <h2>Angular</h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>React Js </h2>
              <Progress percent={95} status="active" />
            </div>

            <div className="mb-3">
              <h2>Next js </h2>
              <Progress percent={95} status="active" />
            </div>

            <div className="mb-3">
              <h2>Node Js </h2>
              <Progress percent={90} status="active" />
            </div>

            <div className="mb-3">
              <h2>React Native</h2>
              <Progress percent={75} status="active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
