import React from "react";

export default function PodCast() {
  return (
    <div className="spotlessPodcastSeriesSectionContainer explore-our-gallery-container product-page-cta">
      <div className="explore-our-gallery">
        <div className="animate-border-outer shadow-3" />
        <div className="animate-border-content">
          <div className="product-page-cta-content-inner">
            <div className="headline-container">
              <span className="headline text-primaryGradient">
                Podcast series:
                <br />
                Spotless
              </span>
            </div>
            <img alt="spotless"
              className="section-visual small"
              src="/images/spotless.png"
            />
            <a className="cta cta-style-2 right-text-align small" href="https://www.triplelift-ott.com/spotless">
              <span>Take a listen</span>
              <img alt="arrow right" src="/images/arrow-right.svg" />
            </a>
            <p>
              The world of television and advertising is evolving quickly. The
              largest content creators, distributors and brands are all vying
              for new ways to engage the next generation of viewers. Presented
              by two media innovators – TripleLift and Advertising Week –
              Spotless brings you in-depth conversations with the leaders who
              are driving this evolution.
            </p>
          </div>
          <div className="section-visual large">
            <img alt="spotless" src="/images/spotless.png" />
            <a className="cta cta-style-2 right-text-align" href="https://www.triplelift-ott.com/spotless">
              <span>Take a listen</span>
              <img alt="arrow right" src="/images/arrow-right.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
