import React from "react";
import { Link } from "react-router-dom";
import IconAndText from "../IconAndText/IconAndText";

const FooterLinks = ({ list, heading, st }) => {
  return (
    <ul className={`footer__nav-links ${st ? "contacts" : ""} `}>
      <div className="footer__nav-heading">
        <h5>{heading}</h5>
      </div>

      {list.map((el, i) => {
        return (
          <li key={i}>
            <Link to={el.path}>
              {el.label ? (
                el.label
              ) : (
                <>
                  <IconAndText icon={el.icon} text={el.text} />
                </>
              )}
            </Link>
          </li>
        );
      })}
      {/* <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="about Us">About Us</Link>
      </li>
      <li>
        <Link to="services">Services</Link>
      </li>
      <li>
        <Link to="gallery">Gallery</Link>
      </li>
      <li>
        <Link to="team">Team</Link>
      </li>
      <li>
        <Link to="contact us">Contact us</Link>
      </li> */}
    </ul>
  );
};

export default FooterLinks;
