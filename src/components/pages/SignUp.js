import React from "react";

import "../../App.css";
// import Cards from "../Cards";
import LoginForm from "../../components/LoginForm/LoginForm";
// import HeroSection from "../HeroSection";
import Footer from "../Footer";

export default function SignUp() {
  return (
    <>
      <video src="/images/video-6.mp4" autoPlay loop muted />
      {/* <h1 className="home">EPIC</h1> */}
      <LoginForm />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}
