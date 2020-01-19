import React from "react";
import Me from "./Me.component";
import Tech from "./Tech.component";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const About = props => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="stretch"
      justifyContent="stretch"
    >
      <Grid item>
        <Typography variant="h2" component="h2" className={classes.title}>
          ABOUT
        </Typography>
      </Grid>
      <Grid item>
        <Me />
      </Grid>
      <Grid item>
        <Tech />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  root: {
    padding: "2rem",
    flexWrap: "nowrap",
    "& > *": {
      margin: ".75rem"
    }
  },
  title: {
    textAlign: "center",
    border: ".2rem solid black",
    borderLeft: 0,
    borderRight: 0
  }
});

export default withStyles(styles)(About);
