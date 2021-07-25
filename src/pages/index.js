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

// import { MapWrapped } from "../components/Maps";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [googleMapKey] = useState("AIzaSyAhyu1vVMMnXN60V9dOZY5LPeppuoMGpKg");
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
      </Router>
    </>
  );
};

export default Home;
