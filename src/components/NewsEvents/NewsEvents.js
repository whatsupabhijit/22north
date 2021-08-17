import React, { useState } from "react";
import Icon1 from "../../assets/images/22north_NewsEvents_1.jpg";
import Icon2 from "../../assets/images/22north_NewsEvents_2.jpg";
import styled from "styled-components";
import NewsEventModal from "../Modal/NewsEventModal";

const NewsEvents = () => {
  const [activeNewsEvent, setActiveNewsEvent] = useState(null);

  const [NewsEvents, setNewsEvents] = useState([
    {
      NewsEventIcon: Icon1,
      NewsEventIconAlt:
        "22north NewsEvents - A Silicon Valley Based Incubator Company announced its start operation.",
      NewsEventName: "22 North Inc. starts its operation in Silicon Valley",
      NewsEventId: "NewsEvents1",
      NewsEventSelected: false,
      NewsEventDetails: [
        "22 North, a Silicon Valley based incubator company announced its start of operations today. The focus of the company is to help young Indian professionals realize their entrepreneurial dreams. With a considerable increase in the number of technology-startups in India, 18% of which are involved in high-end engineering, 22 North aims to help and facilitate this change in the entrepreneurial landscape. It has selected Kolkata as the base for this venture.",
        "The company’s focus will be primarily on two areas:",
        "• Provide angel funding to technology-oriented product and service companies that will base their operation in Kolkata. Along with the funding 22 North shall also provide full- service office space with built in infrastructure as well as management and business development guidance.",
        "• Develop and market new generation networking and communication products in close association with the US Federal Government and its agencies.",
        "The company has been founded by Buddhadeb (Bud) Biswas, now a resident of San Jose, who himself came to the US from the Kolkata area. In the past 40 years of his professional business career, he has started several technology focused companies and led them to a successful acquisition by larger US companies.",
        "“With a good understanding of the work culture in India and a sharp focus on Kolkata based, initiatives, with additional attention to female entrepreneurs, 22 North seeks to play an important role in developing the technology-based startup environment. Your idea and our guidance could pave the way for a technology hub emerging in Kolkata”, said founder Buddhadeb Biswas.",
        "22 North is headquartered in San Jose, California.",
        "For more information, please visit www.22north.us",
        "Contact us at info@22north.us or +1 408-850-0455",
      ],
    },
    {
      NewsEventIcon: Icon2,
      NewsEventIconAlt: "22north NewsEvents - Funds and Partners with DSS.",
      NewsEventName:
        "22 North Inc. funds and partners with Diverse Software Solutions",
      NewsEventId: "NewsEvents2",
      NewsEventSelected: false,
      NewsEventDetails: [
        "22North, a Silicon Valley based incubator company, announced today its partnership with Diverse Software Solutions Inc (Divsoft) by providing funding for Divsoft’s ongoing operations, both in the US and in India. 22North provides funding, office space along with management and business development guidance to India based startups. Divsoft Solutions is the first female owned startup company 22North has venture funded, with the anticipation of funding many more such companies.",
        "22North provides funding, office space along with management and business development guidance to India based startups. Divsoft Solutions is the first female owned startup company 22North has venture funded, with the anticipation of funding many more such companies.",
        "Divsoft Solutions is also a Silicon Valley based company, with its R&D center in Kolkata, India. This is a technology centric company and currently focuses on both the Indian and the US markets.",
        "Divsoft caters to the smart city market and develops products for energy reduction, safety, and healthcare, using AI and ML based imaging, computer vision, and video analytics algorithms. For smart connectivity, Divsoft Solutions’ IoT platform taps both wireline and wireless technologies.",
        "The technical founder, Dr. Debasmita Shaw is one the first women in her time with a bachelors, masters and PhD in Computer Science and Engineering from the Indian Institute of Technology. She has led engineering teams at Texas Instruments, Siemens Semiconductor (previously Infineon Technologies) and Toshiba, in India, Singapore, Germany, Japan and the US, before her endeavor with Divsoft Solutions.",
        "Bud Biswas, the founder and CEO of 22North said:",
        "“One of my dreams has always been to encourage and help young Indian professionals, with an emphasis on female entrepreneurs, to start their own next generation technology-oriented companies which can compete at the international level. I hope to see Divsoft Solutions change the landscape of Kolkata based entrepreneurship by creating an example of not only being successful in its business but also by acting as a role model for other young Indian Professionals.”",
        "Debasmita Shaw, the founder and CEO of Divsoft Solutions said:",
        "“We are very excited about this partnership with 22North, in our journey to take our innovation to a wider global market which is waiting to be tapped. We are confident that the leadership, business acumen and industry network of 22North is exactly the piece of the puzzle for Divsoft Solutions that we were looking for. 22North’s confidence in our innovation motivates us deeply, given that two of 22North founder’s previous companies have been acquired by US fortune 100 multinationals. We strongly believe that 22North can help us uncover the exigency of taking the cutting-edge products, we work diligently to build for the smart city market.”",
        "22 North is headquartered in San Jose, California.",
        "For more information, please visit www.22north.us",
        "Contact us at info@22north.us or +1 408-850-0455",
        "Divsoft is headquartered in Santa Clara, California.",
        "It can be reached at www.divsoftsolutions.com .",
        "Contact Divsoft at debasmita.s@divsoftsolutions.com . Phone: +1 408-406-1170.",
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleShowMoreClick = (e) => {
    for (let i = 0; i < NewsEvents.length; i++) {
      if (NewsEvents[i].NewsEventId === e.target.name) {
        // Toggle the selected status
        NewsEvents[i].NewsEventSelected = !NewsEvents[i].NewsEventSelected;

        // Update the NewsEvents
        setNewsEvents(NewsEvents);

        // Set the active NewsEvent if the selected status is truthy
        // NewsEvents[i].NewsEventSelected
        //   ? setActiveNewsEvent(e.target.name)
        //   : setActiveNewsEvent(null);

        setActiveNewsEvent(e.target.name);
      }
    }
    openModal();
  };

  return (
    <>
      {activeNewsEvent ? (
        <NewsEventModal
          showModal={showModal}
          setShowModal={setShowModal}
          newsevent={NewsEvents.filter(
            (newsevent) => activeNewsEvent === newsevent.NewsEventId
          )}
        />
      ) : null}

      <NewsEventContainer id="newsevents">
        <NewsEventsH1>News and Events</NewsEventsH1>

        <NewsEventsContainerWrapper>
          {NewsEvents?.map((NewsEvent, i) => (
            <NewsEventsCard
              key={i}
              // className={
              //   activeNewsEvent === NewsEvent.NewsEventId ? "showless" : ""
              // }
            >
              <NewsEventsIconWrapper>
                <NewsEventsIcon
                  src={NewsEvent.NewsEventIcon}
                  alt={NewsEvent.NewsEventIconAlt}
                />
              </NewsEventsIconWrapper>

              <NewsEventsContent
              // className={
              //   activeNewsEvent === NewsEvent.NewsEventId ? "showless" : ""
              // }
              >
                <NewsEventsH3>
                  {NewsEvent.NewsEventName} {NewsEvent.NewsEventSelected}
                </NewsEventsH3>
                <NewsEventsP> {NewsEvent.NewsEventDetails} </NewsEventsP>
              </NewsEventsContent>

              <NewsEventsMoreSection
                name={NewsEvent.NewsEventId}
                onClick={handleShowMoreClick}
                // className={
                //   activeNewsEvent === NewsEvent.NewsEventId ? "showless" : ""
                // }
              />
            </NewsEventsCard>
          ))}
        </NewsEventsContainerWrapper>
      </NewsEventContainer>
    </>
  );
};

const NewsEventContainer = styled.div`
  min-height: 800px;
`;

const NewsEventsH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;
  color: #042157;
  margin-top: 65px;
  margin-bottom: 50px;

  @media (max-width: 400px) {
    font-size: 1.8rem;
    /* margin-left: 10px; */
  }
`;

const NewsEventsContainerWrapper = styled.div`
  width: auto;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const NewsEventsCard = styled.div`
  position: relative;
  width: 350px;
  margin: 20px;

  /* background: #c4d5f5; */

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
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const NewsEventsIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const NewsEventsIcon = styled.img`
  max-width: 350px;
  height: 240px;
`;

const NewsEventsContent = styled.div`
  padding: 20px;
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

const NewsEventsH3 = styled.h3`
  color: #042157;
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 10px;
`;

const NewsEventsP = styled.p`
  font-weight: 300;
  color: #042157;
`;

const NewsEventsMoreSection = styled.a`
  position: relative;
  padding: 10px 15px;
  background: #0f4cbd;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
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

export default NewsEvents;
