import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Contact from "../components/Conact";
import Footer from "../components/Footer";
import { homeObjAbout, homeObjTeam } from "../components/InfoSection/Data";
import Blogs from "../components/Blogs";
import NewsEvents from "../components/NewsEvents";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjAbout} />
        <InfoSection {...homeObjTeam} />
        <Services />
        <hr />
        <NewsEvents />
        <hr />
        <Blogs />
        <Contact />

        <Footer />
      </Router>
    </>
  );
};

export default Home;
