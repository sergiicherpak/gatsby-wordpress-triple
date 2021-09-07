import React from "react";

export default function Distinctions() {
  return (
    <div className="bland-section-container distinctions-section-container" id="distinctions">
      <div className="distinctions-hero">
        <div className="copy-container">
          <h2 className="h1">Distinctions</h2>
          <p className="h4">
            We are proud of the awards & distinctions earned by our company
            and our people over the years.
          </p>
          <p>Here are some highlights:</p>
        </div>
        <div className="distinction-logo-grid">
          <img alt="adage-trim" src="/images/distinctions/adage-trim.png" />
          <img alt="50" src="/images/distinctions/50.png" />
          <img alt="deloitte" src="/images/distinctions/deloitte.png" />
          <img alt="crain" src="/images/distinctions/crain.png" />
          <img alt="inc5000" src="/images/distinctions/inc5000.png" />
          <img alt="fastest-growing" src="/images/distinctions/fastest-growing.png" />
        </div>
      </div>
      <div className="distinctions-timeline">
        <div className="year-container">
          <h2 className="year-header">2020</h2>
          <p className="distinction">Deloitte Technology Fast 500</p>
          <p className="distinction">
            Ad Week 10 Fastest Growing Solution Providers
          </p>
          <p className="distinction">
            Inc. 5000 Fastest Growing Private Companies in America
          </p>
        </div>
        <div className="year-container">
          <h2 className="year-header">2019</h2>
          <p className="distinction">
            One of Business Insider’s 18 Hottest Ad Tech Companies
          </p>
          <p className="distinction">
            A Comparably “Best Company for Women” and “Best Company for
            Diversity”
          </p>
          <p className="distinction">
            Entrepreneur Of the Year® 2019 New York Award Winner, Marketing &
            Advertising – Eric Berry, Co-Founder and CEO
          </p>
          <p className="distinction">
            Flatiron School’s The 30 Best Tech Companies in NYC to Work for in
            2019 (Mid-Size Tech Companies)
          </p>
          <p className="distinction">
            Inc. 5000 Fastest Growing Private Companies in America
          </p>
          <p className="distinction">
            Crain’s Fast 50, Fastest Growing Companies in New York
          </p>
        </div>
      </div>
    </div>
  );
}
