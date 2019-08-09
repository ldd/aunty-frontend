import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Integrations from "./components/Integrations";

const Router = ({ route }) => {
  if (route === "Pricing") return <Pricing />;
  else if (route === "Integrations") return <Integrations />;
  return <Home />;
};

const App = () => {
  const [route, changeRoute] = useState("home");
  return (
    <section className="hero is-success is-fullheight is-bold">
      <Navbar route={route} changeRoute={changeRoute} />
      <Router route={route} />
      {/* <Footer /> */}
    </section>
  );
};

export default App;
