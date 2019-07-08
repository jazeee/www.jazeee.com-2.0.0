import React from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import { Skills } from "./skills";

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <Skills />
  </Layout>
);

export default SkillsPage;
