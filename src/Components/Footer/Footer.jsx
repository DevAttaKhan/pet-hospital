import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLogo from "../../Assets/icons/FooterLogo";

import { navigation, legal, contacts } from "./data";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-primary">
        <div className="container">
          <div className="footer__paragraph">
            <FooterLogo />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <FooterLinks list={navigation} heading="Navigation" />
          <FooterLinks list={legal} heading="Legal" />
          <FooterLinks list={contacts} heading="Contacts" st />
        </div>
        <div className="copyright">
          <p>© 2021 Saqib S. All Rights Reserved. </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
