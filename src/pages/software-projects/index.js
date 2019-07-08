import React from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import { SoftwareProjects } from "./software-projects";

const SoftwareProjectsPage = () => (
  <Layout>
    <SEO title="Software Projects" />
    <SoftwareProjects />
  </Layout>
);

export default SoftwareProjectsPage;
