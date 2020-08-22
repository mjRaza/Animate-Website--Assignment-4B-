import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box1: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    flexGrow: 1,
    fontFamily: "bold",
  },
}));

export default function ItemContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div
            style={{
              width: "45%",
              display: "flex",
              padding: "95px 50px 50px 35%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#191c3c",
                }}
                src={i1}
                alt="1"
              />
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "white",
                }}
                src={i2}
                alt="12"
              />
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#fff1bf",
                }}
                src={i3}
                alt="13"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#dff7fe",
                }}
                src={i4}
                alt="1a"
              />
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#fcdacc",
                }}
                src={i5}
                alt="1a2"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#d7e3f5",
                }}
                src={i6}
                alt="1a"
              />
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#efefef",
                }}
                src={i7}
                alt="1a2"
              />
              <img
                style={{
                  width: "190px",
                  margin: "5px",
                  backgroundColor: "#f3f0f0",
                }}
                src={i8}
                alt="1a3"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
