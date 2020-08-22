import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import img2 from "../img2.png";
import img3 from "../img3.png";
import img4 from "../img4.png";
import img5 from "../img5.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15px",
  },
  paper: {},
  control: {
    padding: theme.spacing(2),
  },
  paperimg: {
    width: "189px",
  },
}));

export default function Partners() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <img className={classes.paperimg} src={img2} alt="images2" />
          </Grid>
          <Grid item>
            <img className={classes.paperimg} src={img3} alt="images3" />
          </Grid>
          <Grid item>
            <img className={classes.paperimg} src={img4} alt="images4" />
          </Grid>
          <Grid item>
            <img className={classes.paperimg} src={img5} alt="images5" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
