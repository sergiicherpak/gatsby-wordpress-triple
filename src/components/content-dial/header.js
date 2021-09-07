import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";
import {BackSvg } from './icons'


const header = ({ title, image, uri, websiteUrl, categories }) => {
  const imageData = image?.node.localFile.childImageSharp.gatsbyImageData;
  return (
    <article>
      <header class="entry-header">
        <div class="header-content">
          <div class="header-inner">
            <div class="logo-col">
              <GatsbyImage className="publisher-logo" image={imageData} />
            </div>
            <div class="title-col">
              <h1 class="entry-title">{title}</h1>
              <a
                class="publisher-url"
                target="_blank"
                href="//yourtango.com"
                rel="nofollow noreferrer"
              >
                {websiteUrl}
              </a>
            </div>
            <div class="return-cd-page">
              <Link to="/contentdial/publishers"><BackSvg/></Link>
            </div>
          </div>
          <div class="categories">
            {categories.nodes.map((category, index) => {
              return (
                <>
                  <Link
                    to={`/contentdial/publishers/?categories=${slugify(
                      category.name
                    )}`}
                  >
                    {category.name}
                  </Link>
                  {index !== category.length - 1 && " / "}
                </>
              );
            })}
          </div>
        </div>
      </header>
    </article>
  );
};

export default header;
