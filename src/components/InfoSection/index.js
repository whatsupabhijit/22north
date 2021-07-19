import React from "react";
// import Button from "../ButtonElement";
import styled from "styled-components";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  descriptions,
  img,
  alt,
  //   buttonLabel,
  //   dark,
  //   dark2,
  //   primary,
  backgroundImage,
}) => {
  console.log(lightBg);
  return (
    <>
      <InfoContainer key={id} lightBg={lightBg} id={id} bgImg={backgroundImage}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {/* Column 1 */}
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
                <TopLine>{topLine}</TopLine>

                {descriptions?.map((description, i) => (
                  <SubTitle key={i} darkText={darkText}>
                    {description}
                  </SubTitle>
                ))}
              </TextWrapper>
            </Column1>

            {/* Column 2*/}
            <Column2>
              <ImgWrap bgImg={img}>
                {img ? <Img src={img} alt={alt} /> : <p />}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out; */

  @media (max-width: 768px) {
    padding: 100px 0;
  }

  @media (min-width: 1398px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 900px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  /* text-transform: uppercase; */
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "green")};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default InfoSection;
