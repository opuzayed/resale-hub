import React from "react";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import UniqueSection from "../UniqueSection/UniqueSection";



const Home = () => {
  return (
    <div>
        <Slider></Slider>
        <Categories></Categories>
        <UniqueSection></UniqueSection>
    </div>
  );
};

export default Home;
