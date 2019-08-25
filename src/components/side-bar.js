import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { URLS } from "../data/urls";
import { makeStyles } from "@material-ui/core/styles";
import { ForwardRefLink } from "./link";
import { Location } from "@reach/router";
import { SECONDARY_COLOR } from "../styles/theme";

const useStyles = makeStyles({
  sideBar: {
    width: 250,
  },
  selectedLink: {
    color: SECONDARY_COLOR,
  },
});

export const SideBar = props => {
  const classes = useStyles();
  const { closeSideBar } = props;

  return (
    <div
      className={classes.sideBar}
      role="presentation"
      onClick={closeSideBar}
      onKeyDown={closeSideBar}
    >
      <Location>
        {({ location }) => (
          <List>
            {URLS.map(({ name, path }) => {
              const isCurrentPath = location.pathname === path;
              return (
                <ListItem
                  className={isCurrentPath ? classes.selectedLink : undefined}
                  key={name}
                  component={ForwardRefLink}
                  button
                  to={path}
                >
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </List>
        )}
      </Location>
    </div>
  );
};
