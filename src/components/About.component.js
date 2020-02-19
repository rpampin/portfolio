import React from "react";
import Hexagon from "react-hexagon";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid container item justify="center" lg={6} xs={10}>
          <Typography variant="h3" component="h3" className={classes.title}>
            ABOUT
          </Typography>
        </Grid>
        <Grid container item justify="center" lg={6} xs={10}></Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  mainGrid: {
    minHeight: "100vh"
  },
  title: {
    fontWeight: "bolder"
  }
});

export default withStyles(styles)(About);
