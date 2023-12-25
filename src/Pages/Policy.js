import React from "react";
import Layout from "../Components/Layout/Layout";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import contact from "../Assets/Img/contact.jpg";

const Policy = () => {
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
          <h5 className="card-title">Privacy and Policies</h5>
          <p className="card-text">
            <MdOutlineMarkEmailRead /> add policies
          </p>
          <p className="card-text">
            <FaPhone /> add policies
          </p>
          <p className="card-text">
            <FaHouse /> add policies
          </p>
          <a href="#" className="btn btn-primary ms-auto">
            Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
