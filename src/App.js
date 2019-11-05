import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Integrations from "./components/Integrations";
import Tasks from "./components/Tasks";
import Login from "./components/Login";

export const pages = ["Home", "Pricing", "Integrations", "Tasks", "Login"];

const parseRoute = route =>
  route === "" ? window.location.hash.slice(1) : route;

export const Router = ({ route }) => {
  const parsedRoute = parseRoute(route);
  if (parsedRoute === "Pricing") return <Pricing />;
  else if (parsedRoute === "Integrations") return <Integrations />;
  else if (parsedRoute === "Tasks") return <Tasks />;
  else if (parsedRoute === "Login") return <Login />;
  return <Home />;
};

const App = () => {
  const [route, changeRoute] = useState("");
  return (
    <section className="hero is-success is-fullheight is-bold">
      <Navbar route={route} changeRoute={changeRoute} pages={pages} />
      <Router route={route} />
    </section>
  );
};

export default App;
