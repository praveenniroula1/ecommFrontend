import React from "react";
import Layout from "../Components/Layout/Layout";
import contact from "../Assets/Img/contact.jpg";

const ABout = () => {
  return (
    <Layout title={"About US- Ecom App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src={contact} style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 p-3">
            Welcome to Ecom App, where your shopping experience is reimagined
            for the digital age. Ecom App is not just an online marketplace;
            it's your gateway to a world of convenience, quality, and
            innovation. What Makes Ecom App Unique Tech-Driven Excellence: Ecom
            App is at the forefront of technological innovation. Discover a
            handpicked selection of products that mirror your unique style and
            preferences. Quality is our promise, and diversity is our strength.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ABout;
