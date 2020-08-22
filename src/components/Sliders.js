import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import Grid from "@material-ui/core/Grid";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Sliders = () => {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Grid container spacing={3}>
        <div
          style={{
            position: "relative",
            left: "15%",
            width: "75%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img style={{ width: "100%" }} src={s1} alt="s1img" />
            </div>
            <div>
              <img style={{ width: "100%" }} src={s2} alt="s2img" />
            </div>
            <div>
              <img style={{ width: "100%" }} src={s3} alt="s1i4mg" />
            </div>
            <div>
              <img style={{ width: "100%" }} src={s4} alt="s14img" />
            </div>
          </Slider>
        </div>
      </Grid>
    </div>
  );
};
