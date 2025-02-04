import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Services from "../components/Services/Services";
import Contact from "../components/Conact/Contact";
import Footer from "../components/Footer/Footer";
import {
  // homeObjAbout,
  homeObjFunding,
  homeObjResearch,
  homeObjTeam,
} from "../components/InfoSection/Data";
import Blogs from "../components/Blogs/Blogs";
import NewsEvents from "../components/NewsEvents/NewsEvents";
import Partners from "../components/Partners/Partners";
import About from "../components/About/About";
// import Research from "../components/Research/Research";

// import { MapWrapped } from "../components/Maps";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("inside Home.js");
  console.log("isOpen:", isOpen);
  // const [googleMapKey] = useState("AIzaSyAhyu1vVMMnXN60V9dOZY5LPeppuoMGpKg");
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />

      <HeroSection />

      {/* 1. About */}
      <About />

      {/* Team */}
      <InfoSection {...homeObjTeam} />

      {/* Buid and Grow */}
      <Services />

      {/* TTN Alliance */}
      <Partners />

      {/* R&D */}
      {/* <Research /> */}
      <InfoSection {...homeObjResearch} />

      {/* Funding */}
      <InfoSection {...homeObjFunding} />

      {/* News */}
      <NewsEvents />

      {/* Contact */}
      <Contact />

      {/* Blog */}
      <Blogs />

      {/* <div style={{ width: "100vw", height: "50vh" }}>
          <MapWrapped
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapKey}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div> */}

      <Footer />
    </>
  );
};

export default Home;
