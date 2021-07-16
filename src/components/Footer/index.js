import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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
                <FooterLinkTitle> About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Subscribe</FooterLink>
                <FooterLink to="/">Newsletters</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Top Blogs </FooterLinkTitle>
                <FooterLink to="/">7Ps of Marketting</FooterLink>
                <FooterLink to="/">Future of Startups</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Socaial Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                TheBoxStep
              </SocialLogo>
              <WebsiteRights>
                Box Step {new Date().getFullYear()}. All Rights Reserved.{" "}
              </WebsiteRights>
              <SocialIcons>
                {/* <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink> */}
                <SocialIconLink
                  href="//www.instagram.com/the.boxstep/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.youtube.com/channel/UCQptTX9EcdDa7YnJXhtMEug"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.twitter.com/TheBoxStep1"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.linkedin.com/company/theboxstep"
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
  background-color: #101522;
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

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
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
