import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function IdeasNews() {
  const data = useStaticQuery(graphql`
    query {
      allWpNews(limit: 3) {
        nodes {
          id
          title
          link
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `)

  const news = data.allWpNews.nodes

  return (
    <div className="bland-section-container latest-news-section-container" id="news">
      <div className="heading">
        <h2 className="h1 text-primaryGradient">News</h2>
        <p>We’re pleased to be featured in the press from time-to-time.</p>
        <p>Here are some of our recent mentions:</p>
      </div>
      <div className="bland-section-inner-container">
      {news?.map((post) => {
        const { title, link, id, date } = post
        return (
          <a
            key={id}
            className="bland-section-inner-item blog-post-container shadow-1"
            href={link}
            target="_blank"
            rel="noreferrer"
          >

            <div className="copy-container">
              <span className="title">
                {title}
              </span>
              <div>
                <span className="date">{date}</span>
              </div>
            </div>
          </a>
        )
      })}
      </div>

      <a className="cta cta-style-2 right-text-align" href="/press-articles">
        <span>View All</span>
        <img alt="arrow right" src="/images/arrow-right.svg" />
      </a>
    </div>
  );
}
