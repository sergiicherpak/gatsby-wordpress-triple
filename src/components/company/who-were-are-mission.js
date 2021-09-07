import React from "react";

class WhoWereAreMission extends React.Component {
  render () {
    return (
      <div className="first-two-sections-container">
        <div className="sticky-animation-container">
          <div className="company-page-sticky-animation gradient-mark">
            <div className="icon-container icon-1">
              <img src="/images/logomark-gradient.svg" alt="gradient mark" />
            </div>
          </div>
          <div className="company-page-sticky-animation grey-mark">
            <div className="icon-container icon-2">
              <img src="/images/logomark-grey.svg" alt="gradient grey" />
            </div>
          </div>
        </div>
        <div className="company-page-section who-we-are">
          <div className="scrolling-sidebar">
            <span className="sticky-text">Who We Are</span>
          </div>
          <div className="section-copy">
            <h1 className="big large-up">Who We Are</h1>
            <h2 className="h1 heritageOrange">
              TripleLift is a technology company rooted at the intersection of
              creative and media.
            </h2>
            <p>
              We are an advertising platform where creative fits seamlessly into
              every experience across desktop, mobile and video.
            </p>
            <p>
              Scroll further to learn more about who we are, how we work and
              explore ways to join the team.
            </p>
          </div>
        </div>
        <div className="company-page-section mission" id="mission">
          <div className="scrolling-sidebar">
            <span className="sticky-text">Mission</span>
          </div>
          <div className="section-copy">
            <h2 className="big large-up">Mission</h2>
            <h3 className="heritageOrange">
              We help make advertising work for everyone.
            </h3>
            <p>Advertising is important.</p>
            <p>
              It gives us a free press, enables us to connect with friends and
              funds our favorite content.
            </p>
            <p>
              TripleLift makes ads that work for everyone: Publishers, who seek
              greater monetization – Advertisers, who require better performance
              – Consumers, who want better ad experiences.
            </p>
            <p>
              This has been true from the first day of our existence, and it
              remains true today.
            </p>
            <p>
              We didn’t invent advertising, but we are making advertising
              better.
            </p>
            <p>
              Scroll further to learn more about who we are, how we work and
              explore ways to join the team.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoWereAreMission
