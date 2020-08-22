import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons/";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "bold",
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(5),
    textAlign: "center",
    color: "black",
    height: "245px",
    position: "relative",
    lineHeight: "5px",
    bottom: "20%",
    boxShadow: "none",
    backgroundColor: "#dce2e2",
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Bounce>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper} style={{ textAlign: "start" }}>
              <Typography
                style={{ color: "#91C691", lineHeight: "2.6" }}
                variant="h6"
                noWrap
              >
                ATTRACT MORE VISITORS
              </Typography>
              <Typography variant="h4" noWrap className={classes.title}>
                SEO & Content Marketing
              </Typography>
              <Typography variant="h4" noWrap>
                <br />
              </Typography>
              <Typography variant="h4" noWrap className={classes.title}>
                Results-driven strategy and premium content creation.
              </Typography>
              <Button style={{ paddingLeft: "0px" }}>
                <Typography
                  style={{
                    color: "#91C691",
                    fontSize: "32px",
                    paddingLeft: "0px",
                    fontFamily: "bold",
                  }}
                  variant="h6"
                  noWrap
                >
                  Start This Service
                </Typography>
                <ArrowRightAlt style={{ color: "#91C691", fontSize: 45 }} />
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} style={{ textAlign: "start" }}>
              <Typography
                style={{ color: "#91C691", lineHeight: "2.6" }}
                variant="h6"
                noWrap
              >
                IMPRESS YOUR AUDIENCE
              </Typography>
              <Typography variant="h4" noWrap className={classes.title}>
                Web Design & Development
              </Typography>
              <Typography variant="h4" noWrap>
                <br />
              </Typography>
              <Typography variant="h4" noWrap className={classes.title}>
                Mobile friendly, easily editable and search optimized.
              </Typography>
              <Button style={{ paddingLeft: "0px" }}>
                <Typography
                  style={{
                    color: "#91C691",
                    fontSize: "32px",
                    paddingLeft: "0px",
                    fontFamily: "bold",
                  }}
                  variant="h6"
                  noWrap
                >
                  Start This Service
                </Typography>
                <ArrowRightAlt style={{ color: "#91C691", fontSize: 45 }} />
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Bounce>
    </div>
  );
}
