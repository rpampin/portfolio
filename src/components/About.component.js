import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Paper,
  Container,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";

import AngularIcon from "../Images/angularjs-plain.svg";
import BootstrapIcon from "../Images/bootstrap-plain.svg";
import CSharpIcon from "../Images/csharp-plain.svg";
import CSS3Icon from "../Images/css3-plain.svg";
import DockerIcon from "../Images/docker-plain.svg";
import DotNetIcon from "../Images/dot-net-original.svg";
import ExpressIcon from "../Images/express-original.svg";
import HTML5Icon from "../Images/html5-plain.svg";
import JavascriptIcon from "../Images/javascript-plain.svg";
import MongodbIcon from "../Images/mongodb-plain.svg";
import MySQLIcon from "../Images/mysql-plain.svg";
import NodeJSIcon from "../Images/nodejs-plain.svg";
import PostgreSQLIcon from "../Images/postgresql-plain.svg";
import ReactIcon from "../Images/react-original.svg";
import TypescriptIcon from "../Images/typescript-plain.svg";
// import ReactionIcon from "../Images/reaction-plain.svg";
// import GhostIcon from "../Images/ghost-plain.svg";
// import GithubIcon from "../Images/github-original.svg";
import GitIcon from "../Images/git-plain.svg";
import NpmIcon from "../Images/npm-original-wordmark.svg";
import NextJsIcon from "../Images/nextjs-plain.svg";
import Material from "../Images/material-original.svg";
// import MaterialUI from "../Images/materialui-original.svg";
import VSCodeIcon from "../Images/vscode-original.svg";
import VStudioIcon from "../Images/vstudio-original.svg";

class About extends React.Component {
  responsive = {
    0: { items: 1 },
    1024: { items: 5 }
  };

  handleOnDragStart = e => e.preventDefault();

  front = [
    { name: "CSharp", img: CSharpIcon },
    { name: "DotNet", img: DotNetIcon },
    { name: "NodeJS", img: NodeJSIcon },
    { name: "Express", img: ExpressIcon },
    { name: "NextJS", img: NextJsIcon }
  ];

  back = [
    { name: "HTML5", img: HTML5Icon },
    { name: "CSS3", img: CSS3Icon },
    { name: "Javascript", img: JavascriptIcon },
    { name: "Typescript", img: TypescriptIcon },
    { name: "Angular", img: AngularIcon },
    { name: "React", img: ReactIcon },
    { name: "Bootstrap", img: BootstrapIcon },
    { name: "Material", img: Material }
  ];

  database = [
    { name: "PostgreSQL", img: PostgreSQLIcon },
    { name: "MySQL", img: MySQLIcon },
    { name: "Mongodb", img: MongodbIcon }
  ];

  other = [
    { name: "Git", img: GitIcon },
    { name: "NPM", img: NpmIcon },
    { name: "Docker", img: DockerIcon },
    { name: "VSCode", img: VSCodeIcon },
    { name: "Visua Studio", img: VStudioIcon }
  ];

  render() {
    const { classes } = this.props;

    function getItems(values) {
      return values.map(tile => (
        <GridListTile key={tile.img}>
          <Paper elevation={3} className={classes.gridPaper}>
            <img src={tile.img} alt={tile.name} className={classes.gridImg} />
            <GridListTileBar title={tile.name} />
          </Paper>
        </GridListTile>
      ));
    }

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

        <Grid container item justify="center" lg={6} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Backend
              <hr />
            </Typography>
            <GridList cols={4} spacing={10} className={classes.gridList}>
              {getItems(this.front)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" lg={6} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Frontend
              <hr />
            </Typography>
            <GridList cols={4} spacing={10} className={classes.gridList}>
              {getItems(this.back)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" lg={6} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Database
              <hr />
            </Typography>
            <GridList cols={4} spacing={10} className={classes.gridList}>
              {getItems(this.database)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" lg={6} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Other
              <hr />
            </Typography>
            <GridList cols={4} spacing={10} className={classes.gridList}>
              {getItems(this.other)}
            </GridList>
          </Container>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  mainGrid: {
    minHeight: "100vh",
    "& > div": {
      padding: "1rem"
    }
  },
  title: {
    fontWeight: "bolder"
  },
  gridList: {
    padding: "2rem"
  },
  gridPaper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white"
  },
  gridImg: {
    width: "100%",
    height: "auto",
    padding: "2rem"
  }
});

export default withStyles(styles)(About);
