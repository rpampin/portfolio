import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import a from '@material-ui/icons/Twi'

class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        direction="column"
        alignItems="stretch">
        <Typography variant="h2" component="h2" className={classes.title}>
          ABOUT
        </Typography>
        <Container maxWidth="md">
          <Typography variant="h4" className={classes.hello}>
            Hello, my name is <span style={{ fontWeight: 'bold' }}>Rodrigo Pampin</span>
          </Typography>
          <Typography variant="h5" className={classes.what}>
            I'm a freelance full-stack developer specialized in various technologies
            for front-end and back-end development.
          </Typography>
        </Container>
        <Typography variant="h4" component="h4" className={classes.subtitle}>
          Things I know
        </Typography>
      </Grid>
    )
  }
}

const styles = theme => ({
  root: {
    padding: '2rem',
    flexWrap: 'nowrap',
    '& > *': {
      margin: '.75rem'
    }
  },
  title: {
    textAlign: 'center',
    border: '.2rem solid black',
    borderLeft: 0,
    borderRight: 0
  },
  subtitle: {
    fontWeight: 100,
    alignSelf: 'center',
    display: 'flex',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '&::before, &::after': {
      content: '""',
      borderTop: '2px solid',
      flex: '1 0 20px'
    },
    '&::before': {
      margin: '0 20px 0 0'
    },
    '&::after': {
      margin: '0 0 0 20px'
    }
  },
  hello: {
    fontWeight: 100
  },
  what: {
    fontWeight: '100'
  }
});

export default withStyles(styles)(About);