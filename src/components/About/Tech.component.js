import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AngularIcon from "./Images/angularjs-plain.svg";
import BootstrapIcon from "./Images/bootstrap-plain.svg";
import CSharpIcon from "./Images/csharp-plain.svg";
import CSS3Icon from "./Images/css3-plain.svg";
import DockerIcon from "./Images/docker-plain.svg";
import DotNetIcon from "./Images/dot-net-original.svg";
import ExpressIcon from "./Images/express-original.svg";
import HTML5Icon from "./Images/html5-plain.svg";
import JavascriptIcon from "./Images/javascript-plain.svg";
import MongodbIcon from "./Images/mongodb-plain.svg";
import MySQLIcon from "./Images/mysql-plain.svg";
import NodeJSIcon from "./Images/nodejs-plain.svg";
import PostgreSQLIcon from "./Images/postgresql-plain.svg";
import ReactIcon from "./Images/react-original.svg";
import TypescriptIcon from "./Images/typescript-plain.svg";
import ReactionIcon from "./Images/reaction-plain.svg";
import GhostIcon from "./Images/ghost-plain.svg";
import GitIcon from "./Images/git-plain.svg";
import GithubIcon from "./Images/github-original.svg";
import NpmIcon from "./Images/npm-original-wordmark.svg";
import NextJsIcon from "./Images/nextjs-plain.svg";
import MaterialUI from "./Images/materialui-original.svg";
import VSCodeIcon from "./Images/vscode-original.svg";
import VStudioIcon from "./Images/vstudio-original.svg";

const Tech = props => {
  const { classes } = props;

  const techs = [
    { name: "HTML5", icon: HTML5Icon },
    { name: "CSS3", icon: CSS3Icon },
    { name: "Javascript", icon: JavascriptIcon },
    { name: "Typescript", icon: TypescriptIcon },
    { name: "Angular", icon: AngularIcon },
    { name: "React", icon: ReactIcon },
    { name: "Materia UI", icon: MaterialUI },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "CSharp", icon: CSharpIcon },
    { name: "DotNet", icon: DotNetIcon },
    { name: "NodeJS", icon: NodeJSIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "NextJS", icon: NextJsIcon },
    { name: "Ghost CMS", icon: GhostIcon },
    { name: "Reaction", icon: ReactionIcon },
    { name: "Mongodb", icon: MongodbIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "NPM", icon: NpmIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Github", icon: GithubIcon },
    { name: "Git", icon: GitIcon },
    { name: "VSCode", icon: VSCodeIcon },
    { name: "Visua Studio", icon: VStudioIcon }
  ];

  const showTechs = techs.map(t => (
    <Grid item>
      <Paper elevation={3} className={classes.tech}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <img src={t.icon} className={classes.icon} alt={t.name} />
          </Grid>
          <Grid item>
            <Typography variant="h6" component="h6" className={classes.name}>
              {t.name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  ));

  return (
    <div>
      <Typography variant="h4" component="h4" className={classes.title}>
        <span>Things I know</span>
      </Typography>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {showTechs}
        </Grid>
      </Grid>
    </div>
  );
};

const styles = theme => ({
  tech: {
    padding: "1em", 
    width: "7.5em"
  },
  icon: {
    width: 50,
    height: 50
  },
  name: {
    fontWeight: 100
  },
  title: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
        
    },
    "& > span": {
      fontWeight: 100,
      alignSelf: "center",
      display: "flex",
      width: "50%",
      padding: "1rem",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      "&::before, &::after": {
        content: '""',
        borderTop: "2px solid",
        flex: "1 0 20px"
      },
      "&::before": {
        margin: "0 20px 0 0"
      },
      "&::after": {
        margin: "0 0 0 20px"
      }
    }
  }
});

export default withStyles(styles)(Tech);
