import React, { useState, useCallback } from "react";

const Navbar = ({ route, changeRoute, pages }) => {
  const [menuStatus, toggleMenuStatus] = useState("");

  const menuHandler = useCallback(() => {
    toggleMenuStatus(menuStatus === "" ? "is-active" : "");
  }, [toggleMenuStatus, menuStatus, route]);

  const generateChangeRoute = link => () => {
    toggleMenuStatus("");
    changeRoute(link);
  };
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand" onClick={menuHandler}>
            <span
              className={`navbar-burger burger ${menuStatus}`}
              data-target="navbarMenuHeroC"
            >
              {/* needed to simulate a burger menu */}
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroC" className={`navbar-menu ${menuStatus}`}>
            <div className="navbar-end">
              {pages.map(link => (
                <a
                  key={`navbar-${link}`}
                  href={`#${link}`}
                  onClick={generateChangeRoute(link)}
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
};
export default Navbar;
