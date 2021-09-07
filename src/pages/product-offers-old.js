import React from "react";

import Layout from "../components/layout";

export default function ProductOffers() {
  return (
    <Layout>
      <div id="ideasPageJSIndicator" />
      <div className="companycareers-section-transition-container section-transition-container">
        <div className="section-transition white" />
      </div>
      <div className="hero not-homepage company-careers-hero">
        <div className="copy mt3">
          <h1>Product offers</h1>
          <p className="mt3">
            TripleLift offers opportunities across Native, Video, Display, and
            Branded Content that effectively deliver your message across premium
            publishers and resonate with your target audience.
          </p>
        </div>
        <div className="hero-visual company-careers">
          <img
            alt="Spring Package Square"
            src="https://mk0newtlihs9atvmilj.kinstacdn.com/wp-content/uploads/2021/03/SpringPackage-Square.jpg" />
        </div>
      </div>
      <div className="bland-section-container latest-blog-posts-section-container">
        <div className="heading">
          <h2 className="h1">
            We have created a number of deals and packages tailored to
            advertisers like you, across multiple verticals.
          </h2>
          <h3 className="mt3">
            These packages highlight consumer trends, TripleLift performance
            data and creative best practices to help you get the most out of
            your campaign.
          </h3>
        </div>
      </div>
    </Layout>
  );
}
