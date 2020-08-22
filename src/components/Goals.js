import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons/";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "bold",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(5),
    color: "black",
    boxShadow: "none",
  },
  paper2: {
    padding: theme.spacing(5),
    color: "black",
    boxShadow: "none",
    backgroundColor: "#dce2e2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "110px",
  },
}));

export default function Goals() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.container}>
            <Paper className={classes.paper} style={{ textAlign: "center" }}>
              <Typography
                style={{ color: "#91C691", lineHeight: "2.6" }}
                variant="h6"
                noWrap
              >
                OUR CLIENTS’ GOALS ARE OUR GOALS
              </Typography>
              <Typography variant="h3" noWrap className={classes.title}>
                Here’s what they have to say.
              </Typography>
            </Paper>

            <Paper className={classes.paper2} style={{ textAlign: "start" }}>
              <div>
                <Star style={{ color: "yellow", fontSize: "45px" }} />
                <Star style={{ color: "yellow", fontSize: "45px" }} />
                <Star style={{ color: "yellow", fontSize: "45px" }} />
                <Star style={{ color: "yellow", fontSize: "45px" }} />
                <Star style={{ color: "yellow", fontSize: "45px" }} />
              </div>

              <Typography variant="h5" noWrap className={classes.title}>
                This is just a front page created for assignmnet by Jaffar Raza
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}
