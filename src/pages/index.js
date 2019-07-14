import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Skills } from "./skills";
import { SoftwareProjects } from "./software-projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Skills />
    <SoftwareProjects />
  </Layout>
);

export default IndexPage;
