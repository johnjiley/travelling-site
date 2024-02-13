import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      {/* <h1 className="home">EPIC</h1> */}
      <HeroSection />
      <Cards />
      <Footer />
      <div className="marquee-container">
        <div className="marquee">
          <p>This text will scroll from right to left.</p>
        </div>
      </div>
      <div>
        <h1>the Google map</h1>
      </div>
    </>
  );
}
export default Home;
