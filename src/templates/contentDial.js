import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

import Header from "../../src/components/content-dial/header";
import Body from "../../src/components/content-dial/body";

const Product = ({ data }) => {
  const {
    title,
    featuredImage,
    TypeContentDial,
    contentDialCategories,
  } = data.wpContentDial;

  return (
    <Layout>
      <Seo title={title} />
      <div className="main-container">
        <div className="main-container-inner">
          <div className="single-content-dial">
            <Header
              title={title}
              image={featuredImage}
              websiteUrl={TypeContentDial.websiteUrl}
              categories={contentDialCategories}
            />
            <Body {...TypeContentDial} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const pageQuery = graphql`
  query($uri: String!) {
    wpContentDial(uri: { eq: $uri }) {
      title
      uri
      slug
      contentDialCategories {
        nodes {
          name
        }
      }
      TypeContentDial {
        websiteUrl
        editor
        facebookUrl
        instagramUrl
        fieldGroupName
        slides {
          publisherImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 337
                  height: 707
                  quality: 100
                  placeholder: NONE
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                quality: 100
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
