import React from "react";
import styled from "styled-components";

import "./Partners.css";

import Icon1 from "../../assets/images/TTNPartner_1.jpeg";
import Icon2 from "../../assets/images/TTNPartner_2.jpeg";
import Icon3 from "../../assets/images/TTNPartner_3.jpeg";
import Icon4 from "../../assets/images/TTNPartner_4.jpeg";
import Icon5 from "../../assets/images/TTNPartner_5.jpeg";

import { Carousel as PartnerCarousel } from "react-responsive-carousel";

const Partners = () => {
  const showThumbnails = false;
  const showStatistics = false;
  const stopOnHover = false;
  const showArrows = false;

  return (
    <>
      <PartnerContainer id="partners">
        <PartnerH1>TTN Partners</PartnerH1>

        <PartnerContainerWrapper>
          <PartnerContent>
            <PartnerP>
              The purpose of forming the 22North (TTN) Alliance with its
              partners is to facilitate and enable each of the members to be
              acquainted and participate in various Federal projects for the
              mutual benefit of either party. By creating a synergy of the
              capabilities and execution of each alliance member, TTN plans to
              have a well-orchestrated plan to win Federal projects either as
              prime contractors or extending subcontracting projects to the
              partners. Other than that we would focus on helping alliance
              members find subcontracting opportunities with multinational prime
              contractors.
            </PartnerP>
          </PartnerContent>
        </PartnerContainerWrapper>

        <PartnerCarousel
          className="partnercarousel"
          autoPlay
          infiniteLoop
          interval="3000"
          showStatus={showStatistics}
          showThumbs={showThumbnails}
          stopOnHover={stopOnHover}
          showArrows={showArrows}
        >
          <div>
            <img src={Icon1} alt="asset1" />
          </div>
          <div>
            <img src={Icon2} alt="asset2" />
          </div>
          <div>
            <img src={Icon3} alt="asset3" />
          </div>
          <div>
            <img src={Icon4} alt="asset4" />
          </div>
          <div>
            <img src={Icon5} alt="asset5" />
          </div>
        </PartnerCarousel>
      </PartnerContainer>
    </>
  );
};

const PartnerContainer = styled.div`
  min-height: 550px;
`;

const PartnerH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;
  color: #042157;

  margin-top: 65px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PartnerContainerWrapper = styled.div`
  width: auto;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PartnerContent = styled.div`
  position: relative;
  overflow: hidden;
  margin: 50px;

  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }

  &.showless {
    height: auto;

    &:before {
      display: none;
    }
  }
`;

const PartnerP = styled.p`
  font-weight: 300;
  color: #042157;
`;

export default Partners;
