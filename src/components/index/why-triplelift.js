import React from "react";

export default function WhyTripleLift(props) {
  return (
    <>
      <div className="why-triplelift">
        <h2>Why TripleLift?</h2>
        <div className="why-triplelift-section-container">
          <div className="why-triplelift-section flex flex-column">
            <div className="flex items-end">
              <h3>Direct</h3>
            </div>
            <p className="pt3">
              We build relationships directly with publishers to deliver brand
              safe environments and better performance.
            </p>
          </div>
          <div className="why-triplelift-section flex flex-column">
            <div className="flex items-end">
              <h3>Diverse</h3>
            </div>
            <p className="pt3">
              We offer products across channels, formats, publishers and
              partners.
            </p>
          </div>
          <div className="why-triplelift-section flex flex-column">
            <div className="flex items-end">
              <h3>Designed</h3>
            </div>
            <p className="pt3">
              We apply technologies to ensure that the delivery of your creative
              is worthy of your brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
