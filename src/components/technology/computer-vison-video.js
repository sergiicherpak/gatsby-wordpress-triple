import React from "react";

export default function ComputerVision() {
  return (
    <div className="technologySectionContainer technologySection1">
      <div className="copy-container">
        <h2 className="text-primaryGradient bold">Computer vision</h2>
        <p>
          In order to make your ad look beautiful in any environment, we
          created computer vision technology that scans your ad to understand
          what elements are most essential to your campaign — like faces,
          objects and text areas. Our technology then generates a native
          placement that always keeps your important focal points in the
          frame.
        </p>
      </div>
      <div className="video-container">
        <div className="animate-video-border-outer shadow-3" />
        <div className="animate-border-content">
          <iframe
            title="Computer vision"
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
