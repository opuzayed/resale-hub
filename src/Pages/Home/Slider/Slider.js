import { Carousel } from "flowbite-react";
import React from "react";
import img1 from "../../../assets/Images/img1.jpg";
import img2 from "../../../assets/Images/img2.png";
import img3 from "../../../assets/Images/img3.jpg";
import img4 from "../../../assets/Images/img4.jpg";
import img5 from "../../../assets/Images/img5.jpg";
const Slider = () => {
  return (
    <div className="my-5">
      <div className="h-56 sm:h-64 xl:h-screen 2xl:h-screen">
        <Carousel>
          <img src={img1} alt="Laptop pic" />
          <img src={img2} alt=".Laptop pic." />
          <img src={img3} alt="Laptop pic" />
          <img src={img4} alt="Laptop pic" />
          <img src={img5} alt="Laptop pic" />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
