import React from "react";
import styled from "styled-components";

import "./Partners.css";

import Icon1 from "../../assets/images/TTNPartner_1.gif";
import Icon2 from "../../assets/images/TTNPartner_2.webp";
import Icon3 from "../../assets/images/TTNPartner_3.jpeg";
import Icon4 from "../../assets/images/TTNPartner_4.png";
import Icon5 from "../../assets/images/TTNPartner_5.png";
import Icon6 from "../../assets/images/TTNPartner_6.png";

const Partners = () => {
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

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon1} alt={"asset1"} />
            </PartnersIconWrapper>
          </PartnersCard>

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon2} alt={"asset2"} />
            </PartnersIconWrapper>
          </PartnersCard>

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon3} alt={"asset3"} />
            </PartnersIconWrapper>
          </PartnersCard>

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon4} alt={"asset4"} />
            </PartnersIconWrapper>
          </PartnersCard>

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon5} alt={"asset5"} />
            </PartnersIconWrapper>
          </PartnersCard>

          <PartnersCard>
            <PartnersIconWrapper>
              <PartnersIcon src={Icon6} alt={"asset6"} />
            </PartnersIconWrapper>
          </PartnersCard>
        </PartnerContainerWrapper>
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
`;

const PartnerP = styled.p`
  font-weight: 300;
  color: #042157;
`;

// Logos section

const PartnersCard = styled.div`
  position: relative;
  padding: 20px;
  margin: 20px;

  background: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    transition: all 0.2s ease-in-out;
  }
`;

const PartnersIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const PartnersIcon = styled.img`
  max-width: 140px;
  height: 90px;
`;

export default Partners;
