import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { personalInfo } from "./info";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

function About() {
  return (
    <section className="about" id="about">
      <PageHeader headerText="About me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personal">
          <Animate
            play
            duration={0.5}
            delay={0}
            start={{ transform: "translateX(-800px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="content_title">Front End Developer</h3>
            <p>
              Senior Front End Developer with 7 years of proven leadership. With
              emphasis on scalable and well-documented code, I look forward to
              working collaboratively as well as spearheading independent
              projects at Accenture. Passionate about going the extra mile to
              ensure the customer is unquestionably satisfied with the product
              or service provided.
            </p>
          </Animate>
          <Animate
            play
            duration={0.5}
            delay={0}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="content_title">Personal Information</h3>
            <ul>
              {personalInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__service">
          <Animate
            play
            duration={0.5}
            delay={0}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__service__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={45}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={55} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={50} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
