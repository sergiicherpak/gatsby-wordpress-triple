import React from "react";
import Layout from "../components/layout";
import CompanyCareersHero from "../components/company-careers/company-careers-hero";
import CompanyBenefits from "../components/company-careers/benefits";
import JobBoard from "../components/company-careers/jobs";
import Seo from "../components/seo";

export default function CompanyCareers() {
  return (
    <Layout>
      <Seo title="Company Careers" />
      <div id="ideasPageJSIndicator" />
      <div className="companycareers-section-transition-container section-transition-container">
        <div className="section-transition white" />
      </div>
      <CompanyCareersHero />
      <CompanyBenefits />
      <JobBoard />
    </Layout>
  );
}
