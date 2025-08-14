import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_image.avif";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-sections">
          <div className="about-para">
            <p>
              I am an experienced frontend Developer with over a decade of
              professional expertise in the field. I have the privilege of
              collaborating with prestigious organizations contributing to their
              success and growth.
            </p>
            <p>
              My passion for Frontend Development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          <div className="skills-container">
            <div className="skill">
              <span className="skill-name">HTML & CSS</span>
              <span className="skill-percent">50%</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "50%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">React JS</span>
              <span className="skill-percent">70%</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">JavaScript</span>
              <span className="skill-percent">60%</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span className="skill-name">Java</span>
              <span className="skill-percent">50%</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
