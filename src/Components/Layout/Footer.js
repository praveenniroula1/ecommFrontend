import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light p-3">
      <h4 className="text-center ">
        All Right Reserved ©Praveen Niroula's Ecommerce
      </h4>
      <p className="text-center ms-auto">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/policy">Privacy & Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
