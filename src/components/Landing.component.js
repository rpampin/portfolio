import React from "react";
import scrollToComponent from "react-scroll-to-component";
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
                onClick={() =>
                  scrollToComponent(this.Home, {
                    offset: 0,
                    align: "top",
                    duration: 1000
                  })
                }
              >
                <Lens style={{ fontSize: 10 }} />
              </IconButton>
            </ListItem>
            <ListItem key="2" className={classes.drawerListItem}>
              <IconButton
                className={classes.drawerButton}
                onClick={() =>
                  scrollToComponent(this.Contact, {
                    offset: 0,
                    align: "top",
                    duration: 1000
                  })
                }
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
        <div className={classes.mainContainer}>
          <section
            ref={section => {
              this.Home = section;
            }}
          >
            <Home />
          </section>
          <Contact
            ref={section => {
              this.Contact = section;
            }}
          />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  mainContainer: {
    "& > *": {
      minHeight: "100vh"
    }
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