import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MOhamed Elshafey </span>
            from <span className="purple"> Egypt , Zagzig.</span>
            <br />
            As a front-end developer specializing in designing and developing websites, making them compatible with all screens and mobile phones, creating complete Android applications, and writing technical content.
            <br />
            I'm here to help you with your website, your store, and your app
            A modern sports bra with all the hardware
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
