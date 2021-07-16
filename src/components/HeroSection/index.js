import React, { useState } from "react";
import styled from "styled-components";
import video from "../../assets/videos/BoxStep_HeroSection.mp4";
import { Button } from "../ButtonElement";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

const HeroSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          {/* <HeroH1>Experience Expansion</HeroH1> */}
          {/* <HeroP>lets grow with us</HeroP> */}
          <HeroBtnWrapper>
            <Button
              // Todo: change to from services to signup Section
              to="services"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    height: 275px;
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

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  /* height: 100%; */
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  @media screen and (max-width: 768px) {
    object-fit: contain;
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

// const HeroH1 = styled.h1`
//   color: #fff;
//   font-size: 48px;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 40px;
//   }

//   @media (max-width: 480ox) {
//     font-size: 32px;
//   }
// `;

// const HeroP = styled.p`
//   margin-top: 24px;
//   color: #fff;
//   font-size: 24px;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 24px;
//   }

//   @media (max-width: 480ox) {
//     font-size: 18px;
//   }
// `;

const HeroBtnWrapper = styled.div`
  margin-top: 690px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 278px;
  }
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 24px;
`;

export default HeroSection;
