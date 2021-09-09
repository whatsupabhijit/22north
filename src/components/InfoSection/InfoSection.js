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
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};

  margin-top: 80px;
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;

  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;

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
  margin: 25px;
  padding: 0 5px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 5px;
  padding: 0 5px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  /* max-width: 540px; */
  padding-top: 0;
  padding-bottom: 60px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#042157")};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TopLine = styled.p`
  color: #042141;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

const SubTitle = styled.p`
  max-width: 550px;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 420px;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default InfoSection;
