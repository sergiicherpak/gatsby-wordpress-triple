import React from "react";

export default function DynamicTemplating() {
  return (
    <div className="technologySectionContainer technologySection2">
      <div className="copy-container">
        <h2 className="text-primaryGradient bold">Dynamic Templating</h2>
        <p>
          Our Dynamic Templating adapts advertisers’ creative components in
          real time, rendering native ads that seamlessly match the look and
          feel of every environment.
        </p>
      </div>
      <div className="video-container">
        <div className="animate-video-border-outer shadow-3" />
        <div className="animate-border-content">
          <iframe
            title="Dynamic Templating"
            allow="autoplay; fullscreen"
            allowFullScreen=""
            className="lazy-loaded"
            frameBorder="0"
            src="https://player.vimeo.com/video/420893459?background=1"
          />
        </div>
      </div>
    </div>
  );
}
