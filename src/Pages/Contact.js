import React from "react";
import Layout from "../Components/Layout/Layout";
import contact from "../Assets/Img/contact.jpg";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout>
      <div
        className="card"
        style={{
          width: "20rem",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          height: "80vh",
          marginBottom: "1rem",
        }}
      >
        <img className="card-img-top" src={contact} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Contact US</h5>
          <p className="card-text">
            <MdOutlineMarkEmailRead /> Praveen@Ecommerce.com.au
          </p>
          <p className="card-text">
            <FaPhone /> +61 433 850 982
          </p>
          <p className="card-text">
            <FaHouse /> 77 George Street, South Australia.
          </p>
          <a href="#" className="btn btn-primary ms-auto">
            Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
