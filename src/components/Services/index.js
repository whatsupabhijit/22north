import React, { useState } from "react";
import Icon1 from "../../assets/images/22north_services_Guidance.svg";
import Icon2 from "../../assets/images/22north_services_Funding.svg";
import Icon3 from "../../assets/images/22north_services_OfficeSpace.svg";
import Icon4 from "../../assets/images/22north_services_Business_Development.svg";
import styled from "styled-components";

const Services = () => {
  const [services] = useState([
    {
      serviceIcon: Icon1,
      serviceIconAlt: "22north Services - Startup Guidance",
      serviceName: "Guidance",
      serviceDetails:
        "We help you fly by building the wings for you. We believe in empowering women and supporting their ventures. We aim to make our socio-economic structure a balanced one where women are at par with their men counterparts and contribute equally to our economy. Our moto would be to guide entrepreneurs (preference would be given to women entrepreneurs) to venture into demanding sectors, adapt to upcoming technologies, incubate path-breaking business ideas, introduce them to different policies and schemes, help them build a support network, guidance for the right business structure, helping them in protecting the intellectual properties, getting business loans and get them started. If your start-up is selected by our start-up development programme, we guide you through the bumpy road of entrepreneurship and prevent you from taking self-damaging decisions.",
    },
    {
      serviceIcon: Icon2,
      serviceIconAlt: "22north Services Funding",
      serviceName: "Funding",
      serviceDetails:
        "Don’t stop dreaming because of lack of funds, we keep your dreams alive, if we find them realistically achievable. We fund start-ups (with preference for female owned) which focuses on innovative business ideas, serving multiple sectors and adapts to upcoming market trends. Start-ups which embrace path-breaking technology initiatives, stands out among their competitors and are backed by potential team-members are considered to be eligible to receive funding. The applicant’s business plan should reflect business concept, strategy, plan-of-action, short term goals, long term goals, overall business growth plan and background of your management team We select and fund start-ups based on the following characteristics: Innovative business ideas Latest Technology adapter or enabler Proven track-record of serving customers Market valuation Potential growth model Scalable business model Potential Market Team credentials.",
    },
    {
      serviceIcon: Icon3,
      serviceIconAlt: "22north Services Office Space",
      serviceName: "Office Space",
      serviceDetails:
        "We provide ambient, shared office space in the technological hub of Kolkata. We don’t charge rent for the office space you are using, instead we consider that as our investment for letting you succeed. We know the importance of operating in the midst of your customers, and from a place which your prospective employees would find convenient to reach. Getting an office space in the most sought after location, eats up your budget in the gestation period. Instead start from a shared office space, where you might meet some of your prospective clients and partners. While we take care of your operating space, you can invest in growing your business and churning your innovative business ideas. The office space comes with a shared meeting room, from where you can crack some of your very first deals.",
    },
    {
      serviceIcon: Icon4,
      serviceIconAlt: "22north Services Business Development",
      serviceName: "Business Development",
      serviceDetails:
        "Our business development partner will take care of your business development, while you focus on the R&D. We help you establish digitally, create and launch your website, maintain your social media handles, manage your SEO rating, carry out marketing campaigns and even take care of customer relationship management. Our Bus Dev partner specializes in techno-marketing and lead closure. Strategic marketing campaigns and email outreach programs through them lead to successful closure of sweet deals. We help you grow your business and guide you to stand out in a competitive market. Start-ups also get to post their expertise among numerous others in B2B Linking Platform and get matching requirements accordingly.",
    },
  ]);

  return (
    <>
      <ServicesContainer id="services">
        {/* <ServicesH1>Our Services</ServicesH1> */}
        {services?.map((service, i) => (
          <ServicesCard key={i}>
            <ServicesIconWrapper>
              <ServicesIcon
                src={service.serviceIcon}
                alt={service.serviceIconAlt}
              />
            </ServicesIconWrapper>
            <ServicesContent>
              <ServicesH3>{service.serviceName}</ServicesH3>
              <ServicesP> {service.serviceDetails} </ServicesP>
            </ServicesContent>
            <ServicesMoreSection />
          </ServicesCard>
        ))}
      </ServicesContainer>
    </>
  );
};

const ServicesH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  font-size: 2.5rem;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesContainer = styled.div`
  /* background: #313131; */
  min-height: 100vh;
  width: auto;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  /* @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  } */
`;

const ServicesCard = styled.div`
  position: relative;
  width: 300px;
  padding: 20px;
  margin: 20px;

  background: #c4d5f5;

  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out; */

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid transparent;
    border-top: 20px solid #0f4cbd;
    border-right: 20px solid #0f4cbd;
  }

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

const ServicesIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const ServicesIcon = styled.img`
  max-width: 90px;
`;

const ServicesContent = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, #c4d5f5);
  }
`;

const ServicesH3 = styled.h3`
  color: #042157;
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ServicesP = styled.p`
  font-weight: 300;
  color: #042157;
`;

const ServicesMoreSection = styled.a`
  position: relative;
  padding: 10px 15px;
  background: #0f4cbd;
  margin-top: 15px;
  display: inline-block;

  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 14px;

  &:before {
    content: "Read More";
  }
`;

export default Services;
