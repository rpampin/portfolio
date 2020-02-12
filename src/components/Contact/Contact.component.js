import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

class Contact extends React.Component {
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
        <Grid container item>
          <Typography variant="h3" component="h3" className={classes.title}>
            CONTACT ME
          </Typography>
        </Grid>
        <Grid container item>
          <form autoComplete="off">
            <div>
              <TextField id="name" label="Name" variant="outlined" />
            </div>
            <div>
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="message"
                label="Message"
                multiline
                rows="4"
                variant="outlined"
              />
            </div>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  title: {
    fontWeight: "bolder"
  }
});

export default withStyles(styles)(Contact);
