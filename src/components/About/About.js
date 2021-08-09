import React from "react";
import styled from "styled-components";

import AboutBG from "../../assets/images/22north_about_background.jpeg";
import { homeObjAbout } from "../InfoSection/Data";

const About = () => {
  const { descriptions } = homeObjAbout;
  return (
    <>
      <AboutContainer id="about" bgImg={AboutBG}>
        <AboutWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,122.7C840,139,960,149,1080,144C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </AboutWave>
      </AboutContainer>

      <AboutContent>
        <AboutH1>About Us</AboutH1>
        {descriptions?.map((description, i) => (
          <AboutP key={i}>{description}</AboutP>
        ))}
      </AboutContent>
    </>
  );
};

const AboutContainer = styled.section`
  margin-top: 25px;

  position: relative;
  width: 100%;
  height: 50vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #008aff, #ff137d),
    url(${(props) => props.bgImg});
  background-blend-mode: screen;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -1;
`;

const AboutContent = styled.div`
  z-index: 999;
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#042157")};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

// const TopLine = styled.p`
//   color: #042141;
//   font-size: 16px;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   margin-bottom: 16px;
// `;

const AboutP = styled.p`
  max-width: 1200px;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 24px;
  color: "#010606";
`;

const AboutWave = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default About;
