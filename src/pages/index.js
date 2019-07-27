import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Skills } from "./skills";
import { SoftwareProjects } from "./software-projects";
import { Presentations } from "./presentations";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Skills />
    <SoftwareProjects />
    <Presentations />
  </Layout>
);

export default IndexPage;
