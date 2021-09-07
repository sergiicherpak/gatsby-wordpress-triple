import React from "react";

import Layout from "../components/layout";
import IdeasHero from "../components/ideas/ideas-hero";
import LastPosts from "../components/lastPosts";
import IdeasNews from "../components/ideas/ideas-news";
import PodCast from "../components/ideas/ideas-podcast";
import Distinctions from "../components/ideas/ideas-distinction";
import Seo from "../components/seo";

export default function IdeasPage() {
  return (
    <Layout>
      <Seo title="Ideas" />
      <div id="ideasPageJSIndicator" />
      <div className="ideaspage-section-transition-container section-transition-container">
        <div className="section-transition white" />
        <div className="section-transition gradientDark1" />
      </div>
      <IdeasHero />
      <LastPosts />
      <IdeasNews />
      <PodCast />
      <Distinctions />
    </Layout>
  );
}
