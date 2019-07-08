import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { SOFTWARE_PROJECTS } from "../../data/software-projects-data";
import styles from "./software-projects.module.css";
import { GithubProject } from "../../components/projects/github-project";
import { Link } from "../../components/link";

export const SoftwareProjects = () => (
  <Container className={styles.projects}>
    <h1 className={styles.header}>Software Projects</h1>
    {SOFTWARE_PROJECTS.map(project => {
      return <GithubProject key={project.name} project={project} />;
    })}
    <Container className={styles.actions}>
      <Button>
        <Link to="software-projects/all-github-projects">
          All Github Projects
        </Link>
      </Button>
    </Container>
  </Container>
);
