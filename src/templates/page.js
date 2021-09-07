import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LastNews from "../components/lastNews"

const Page = ({ data }) => {
  //I saw that some pages have different templates, so templateName can be used as conditional to build different layouts
  const {
    content,
    title,
    slug,
    // template: { templateName },
  } = data.wpPage
  return (
    <Layout>
      <Seo title={title} />
      <div className="main-container">
        <div className="main-container-inner">
          {slug !== 'video' && (
          <>
            <h1
              className="page-title"
              dangerouslySetInnerHTML={{ __html: title }} />
          </>
          )}
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }} />
          {slug === "press-articles" && <LastNews />}
        </div>
      </div>
    </Layout>
  )
}

export default Page
// Adapt this gatsbyImageData parameters to your needs for this image
export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
      slug
      uri
      isFrontPage
      isPrivacyPage
      PageCreativeGallery {
        pageHeading
        pageSubheading
        topHeading
        topSubheading
      }
      PageProductOffers {
        headline
        leftHeader
        sliderProductOffer {
          ... on WpResource {
            id
            title
            uri
            slug
            template {
              templateName
            }
            content
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 1000
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
      }
      template {
        templateName
      }
    }
  }
`
