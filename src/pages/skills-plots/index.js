import React, { useState } from "react";
import Loadable from "react-loadable";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { skills } from "../../data/utils";
import { Link } from "../../components/link";

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
const LoadablePlot = Loadable({
  loader: () => import("../../components/skills/plot"),
  render(loaded, props) {
    let Component = loaded.SkillsPlot;
    return <Component {...props} />;
  },
  loading() {
    return <Loading />;
  },
});

const { skillTypes } = skills;
export const SkillsPlotWithChooser = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Container>
      <h1>
        <Link color="secondary" to="/skills-plots">
          Skills
        </Link>
      </h1>
      <Grid container spacing={2}>
        <Tabs
          value={selectedIndex}
          onChange={(event, index) => setSelectedIndex(index)}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          centered
          aria-label="action tabs example"
        >
          {skillTypes.map(skillType => (
            <Tab key={skillType} label={skillType} />
          ))}
        </Tabs>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <LoadablePlot skillType={skillTypes[selectedIndex]} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const SkillsPlots = () => (
  <Container>
    <h1>Skill Plots</h1>
    <Grid container spacing={2}>
      {skills.skillTypes.map(skillType => (
        <Grid item xs={12} sm={12} md={6} key={skillType}>
          <LoadablePlot skillType={skillType} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

const SkillsPlotsPage = () => (
  <Layout>
    <SEO title="Skill Plots" />
    <SkillsPlots />
  </Layout>
);

export default SkillsPlotsPage;
