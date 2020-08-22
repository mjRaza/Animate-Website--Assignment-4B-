import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowRightAlt } from "@material-ui/icons/";
import useWebAnimations, { fadeOutRight } from "@wellyshen/use-web-animations";
import Typist from "react-typist";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "bold",
  },
  titlediv: {
    position: "absolute",
    top: "27%",
    left: "13%",
  },
  btn: {
    width: "250px",
    height: "70px",
    borderRadius: "50px",
    color: "white",
    backgroundColor: "#191C3C",
    "&:hover ": {
      backgroundColor: "#91C691",
    },
  },
}));

export const VideoBg = () => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  // const { keyframes: keyimageParent, timing: timageParent } = fadeInLeft;

  // const { ref: animation1 } = useWebAnimations({
  //   keyframes: keyimageParent,
  //   timing: {
  //     ...timageParent,
  //     iterations: 1,
  //     easing: "ease-in-out",
  //   },
  // });
  const { keyframes: keyimageParent1, timing: timageParent1 } = fadeOutRight;

  const { ref: animation2 } = useWebAnimations({
    keyframes: keyimageParent1,
    timing: {
      ...timageParent1,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <div>
      <video
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
        preload
        poster="https://junto.digital/wp-content/uploads/2018/09/hero-home.jpg"
      >
        <source
          src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.webm"
          type="video/mp4"
        />
      </video>
      <div className={classes.titlediv}>
        <Typography style={{ color: "#91C691" }} variant="h5" noWrap>
          HI, WE'RE JUNTO
        </Typography>
        <Typography className={classes.title} variant="h2" noWrap>
          We're here to help you
        </Typography>

        {/* {count ? (
          <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
            <Typography className={classes.title} variant="h2" noWrap>
              close more deals.
        </Typography>
            <Typist.Backspace count={20} delay={800} />
            <Typography className={classes.title} variant="h2" noWrap>
              SecondText Goes here
        </Typography>
          </Typist>
        ) : (
            ""
          )} */}

        <div>
          {count && (
            <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
              <span
                style={{
                  fontSize: "50px",
                  fontFamily: "bold",
                }}
              >
                create badass content
              </span>
              <Typist.Backspace count={22} delay={1000} />
              <span style={{ fontSize: "3.75rem", fontFamily: "bold" }}>
                close more deals.
              </span>
              <Typist.Backspace count={22} delay={1000} />
              <span style={{ fontSize: "3.75rem", fontFamily: "bold" }}>
                generate more leads.
              </span>
              <Typist.Backspace count={22} delay={1000} />
              <span style={{ fontSize: "3.75rem", fontFamily: "bold" }}>
                outrank the competition.
              </span>

              <Typist.Backspace count={25} delay={1000} />
              <span style={{ fontSize: "3.75rem", fontFamily: "bold" }}>
                look sexy online.
              </span>
              <Typist.Backspace count={22} delay={1000} />
              <span style={{ fontSize: "3.75rem", fontFamily: "bold" }}>
                grow your business.
              </span>
            </Typist>
          )}
        </div>

        <div style={{ display: "flex", textAlign: "center" }}>
          <Button className={classes.btn}>Let's make it happen</Button>

          <div
            style={{
              display: "flex",
              marginLeft: "35px",
              alignItems: "center",
            }}
          >
            <Button>
              <Typography
                style={{ color: "#91C691", fontSize: "32px" }}
                className={classes.title}
                variant="h6"
                noWrap
              >
                How we work
              </Typography>
              <ArrowRightAlt
                style={{ color: "#91C691", fontSize: 45 }}
                ref={animation2}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
