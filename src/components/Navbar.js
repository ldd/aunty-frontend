import React, { useState, useCallback } from "react";

export const NavBarBurger = ({ menuStatus }) => (
  <span
    className={`navbar-burger burger ${menuStatus}`}
    data-target="navbarMenuHeroC"
  >
    {/* needed to simulate a burger menu */}
    <span />
    <span />
    <span />
  </span>
);

export const NavBarLink = ({ changeRoute, route, link }) => (
  <a
    href={`#${link}`}
    onClick={changeRoute}
    className={`navbar-item ${link === route ? "is-active" : ""}`}
  >
    {link}
  </a>
);

const Navbar = ({ route, changeRoute, pages = [] }) => {
  const [menuStatus, toggleMenuStatus] = useState("");

  const menuHandler = useCallback(() => {
    toggleMenuStatus(menuStatus === "" ? "is-active" : "");
  }, [toggleMenuStatus, menuStatus]);

  const generateChangeRoute = link => () => {
    toggleMenuStatus("");
    changeRoute(link);
  };
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand" onClick={menuHandler}>
            <NavBarBurger menuStatus={menuStatus} />
          </div>
          <div id="navbarMenuHeroC" className={`navbar-menu ${menuStatus}`}>
            <div className="navbar-end">
              {pages.map(link => (
                <NavBarLink
                  link={link}
                  route={route}
                  changeRoute={generateChangeRoute(link)}
                  key={`navbar-${link}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
