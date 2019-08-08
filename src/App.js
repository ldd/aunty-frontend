import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home"
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <section className="hero is-success is-fullheight">
      <Navbar />
      <Pricing />
      {/* <Footer /> */}
    </section>
  );
};

export default App;
