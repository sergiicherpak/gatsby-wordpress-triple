import React from "react";

import IdeasHeroVisual from "./ideas-hero-visual";

export default function IdeasHero() {
  return (
    <div className="hero not-homepage ideas-hero">
      <div className="copy mt3">
        <h1>Ideas</h1>
        <p className="pink mt3">
          TripleLift strives to be the most supportive company in ad tech. As
          part of that mission, we’re always developing ideas to start
          conversations and help solve challenges.
        </p>
        <p>Keep reading to see what’s on our mind.</p>
      </div>
      <IdeasHeroVisual />
    </div>
  );
}
