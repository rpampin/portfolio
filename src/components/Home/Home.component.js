import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={3}>
          <Container className={classes.container}>
            <h1>Home</h1>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <table>
            <td><tr>ONE</tr></td>
            <td><tr>TWO</tr></td>
            <td><tr>THREE</tr></td>
            <td><tr>FOUR</tr></td>
            <td><tr>FIVE</tr></td>
            </table>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: 'darkgrey'
  },
  container: {
    backgroundColor: 'black'
  }
});

export default withStyles(styles)(Home);