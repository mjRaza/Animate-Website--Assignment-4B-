import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ArrowRightAlt } from "@material-ui/icons/";
import logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  btn: {
    width: "250px",
    height: "70px",
    border: "2px solid #91C691",
    borderRadius: "50px",
    color: "#91C691",
  },
  leftbtns: {
    margin: theme.spacing(3),
  },
  rootDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color: "black",
    marginRight: theme.spacing(3),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.rootDiv}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img alt="logo" style={{ width: "200px" }} src={logo} />
            </IconButton>
          </div>
          <div className={classes.leftbtns}>
            <Button color="inherit">
              <Typography className={classes.title} variant="h4" noWrap>
                Home
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography className={classes.title} variant="h4" noWrap>
                About
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography className={classes.title} variant="h4" noWrap>
                Service
              </Typography>
            </Button>

            <Button className={classes.btn}>
              Get Started
              <ArrowRightAlt style={{ fontSize: 45 }} />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
