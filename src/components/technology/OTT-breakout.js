import React from "react";

export default function Ott() {
  return (
    <div className="hero-visual OTT-breakout">
      <img
        alt="Tech Hero Code"
        className="lb1"
        src="/images/OTT-breakout/Technolgy_Hero_Screen_TV_01.png"
      />
      <img
        alt="Tech Hero Code"
        className="lb2"
        src="/images/OTT-breakout/Technolgy_Hero_Code_01.png"
      />
      <div className="video-container">
        <iframe
          title="OTT-breakout"
          allow="autoplay; fullscreen"
          allowFullScreen=""
          className="video"
          frameBorder="0"
          height="360"
          src="https://player.vimeo.com/video/527615232?background=1&amp;amp;autoplay=1"
          width="640"
        />
      </div>
    </div>
  );
}
