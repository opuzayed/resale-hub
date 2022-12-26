import React from "react";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import UniqueSection from "../UniqueSection/UniqueSection";



const Home = () => {
  return (
    <div>
        <Slider></Slider>
        <UniqueSection></UniqueSection>
        <Categories></Categories>
        
    </div>
  );
};

export default Home;
