import React from "react";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
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

import AngularIcon from "../images/angularjs-plain.svg";
import BootstrapIcon from "../images/bootstrap-plain.svg";
import CSharpIcon from "../images/csharp-plain.svg";
import CSS3Icon from "../images/css3-plain.svg";
import DockerIcon from "../images/docker-plain.svg";
import DotNetIcon from "../images/dot-net-original.svg";
import ExpressIcon from "../images/express-original.svg";
import HTML5Icon from "../images/html5-plain.svg";
import JavascriptIcon from "../images/javascript-plain.svg";
import MongodbIcon from "../images/mongodb-plain.svg";
import MySQLIcon from "../images/mysql-plain.svg";
import NodeJSIcon from "../images/nodejs-plain.svg";
import PostgreSQLIcon from "../images/postgresql-plain.svg";
import ReactIcon from "../images/react-original.svg";
import TypescriptIcon from "../images/typescript-plain.svg";
// import ReactionIcon from "../images/reaction-plain.svg";
// import GhostIcon from "../images/ghost-plain.svg";
// import GithubIcon from "../images/github-original.svg";
import GitIcon from "../images/git-plain.svg";
import NpmIcon from "../images/npm-original-wordmark.svg";
// import NextJsIcon from "../images/nextjs-plain.svg";
import Material from "../images/material-original.svg";
// import MaterialUI from "../images/materialui-original.svg";
import VSCodeIcon from "../images/vscode-original.svg";
import VStudioIcon from "../images/vstudio-original.svg";

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
    { name: "Express", img: ExpressIcon }
    // { name: "NextJS", img: NextJsIcon }
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

    const getGridListCols = () => {
      if (isWidthDown("xs", this.props.width)) {
        return 1;
      }
      if (isWidthDown("sm", this.props.width)) {
        return 2;
      }
      if (isWidthDown("lg", this.props.width)) {
        return 4;
      }
      if (isWidthDown("xl", this.props.width)) {
        return 6;
      }
    };

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
        <Grid container item justify="center" xl={6} lg={8} xs={10}>
          <Typography variant="h3" component="h3" className={classes.title}>
            ABOUT
          </Typography>
        </Grid>

        <Grid container item justify="center" xl={6} lg={8} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Backend
              <hr />
            </Typography>
            <GridList
              cols={getGridListCols()}
              spacing={10}
              className={classes.gridList}
            >
              {getItems(this.front)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" xl={6} lg={8} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Frontend
              <hr />
            </Typography>
            <GridList
              cols={getGridListCols()}
              spacing={10}
              className={classes.gridList}
            >
              {getItems(this.back)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" xl={6} lg={8} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Database
              <hr />
            </Typography>
            <GridList
              cols={getGridListCols()}
              spacing={10}
              className={classes.gridList}
            >
              {getItems(this.database)}
            </GridList>
          </Container>
        </Grid>

        <Grid container item justify="center" xl={6} lg={8} xs={10}>
          <Container>
            <Typography variant="h5" component="h5">
              Other
              <hr />
            </Typography>
            <GridList
              cols={getGridListCols()}
              spacing={10}
              className={classes.gridList}
            >
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

export default withWidth()(withStyles(styles)(About));
