import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pdf from "../../Assets/../Assets/Salman-Lania-Resume.pdf";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

//I'm a front-end developer with expertise in building responsive, user-friendly web interfaces using modern technologies. I enjoy solving design and functionality challenges while working closely with teams to deliver smooth user experiences.

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salman Lania </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I'm a front-end developer with expertise in building responsive, user-friendly web interfaces using modern technologies
            <br />
            I enjoy solving design and functionality challenges while working closely with teams to deliver smooth user experiences.
            <br />
            Feel free to reach out to me at <a href="mailto:salmanlania@gmail.com">salmanlania@gmail.com</a> if you’d like to connect!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <br />
          <br />
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Salman Lania</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
