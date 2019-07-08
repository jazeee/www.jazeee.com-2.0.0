import React from "react";
import styles from "./skills.module.css";
import { skills } from "../../data/utils";

const webAppSkillNames = skills
  .getDomainSkillNames("Software Engineering")
  .filter((skill, index) => index < 12);

export const Skills = () => (
  <div className={styles.aboutJaz}>
    <div className={styles.container}>
      <div className={styles.skillsHeaderOverlay}>
        <h1> Full Stack Web Developer</h1>
        <h4>Primary Developer Skills (Sorted by skill level)</h4>
        <ul>
          {webAppSkillNames.map(skillName => (
            <li key={skillName}>{skillName}</li>
          ))}
        </ul>
        <a href="http://goo.gl/qWsPm" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  </div>
);
