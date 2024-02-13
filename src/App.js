import React from "react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/pages/Home";
import { Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
// import SignupForm from "./components/pages/SignUpForm";
// import GoogleMap from "./component/pages/GoogleMap";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
      {/* <GoogleMap /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
