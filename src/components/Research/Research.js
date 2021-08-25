import React from "react";
import styled from "styled-components";

const Research = () => {
  return (
    <>
      <ResearchContainer id="rnd">
        <ResearchContent>
          <ResearchH1>Technology Research</ResearchH1>

          <ResearchP>
            We are in stealth mode about the Research and Development (R&D) in
            some cutting edge technology domain.
          </ResearchP>
        </ResearchContent>
      </ResearchContainer>
    </>
  );
};

const ResearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;

  background: linear-gradient(180deg, #008aff, #ff137d),
    url(${(props) => props.bgImg});
  background-blend-mode: screen;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -1;

  @media (max-width: 991px) {
    margin-top: 5px;
    height: 40vh;
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    height: 30vh;
  }
`;

const ResearchContent = styled.div`
  z-index: 999;
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    margin-top: -50px;
  }
`;

const ResearchH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: "#042157";

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ResearchP = styled.p`
  max-width: 90%;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 24px;
  color: "#010606";
`;

export default Research;
