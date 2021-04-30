import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div >
        <div className="row px-3">
          <small className="ml-4 ml-sm-5 mb-2">
            Copyright Aymen Ben Ayed © 2021. All rights reserved.
          </small>
          <div className="social-contact ml-4 ml-sm-auto">
            <span className="fa fa-facebook mr-4 text-sm" />
            <span className="fa fa-google-plus mr-4 text-sm" />
            <span className="fa fa-linkedin mr-4 text-sm" />
            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
