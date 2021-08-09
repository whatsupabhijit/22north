import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Sitemap </FooterLinkTitle>
                <FooterLink to="/#about">About Us</FooterLink>
                <FooterLink to="/#team">Management</FooterLink>
                <FooterLink to="/#newsevents">News & Events</FooterLink>
                <FooterLink to="/#contact">Contact</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> TTN Offerings </FooterLinkTitle>
                <FooterLink to="/">Guidance</FooterLink>
                <FooterLink to="/">Funding</FooterLink>
                <FooterLink to="/">Office Space</FooterLink>
                <FooterLink to="/">BusinessDevelopment</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Top Blogs </FooterLinkTitle>
                <FooterLink to="/how-to-stand-out-from-the-crowd">
                  How to Stand Out...
                </FooterLink>
                <FooterLink to="/insights-to-grow-your-business">
                  Insights to grow...
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Socaial Media</FooterLinkTitle>
                <FooterLink to="/">Linkedin</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogoWrapper to="/" onClick={toggleHome}>
                <SocialLogo to="/">
                  22
                  <FaGlobe />
                  North
                </SocialLogo>
                <SocialLogoTagLine>Dream For Tomorrow</SocialLogoTagLine>
              </SocialLogoWrapper>

              <WebsiteRights>
                All Rights Reserved 2020 - {new Date().getFullYear()}.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.twitter.com/TheBoxStep1"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.linkedin.com/company/22northus"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  background-color: #1f4382;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 10px;

  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const SocialLogoTagLine = styled.div`
  font-size: 15px;
  color: #fff;
  margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export default Footer;
