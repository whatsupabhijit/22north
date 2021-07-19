import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/images/victoria-memorial.jpg";
import img2 from "../../assets/images/victoria-memorial.jpg";
import img3 from "../../assets/images/victoria-memorial.jpg";

import "./index.css";

const HeroSection = () => {
  const showThumbnails = false;
  const showStatistics = false;
  const stopOnHover = false;
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <HeroContainer>
      <Carousel
        autoPlay
        infiniteLoop
        interval="5000"
        showStatus={showStatistics}
        showThumbs={showThumbnails}
        stopOnHover={stopOnHover}
      >
        <div>
          <img src={img1} alt="asset1" />
          <HeroP className="legend">Legend 1</HeroP>
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

      <HeroContent>
        <HeroH1>
          <span>&#8220;</span>Dream with ambition. Lead with conviction.
          <span>&#8221;</span>
        </HeroH1>
        {/* <HeroP>Kamala Harris</HeroP> */}
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 700px;

  margin: 0;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    height: 275px;
    /* overflow: hidden; */
  }
  :before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    /* z-index: 0; */
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-top: 500px;

  @media (max-width: 768px) {
    margin-top: 205px;
    font-size: 30px;
  }

  @media (max-width: 480ox) {
    margin-top: 100px;
    font-size: 24px;
  }
`;

const HeroP = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 16px;
  }

  @media (max-width: 480ox) {
    font-size: 18px;
  }
`;

export default HeroSection;
