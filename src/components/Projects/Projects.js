import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/automation.png";
import emotion from "../../Assets/Projects/fairtalkai.png";
import editor from "../../Assets/Projects/meezan.png";
import chatify from "../../Assets/Projects/lania-foods.web.app_.png";
import suicide from "../../Assets/Projects/taxpert.png";
import bitsOfCode from "../../Assets/Projects/obliqware.pk_.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food Panda"
              description="Developed the frontend of a Food panda clone app, integrating Firebase for restaurant data 
              and user authentication (login/signup). Implemented an add-to-cart feature using Redux. 
              Technologies used: HTML, CSS, Bootstrap, JavaScript, React.js, Firebase."
              ghLink="https://github.com/salmanlania/foodypanda"
              demoLink="https://salmanlania.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Obliqware"
              description="I built a startup company website using Bootstrap and Next.js, which pulls content from Markdown files for efficient rendering. The site features dark mode and provides a user-friendly Markdown writing experience for easy blog creation."
              ghLink="https://github.com/salmanlania"
              demoLink="https://obliqware.pk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bank ChatBot"
              description="I designed the frontend for an HR chatbot accessible after user login, using HTML, CSS, and JavaScript. The intuitive interface enhances user interaction and showcases my skills in combining effective design with functionality."
              ghLink="https://github.com/salmanlania"
              demoLink="https://drive.google.com/file/d/1tVQYPcXTlmxATomXfqNT3O-zc_2N3-JN/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Automation"
              description="Built the frontend for a platform that automates Google Maps, email scraping, LinkedIn, and WhatsApp tasks. Used: HTML, CSS, Tailwind CSS, Material UI, JavaScript, React.js."
              ghLink="https://github.com/salmanlania"
              demoLink="https://drive.google.com/file/d/1ZLW3QCNQaDvpWc1-pBPIpyYinxaMxhp5/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TaxPert"
              description="Developed an intuitive and responsive user interface for a Gen AI Chatbot that provides clear answers to tax-related queries, with an integrated eBook feature on tax information. Technologies used: HTML, CSS, Tailwind CSS, Material UI, JavaScript, React.js."
              ghLink="https://github.com/salmanlania"
              demoLink="https://drive.google.com/file/d/1uaeyiXTcs_ti0YS-oOQiKLrCcVrL6KXq/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Audio Ai"
              description="Developed the user interface for an AI-powered system that detects fraudulent audio in calls. Built with HTML, CSS, JavaScript, and Bootstrap to ensure a clean, responsive design and seamless user experience."
              ghLink="https://github.com/salmanlania"
              demoLink="https://drive.google.com/file/d/1RNHWqH8Td3AKa-gP9hJfW2GmR1JSqZdl/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
