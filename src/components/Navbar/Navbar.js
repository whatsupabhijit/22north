import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  // const [navitems] = useState(["About", "Team", "Services", "Blog", "Contact"]);

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* Toptal HTML codes: https://www.toptal.com/designers/htmlarrows/math */}
            <NavLogoWrapper>
              <NavLogo to="/" onClick={toggleHome}>
                22 <FaGlobe /> North
              </NavLogo>
              <NavTagLine>Dream For Tomorrow</NavTagLine>
            </NavLogoWrapper>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Team
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Build & Grow
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="newsevents"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  News & Events
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="blogs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  Blogs
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="partners"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Partners
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#1f4382" : "transperant")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /* max-width: 110px; */
`;

const NavLogoWrapper = styled.div`
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

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  /* justify-self: flex-start; */

  color: #fff;
  /* cursor: pointer; */
  font-size: 1.8rem;

  font-weight: bold;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavTagLine = styled.div`
  font-size: 15px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export default Navbar;
