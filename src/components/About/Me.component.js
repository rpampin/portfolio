import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Me = props => {
  const { classes } = props;

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" className={classes.hello}>
        Hello, my name is{" "}
        <span style={{ fontWeight: "bold" }}>Rodrigo Pampin</span>
      </Typography>
      <Typography variant="h5" className={classes.what}>
        I'm a freelance full-stack developer specialized in various technologies
        for front-end and back-end development.
      </Typography>
    </Container>
  );
};

const styles = theme => ({
  root: {
    "& > *": {
      padding: "1rem"
    }
  },
  hello: {
    fontWeight: 100
  },
  what: {
    fontWeight: 100
  }
});

export default withStyles(styles)(Me);
