import React from "react";

const Navbar = () => (
  <div className="hero-head">
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a> */}
          <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            {/* needed to simulate a burger menu */}
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a href="/" className="navbar-item is-active">
              Home
            </a>
            <a href="/pricing" className="navbar-item">
              Pricing
            </a>
            <a href="/integrations" className="navbar-item">
              Integrations
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Navbar;
