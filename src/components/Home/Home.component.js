import React from 'react';
import Background from './Home.jpeg';
import './Home.component.css';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        className={classes.mainGrid}>
        <Typography variant="h3" component="h3" className={classes.me}>
          RODRIGO PAMPIN
        </Typography>
        <Typography variant="subtitle1" component="p" className="what">
          FULL STACK DEVELOPER
        </Typography>
        <Grid item xs={12}>
        {/* process.env.PORT || '3001' */}
          <IconButton target="_blank" href="http://www.twitter.com/">
            <Twitter fontSize="large" className="social-button" />
          </IconButton>
          <IconButton target="_blank" href="http://www.facebook.com/">
            <Facebook fontSize="large" className="social-button" />
          </IconButton>
          <IconButton target="_blank" href="http://www.github.com/">
            <Github fontSize="large" className="social-button" />
          </IconButton>
          <IconButton target="_blank" href="http://www.linkedin.com/">
            <LinkedIn fontSize="large" className="social-button" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "100vh",
    alignItems: "center",
    justifyItems: "center",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  mainGrid: {
    color: 'white',
    padding: '1.5em',
    backgroundColor: 'black'
  },
  me: {
    textAlign: 'center'
  }
});

export default withStyles(styles)(Home);