import React, { useState } from "react";
import Icon1 from "../../assets/images/22north_services_Guidance.svg";
import Icon2 from "../../assets/images/22north_services_Funding.svg";
import Icon3 from "../../assets/images/22north_services_OfficeSpace.svg";
import Icon4 from "../../assets/images/22north_services_Business_Development.svg";
import styled from "styled-components";
import ServiceModal from "../Modal/ServiceModal";

const Services = () => {
  const [services, setServices] = useState([
    {
      serviceIcon: Icon1,
      serviceIconAlt: "22north Services - Startup Guidance",
      serviceName: "Guidance",
      serviceId: "Guidance",
      serviceSelected: false,
      serviceDetails: [
        "How to start a startup seems to be the most crucial question in an entrepreneur's mind. And this first leap is the most significant one - the first step towards crossing the line from being a dreamer to a doer. This is where Team TTN is looking to step in. It seeks to be the one stop solution for all your questions and requirements. Be it a product idea you need some validation on, or some aspect of the market due diligence - Team TTN will be your partner as you take steps to realize your dream. Providing angel funding is the simplest part of the process. If you have an idea we like, we will extend all possible help and guidance.",
        "Team TTN is also looking to extend some preference to women entrepreneurs as part of our endeavour to balance the socio-economic balance. Our motto is to guide entrepreneurs to venture into demanding sectors, adapt to upcoming technologies, incubate path-breaking business ideas, introduce them to different policies and schemes, help them build a support network, guide them towards the right business structure,etc.",
      ],
    },
    {
      serviceIcon: Icon2,
      serviceIconAlt: "22north Services Funding",
      serviceName: "Funding",
      serviceId: "Funding",
      serviceSelected: false,
      serviceDetails: [
        "As per some recently conducted studies, close to 95% new businesses tend to wind up during the first year of operations and the primary reason for this is lack of funds. And this question of financing the company is what an entrepreneur faces at every stage. While bootstrapping and crowdfunding could be some of the initial avenues of funding the company, Team TTN can step in if one is looking for securing angel investment in the early stages of building their business or looking for expansion. Team TTN is looking to fund start ups which focus on innovative business ideas and adapt to upcoming market trends.",
      ],
    },
    {
      serviceIcon: Icon3,
      serviceIconAlt: "22north Services Office Space",
      serviceName: "Office Space",
      serviceId: "OfficeSpace",
      serviceSelected: false,
      serviceDetails: [
        "Even with the world moving towards a work from home model, nothing can really replace the dynamics of sitting across the table and in-person interaction. Choosing the right work space can prove to be a decisive factor in determining the success of the company. Every organization has its own identity which is reflected in the choice of accommodation. The right office contributes to the company's image and can also be important for brand buidling since this has the potential of making the first impression on potential clients, partners as well as employees. We provide ambient shared rent-free office space in the technological hub of Kolkata.",
      ],
    },
    {
      serviceIcon: Icon4,
      serviceIconAlt: "22north Services Business Development",
      serviceName: "Business Development",
      serviceId: "BusinessDevelopment",
      serviceSelected: false,
      serviceDetails: [
        "Our business development partner will take care of your business development, while you focus on the R&D. We help you establish digitally, create and launch your website, maintain your social media handles, manage your SEO rating, carry out marketing campaigns and even take care of customer relationship management. Our Bus Dev partner specializes in techno-marketing and lead closure. Strategic marketing campaigns and email outreach programs through them lead to successful closure of sweet deals. We help you grow your business and guide you to stand out in a competitive market. Start-ups also get to post their expertise among numerous others in B2B Linking Platform and get matching requirements accordingly.",
      ],
    },
  ]);

  const [activeService, setActiveService] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleShowMoreClick = (e) => {
    for (let i = 0; i < services.length; i++) {
      if (services[i].serviceId === e.target.name) {
        // Toggle the selected status
        services[i].serviceSelected = !services[i].serviceSelected;

        // Update the services
        setServices(services);

        // This below logic is for expanding the div. NOT FOR MODAL
        // Set the active service if the selected status is truthy
        // services[i].serviceSelected
        //   ? setActiveService(e.target.name)
        //   : setActiveService(null);

        // Since now opening Modal, so set the active service without checking the selected status
        setActiveService(e.target.name);
      }
    }
    openModal();
  };

  return (
    <>
      {activeService ? (
        <ServiceModal
          showModal={showModal}
          setShowModal={setShowModal}
          service={services.filter(
            (service) => activeService === service.serviceId
          )}
        />
      ) : null}

      <ServiceContainer id="services">
        <ServicesH1> Build & Grow </ServicesH1>

        <ServicesContainerWrapper>
          {services?.map((service, i) => (
            <ServicesCard
              key={i}
              // className={activeService === service.serviceId ? "showless" : ""}
            >
              <ServicesIconWrapper>
                <ServicesIcon
                  src={service.serviceIcon}
                  alt={service.serviceIconAlt}
                />
              </ServicesIconWrapper>

              <ServicesContent
              // className={ activeService === service.serviceId ? "showless" : "" }
              >
                <ServicesH3>{service.serviceName}</ServicesH3>
                <ServicesP> {service.serviceDetails} </ServicesP>
              </ServicesContent>

              <ServicesMoreSection
                name={service.serviceId}
                onClick={handleShowMoreClick}
                // className={ activeService === service.serviceId ? "showless" : "" }
              />
            </ServicesCard>
          ))}
        </ServicesContainerWrapper>
      </ServiceContainer>
    </>
  );
};

const ServiceContainer = styled.div`
  min-height: 800px;
`;

const ServicesH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;
  color: #042157;
  margin-top: 65px;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesContainerWrapper = styled.div`
  width: auto;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ServicesCard = styled.div`
  position: relative;
  width: 300px;
  padding: 20px;
  margin: 20px;

  /* background: #c4d5f5; */
  background: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid transparent;
    border-top: 20px solid #0f4cbd;
    border-right: 20px solid #0f4cbd;
  }

  &.showless {
    &:before {
      border-top: 20px solid #ff3b7e;
      border-right: 20px solid #ff3b7e;
    }
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const ServicesIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const ServicesIcon = styled.img`
  max-width: 250px;
  height: 200px;
`;

const ServicesContent = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;

  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    /* background: linear-gradient(transparent, #c4d5f5); */
    background: linear-gradient(transparent, #fff);
  }

  &.showless {
    height: auto;

    &:before {
      display: none;
    }
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

// const ServicesMoreSection = styled.a.attrs((props) => ({
//   className: props.className,
// }))`
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

  &.showless {
    background: #ff3b7e;

    &:before {
      content: "Read Less";
    }
  }
`;

export default Services;
