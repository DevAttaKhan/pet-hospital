import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/icons/Logo";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex justify-sb">
        <div className="logo">
          <Logo />
        </div>
        <nav>
          <ul className="flex ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "nav-link__active" : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
