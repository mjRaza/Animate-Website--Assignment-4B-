import React from "react";
import Navbar from "./components/Navbar";
import { VideoBg } from "./components/VideoBg";
import Cards from "./components/Cards";
import Goals from "./components/Goals";
import Partners from "./components/Partners";
import { Sliders } from "./components/Sliders";
import ItemContainer from "./components/ItemContainer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoBg />
      <Cards />
      <Goals />
      <Partners />
      <div>
        <Sliders />
      </div>
      <ItemContainer />
    </div>
  );
};
export default Home;
