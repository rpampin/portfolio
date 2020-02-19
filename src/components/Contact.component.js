import React from "react";
import emailjs from "emailjs-com";

import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      buttonText: "Send"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    let templateParams = {
      from_name: name,
      reply_to: email,
      message_html: message
    };

    this.setState({ buttonText: "Sending..." });

    emailjs
      .send(
        "gmail",
        "template_goQxLpe7",
        templateParams,
        "user_cp3bVAsZiSVPoCm0KGmfb"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      )
      .finally(() => {
        this.setState({
          name: "",
          email: "",
          message: "",
          buttonText: "Send"
        });
      });
  }

  nameOnChange(e) {
    this.setState({ name: e.target.value });
  }

  emailOnChange(e) {
    this.setState({ email: e.target.value });
  }

  messageOnChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { buttonText } = this.state;

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
            CONTACT ME
          </Typography>
        </Grid>
        <Grid container item lg={4} xs={10}>
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className={classes.contactForm}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              className={classes.contactFormGrid}
            >
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={this.state.name}
                onChange={this.nameOnChange}
                required
              />
              <TextField
                id="email"
                type="email"
                label="Email"
                value={this.state.email}
                onChange={this.emailOnChange}
                variant="outlined"
                required
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows="4"
                variant="outlined"
                value={this.state.message}
                onChange={this.messageOnChange}
                required
                inputProps={{ minLength: 10 }}
              />
              <Button type="submit" variant="outlined">
                <Email />
                &nbsp;{buttonText}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  mainGrid: {
    minHeight: "100vh"
  },
  title: {
    fontWeight: "bolder"
  },
  contactForm: {
    width: "100%",
    "& > .MuiGrid-root > *": {
      margin: ".3rem"
    }
  }
});

export default withStyles(styles)(Contact);
