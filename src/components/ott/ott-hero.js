import React from "react";

export default function OttHero() {
  return (
    <div className="hero not-homepage company-careers-hero ott-hero">
      <div className="copy mt3">
        <h1>CTV</h1>
        <p className="calmingBlue mt3">
          We’ve pioneered an innovative post-production solution that provides
          integrated ad experiences in streaming TV.
        </p>
      </div>
      <div className="hero-visual company-careers">
        <div className="video-container">
          <iframe
            title="CTV"
            allow="autoplay; fullscreen"
            allowFullScreen=""
            className="lazy-loaded"
            frameBorder="0"
            src="https://player.vimeo.com/video/420893419?background=1"
          />
        </div>
      </div>
    </div>
  );
}
