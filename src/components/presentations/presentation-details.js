import React from "react";
import styles from "./presentation-details.module.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TargetBlankLink } from "../target-blank-link";

export const PresentationDetails = props => {
  const { presentation } = props;
  const { name, location, date, image, links } = presentation;
  return (
    <Card className={styles.presentation}>
      <CardMedia className={styles.media} title={name} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {location} on {date}
        </Typography>
      </CardContent>
      <CardActions>
        {links.map(link => {
          const { name, url } = link;
          return (
            <Button key={url} size="small" color="primary">
              <TargetBlankLink href={url}>{name}</TargetBlankLink>
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};
