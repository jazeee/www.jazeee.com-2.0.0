import React from "react";
import styles from "./github-project.module.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { GitHubIcon } from "../github-icon";

export const GithubProject = props => {
  const { project } = props;
  return (
    <div className={styles.project}>
      <Typography className={styles.summary}>
        <Link color="secondary" href={project.url}>
          {project.name}
        </Link>{" "}
        - {project.description}
      </Typography>
      <Typography className={styles.codeLink}>
        <Link
          color="secondary"
          href={`https://github.com/${project.githubFullName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={styles.githubIcon} />
          Github
        </Link>
      </Typography>
    </div>
  );
};
