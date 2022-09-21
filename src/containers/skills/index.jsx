import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeader from "../../components/pageHeader";
import { Line } from "rc-progress";
import { skillsData } from "./data";
import "./styles.scss";

function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="My skills" icon={<GiSkills size={40} />} />
      <div className="skills__wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__wrapper__content">
            <h3 className="skills__wrapper__content__title">{item.title}</h3>
            <div>
              {item.data.map((dataItem, index) => (
                <div className="progressbar-wrapper" key={index}>
                  <p>{dataItem.skillName}</p>
                  <Line
                    percent={dataItem.percentage}
                    strokeWidth="2"
                    strokeColor="var(--selected-theme-main-color)"
                    trailWidth="2"
                  ></Line>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
