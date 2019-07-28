import React from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import styles from "./skills.module.css";
import { skills } from "../../data/utils";
import Plot from "react-plotly.js";

const subSkills = skills.getSkillData("Language");
console.log(subSkills.JavaScript);
const test = subSkills.JavaScript;
const { experience } = test;
export const SkillsPlots = () => {
  const oX = Object.keys(experience);
  const oY = Object.values(experience);
  return (
    <div className={styles.container}>
      <h1>Skill Plots</h1>
      <Plot
        data={[
          {
            x: oX,
            y: oY,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          title: "Skills",
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
  // </div>
};

const SkillsPlotsPage = () => (
  <Layout>
    <SEO title="Skill Plots" />
    <SkillsPlots />
  </Layout>
);

export default SkillsPlotsPage;
