import React from "react";

import Layout from "../components/layout";
import WWAMission from "../components/company/who-were-are-mission";
import CoreValues from "../components/company/core-values";
import Leadership from "../components/company/leadership";
import Members from "../components/company/members";
import Careers from "../components/company/careers";
import Offices from "../components/company/offices";
import Seo from "../components/seo";

class CompanyPage extends React.Component {
  componentDidMount () {
    const gsap = window.gsap;
    if (window.innerWidth > 1023 ) {
      gsap.timeline( {
        scrollTrigger: {
          trigger: ".company-page-section.who-we-are",
          pin: ".sticky-animation-container",
          scrub: true,
          end: "100%",
          toggleActions: "play reverse play reverse",
        }
      });


      const careersSectionParallax = gsap.timeline( {
        scrollTrigger: {
          trigger: ".careers-section-container",
          scrub: true,
          toggleActions: "play reverse play reverse",
        }
      });

      careersSectionParallax
      .to(
        '.careers-section-container .image-bg',
        {
          backgroundPosition: "center 20%",
          duration: 1
        },"transition1"
      );
    }
  }

  render () {
    return (
      <Layout>
        <Seo title="Company" />
        <div id="companyPageJSIndicator"></div>
        <WWAMission />
        <CoreValues />
        <Leadership />
        <Members />
        <Careers />
        <Offices />
      </Layout>
    )
  }
}

export default CompanyPage
