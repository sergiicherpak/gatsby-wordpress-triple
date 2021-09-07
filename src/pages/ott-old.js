import React from "react";

import Layout from "../components/layout";
import OTTHero from "../components/ott/ott-hero";

export default function Ott() {
  return (
    <Layout>
      <div id="technologyPageJSIndicator" />
      <div className="technologypage-section-transition-container section-transition-container">
        <div className="section-transition section1"></div>
        <div className="section-transition section2"></div>
      </div>
      <OTTHero />
      <div className="technologySectionContainer technologySection1">
        <div className="copy-container">
          <h2 className="text-primaryGradient bold">Brand Integration</h2>
          <p>
            Post-production visual effects puts the right brand in the right
            shot.
          </p>
        </div>
        <div className="video-container">
          <div className="animate-video-border-outer shadow-3" />
          <div className="animate-border-content">
            <iframe
              title="Brand Integration"
              allow="autoplay; fullscreen"
              allowFullScreen=""
              className="lazy-loaded"
              frameBorder="0"
              src="https://player.vimeo.com/video/420893419?background=1"
            />
          </div>
        </div>
      </div>
      <div className="technologySectionContainer technologySection2">
        <div className="copy-container">
          <h2 className="text-primaryGradient bold">In-action Six</h2>
          <p>
            Stylized video scaleback experience delivers beautiful creative with
            no disruption.
          </p>
        </div>
        <div className="video-container">
          <div className="animate-video-border-outer shadow-3" />
          <div className="animate-border-content">
            <iframe
              title="In-action Six"
              allow="autoplay; fullscreen"
              allowFullScreen=""
              className="lazy-loaded"
              frameBorder="0"
              src="https://player.vimeo.com/video/420893419?background=1"
            />
          </div>
        </div>
      </div>
      <div className="technologySectionContainer technologySection3">
        <div className="copy-container">
          <h2 className="text-primaryGradient bold">Dynamic Overlay</h2>
          <p>
            A new take on the lower third, smart and subtle, with a powerful
            impact.
          </p>
        </div>
        <div className="video-container">
          <div className="animate-video-border-outer shadow-3" />
          <div className="animate-border-content">
            <iframe
              title="Dynamic Overlay"
              allow="autoplay; fullscreen"
              allowFullScreen=""
              className="lazy-loaded"
              frameBorder="0"
              src="https://player.vimeo.com/video/420893419?background=1"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
