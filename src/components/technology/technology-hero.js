import React from "react";

import Ott from "./OTT-breakout";

export default function TechnologyHero() {
  return (
    <>
      <div className="hero not-homepage products-hero">
        <div className="copy mt3">
          <h1>Technology</h1>
          <p className="calmingBlue mt3">
            TripleLift is leading the next generation of programmatic
            advertising by reinventing ad placements one medium at a time.
          </p>
          <div className="show-on-large">
            <p>
              Our technology powers ads that make advertising better for
              everyone – higher performing for brands, more lucrative for
              publishers and more respectful of the consumer’s experience.
            </p>
            <p>See how our technology is powering that revolution.</p>
          </div>
        </div>
        <Ott />
        <div className="show-on-small">
          <p>
            Our technology powers ads that make advertising better for everyone
            – higher performing for brands, more lucrative for publishers and
            more respectful of the consumer’s experience.
          </p>
          <p>See how our technology is powering that revolution.</p>
        </div>
      </div>
    </>
  );
}
