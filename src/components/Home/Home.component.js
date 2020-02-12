import React from "react";
// import Background from './Home.jpeg';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, withTheme } from "@material-ui/core/styles";

import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";

const Home = props => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.mainGrid}
    >
      <Grid container item lg={6} xs={10} style={{ justifyContent: "center" }}>
        <Typography variant="h2" component="h2" className={classes.me}>
          RODRIGO PAMPIN
        </Typography>
      </Grid>
      <Grid
        container
        item
        lg={6}
        xs={12}
        style={{ textAlign: "center", opacity: 0.75 }}
      >
        <Typography variant="h4" component="h4" className={classes.subme}>
          <p>
            I'm a freelance full-stack developer specialized in various
            technologies for front-end and back-end development.
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
  // return (
  //   <div className={classes.root}>
  //     <Grid
  //       container
  //       alignItems="center"
  //       direction="column"
  //       justify="center"
  //       className={classes.mainGrid}>
  //       <Typography variant="h2" component="h2" className={classes.me}>
  //         RODRIGO PAMPIN
  //       </Typography>
  //       <Typography variant="h5" component="h5" className={classes.what}>
  //         FULL STACK DEVELOPER
  //       </Typography>
  //       <Grid item xs={12}>
  //         <IconButton target="_blank" href={process.env.REACT_APP_TWITTER || 'http://www.twitter.com/'}>
  //           <Twitter fontSize="large" className={classes.socialIcon} />
  //         </IconButton>
  //         <IconButton target="_blank" href={process.env.FACEBOOK || 'http://www.facebook.com/'}>
  //           <Facebook fontSize="large" className={classes.socialIcon} />
  //         </IconButton>
  //         <IconButton target="_blank" href={process.env.GITHUB || 'http://www.github.com/'}>
  //           <Github fontSize="large" className={classes.socialIcon} />
  //         </IconButton>
  //         <IconButton target="_blank" href={process.env.LINKEDIN || 'http://www.linkedin.com/'}>
  //           <LinkedIn fontSize="large" className={classes.socialIcon} />
  //         </IconButton>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
};

const styles = theme => ({
  mainGrid: {
    minHeight: "100vh"
  },
  me: {
    borderLeft: 0,
    borderRight: 0,
    padding: ".5rem",
    fontWeight: "bolder",
    letterSpacing: ".5rem",
    border: "2px solid white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      letterSpacing: ".1rem"
    }
  },
  subme: {
    padding: "2rem",
    fontWeight: "100",
    letterSpacing: ".2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      letterSpacing: ".1rem"
    }
  }
  // root: {
  //   display: "grid",
  //   gridTemplateColumns: "1fr",
  //   gridTemplateRows: "100vh",
  //   alignItems: "center",
  //   justifyItems: "center",
  //   backgroundImage: `url(${Background})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat'
  // },
  // mainGrid: {
  //   color: 'white',
  //   padding: '1.5em',
  //   backgroundColor: 'black',
  //   "& > *": {
  //     margin: '.75rem'
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     width: 'auto',
  //     padding: '2em',
  //     borderRadius: '2em'
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '1.5em 0 1.5em 0'
  //   }
  // },
  // me: {
  //   textAlign: 'center',
  //   border: '.2rem solid white',
  //   borderRight: 0,
  //   borderLeft: 0
  // },
  // what: {

  // },
  // socialIcon: {
  //   color: 'white'
  // }
});

export default withStyles(styles)(Home);
