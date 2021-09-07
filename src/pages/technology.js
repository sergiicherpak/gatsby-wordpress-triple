import React from "react";

import Layout from "../components/layout";
import TechnologyHero from "../components/technology/technology-hero";
import ComputerVisonVideo from "../components/technology/computer-vison-video";
import DynamicTemplatingVideo from "../components/technology/dynamic-templating-video";
import AdServerVideo from "../components/technology/ad-server-video";
import Seo from "../components/seo";


class Technology extends React.Component {
  componentDidMount () {
    const $ = window.jQuery;
    const gsap = window.gsap;
    if (document.getElementById("technologyPageJSIndicator")) {

      window.setTimeout(function(){$(".loading").addClass("not-loading");}, 100);

      var tl = gsap.timeline({repeat: 0});

      tl.to(".loading", {
        opacity: 0,
        duration: 1,
      })

      var OTTBreakout = gsap.timeline({repeat: 0, delay: 1});

      OTTBreakout.from(".OTT-breakout", {
        y: 20,
        duration: .5,
        },
        "OTT-breakout-slide-up"
      )

      OTTBreakout.to(".OTT-breakout", {
        opacity: 1,
        duration: .5,
        },
        "OTT-breakout-slide-up"
      )

      OTTBreakout.from(".OTT-breakout :nth-child(1)", {
        x: -10,
        duration: .4,
        },
        "OTT-breakout"
      )

      OTTBreakout.from(".OTT-breakout :nth-child(2)", {
        opacity: 0,
        x: 10,
        duration: .4,
      },
      "OTT-breakout"
      )

      OTTBreakout.from(".OTT-breakout :nth-child(3)", {
        opacity: 0,
        scale: .95,
        x: 15,
        duration: .4,
      },
      "OTT-breakout"
      )

      const computerVisionSectionTransition = gsap.timeline( {
        scrollTrigger: {
          trigger: ".technologySection1",
          scrub: true,
          end: "5%",
          toggleActions: "play reverse play reverse",
        }
      });

      computerVisionSectionTransition
      .to(
        '.technologypage-section-transition-container .section-transition.section2',
        {
          opacity: 1,
          duration: 1
        },"transition1"
      );
    }
  }
  render () {
    return (
      <Layout>
        <Seo title="Technology" />
        <div id="technologyPageJSIndicator" />
        <div className="technologypage-section-transition-container section-transition-container">
          <div className="section-transition section1" />
          <div className="section-transition section2" />
        </div>
        <TechnologyHero />
        <ComputerVisonVideo />
        <DynamicTemplatingVideo />
        <AdServerVideo />
      </Layout>
    );

  }
}

export default Technology
