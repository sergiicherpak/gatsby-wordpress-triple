import React from "react";
import Layout from "../components/layout";
import HubspotForm from 'react-hubspot-form';
import Seo from "../components/seo";

export default function ContactUS() {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <div id="ideasPageJSIndicator" />
      <div className="companycareers-section-transition-container section-transition-container">
        <div className="section-transition white" />
      </div>
      <div className="bland-section-container contact-us-page">
        <div className="heading hubspot-light">
          <div className="form-container">
            <h2 className="h1">Contact Us</h2>
            <HubspotForm
              portalId='6743804'
              formId='5bcbc3f6-fe9f-4152-aaa6-daf6ad247aa5'
              />
          </div>
        </div>
      </div>
    </Layout>
  );
}
