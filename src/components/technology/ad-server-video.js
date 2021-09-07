import React from "react";

export default function AdServer() {
  return (
    <div className="technologySectionContainer technologySection3">
      <div className="copy-container">
        <h2 className="text-primaryGradient bold">Ad Server</h2>
        <p>
          Our Ad Server allows Publishers to seamlessly power native direct
          deals as part of their existing workflow. Leverage our platform to
          build and manage native creative assets and run ads directly on the
          server of your choice.
        </p>
      </div>
      <div className="video-container">
        <div className="animate-video-border-outer shadow-3" />
        <div className="animate-border-content">
          <iframe
            title="Ad Server"
            allow="autoplay; fullscreen"
            allowFullScreen=""
            className="lazy-loaded"
            frameBorder="0"
            src="https://player.vimeo.com/video/420893584?background=1"
          />
        </div>
      </div>
    </div>
  );
}
