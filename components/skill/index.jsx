import { FacebookOutlined } from "@ant-design/icons";
// import Style from "../../styles/index.module.css";
import Icon from "@mui/material/Icon";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

// import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Progress,Layout } from "antd";
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
        <div className="bg-[#F7F7FF]">
          <Row>
            <Col span={12}>
              <div className="header">
                <h1 className="text-5xl font-bold">Skills & Experience</h1>
              </div>

              <div>
                <p className="text-lg">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum clita dolor duo clita
                  sit.
                </p>
              </div>
              <div className="">
                <div>
                  <h1>My Skills</h1>
                </div>
                <div>
                  <Row>
                    <Col span={12}>
                      <div className="one">
                        <div>
                          <h2>HTML</h2>
                          <Progress percent={98} status="active" />
                        </div>

                        <div>
                          <h2>Css</h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Bootsrap</h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>Java Script </h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>PHP</h2>
                          <Progress percent={88} status="active" />
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="two ml-3">
                        <div>
                          <h2>Angular</h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>React Js </h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Next js </h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Node Js </h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>React Native</h2>
                          <Progress percent={75} status="active" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
  );
};

export default SkillPage;
