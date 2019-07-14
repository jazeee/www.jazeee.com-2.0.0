import PropTypes from "prop-types";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "./link";
import { TargetBlankLink } from "./target-blank-link";
import { GithubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linked-in-icon";

import { HideOnScroll } from "./hide-on-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  social: {
    marginLeft: theme.spacing(1),
  },
}));

export const Header = props => {
  const { siteTitle } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" color="inherit">
                {siteTitle}
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.social}>
              <TargetBlankLink
                color="secondary"
                href="http://www.linkedin.com/in/jazeee"
              >
                <LinkedInIcon />
              </TargetBlankLink>
            </Typography>
            <Typography variant="h6" className={classes.social}>
              <TargetBlankLink
                color="secondary"
                href="https://github.com/jazeee"
              >
                <GithubIcon />
              </TargetBlankLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
