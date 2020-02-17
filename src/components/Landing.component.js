import React from "react";
import { Drawer, List, ListItem, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Twitter, Facebook, LinkedIn, GitHub, Lens } from "@material-ui/icons";

import Home from "./Home.component";
import Contact from "./Contact.component";

class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    const links = [
      {
        icon: <Twitter />,
        url: process.env.REACT_APP_TWITTER || "http://www.twitter.com"
      },
      {
        icon: <Facebook />,
        url: process.env.REACT_APP_FACEBOOK || "http://www.facebook.com"
      },
      {
        icon: <LinkedIn />,
        url: process.env.REACT_APP_GITHUB || "http://www.linkedin.com"
      },
      {
        icon: <GitHub />,
        url: process.env.REACT_APP_LINKEDIN || "http://www.github.com"
      }
    ];
    return (
      <div>
        <Drawer anchor="left" variant="permanent" className={classes.drawer}>
          <List className={classes.drawerList}>
            <ListItem key="1" className={classes.drawerListItem}>
              <IconButton
                className={classes.drawerButton}
                onClick={() => {
                  let el = document.getElementById("home");
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <Lens style={{ fontSize: 10 }} />
              </IconButton>
            </ListItem>
            <ListItem key="2" className={classes.drawerListItem}>
              <IconButton
                className={classes.drawerButton}
                onClick={() => {
                  let el = document.getElementById("contact");
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <Lens style={{ fontSize: 10 }} />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
        <Drawer anchor="right" variant="permanent" className={classes.drawer}>
          <List className={classes.drawerListSocial}>
            {links.map((lnk, index) => (
              <ListItem
                key={index}
                className={`${classes.drawerListItem} ${classes.drawerListItemSocial}`}
              >
                <IconButton
                  target="_blank"
                  href={lnk.url}
                  className={classes.drawerButton}
                >
                  {lnk.icon}
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className={classes.container}>
          <div
            id="home"
            className={classes.child}
            ref={section => {
              this.Home = section;
            }}
          >
            <Home />
          </div>
          <div
            id="contact"
            className={classes.child}
            ref={section => {
              this.Contact = section;
            }}
          >
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    maxHeight: "100vh"
  },
  child: {
    scrollSnapAlign: "start",
    height: "100vh"
  },
  drawer: {
    "& div": {
      justifyContent: "center",
      background: "none",
      border: "none",
      padding: ".2rem"
    }
  },
  drawerList: {
    paddingLeft: "2rem"
  },
  drawerListSocial: {
    paddingRight: "2rem"
  },
  drawerListItem: {
    margin: 1,
    padding: ".25rem"
  },
  drawerListItemSocial: {
    backgroundColor: "rgba(255, 255, 255, .1)"
  },
  drawerButton: {
    padding: 0,
    // opacity: .5,
    "&:hover": {
      background: "transparent"
    },
    "&>*": {
      opacity: 0.5,
      transition: "opacity .25s ease-out",
      "-moz-transition": "opacity .25s ease-out",
      "-webkit-transition": "opacity .25s ease-out",
      "-o-transition": "opacity .25s ease-out",
      "&:hover": {
        opacity: 1
      }
    }
  }
});

export default withStyles(styles)(Landing);
