import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home"
import Pricing from "./components/Pricing";
import Home from "./components/Home";

const Router = ({ route }) => {
  if (route === "Pricing") return <Pricing />;
  // else if(route === "integrations") return <Integrations/>;
  return <Home />;
};

const App = () => {
  const [route, changeRoute] = useState("home");
  return (
    <section className="hero is-success is-fullheight">
      <Navbar route={route} changeRoute={changeRoute} />
      <Router route={route} />
      {/* <Footer /> */}
    </section>
  );
};

export default App;
