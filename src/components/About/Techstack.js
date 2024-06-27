import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import "../Home/home.css"

import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  // DiMongodb,
  // DiPython,
  DiGit,
  // DiJava,
} from "react-icons/di";
import {
  // SiRedis,
  SiFirebase,
  SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons imgHome">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons pulsate-bck">
        <MdCss />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons pulsate-bck">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons imgHome">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons imgHome">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons pulsate-bck">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons pulsate-bck">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons imgHome ">
        <SiFirebase />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
