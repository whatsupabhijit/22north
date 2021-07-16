import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/images/victoria-memorial.jpg";
import img2 from "../../assets/images/victoria-memorial.jpg";
import img3 from "../../assets/images/victoria-memorial.jpg";

import "./index.css";

const HeroSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <Carousel autoPlay infiniteLoop interval="5000">
      <div>
        <img src={img1} alt="asset1" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={img2} alt="asset2" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={img3} alt="asset3" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default HeroSection;
