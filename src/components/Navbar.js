import React from "react";

const Navbar = ({ route, changeRoute }) => (
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
            {["Home", "Pricing", "Integrations"].map(link => (
              <a
                key={`navbar-${link}`}
                href={`#${link}`}
                onClick={() => changeRoute(link)}
                className={`navbar-item ${link === route ? "is-active" : ""}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Navbar;
