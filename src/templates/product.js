import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { title } = data.wpProduct
  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query($uri: String!) {
    wpProduct(uri: { eq: $uri }) {
      slug
      uri
      title
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
      TypeProducts {
        productIcon {
          localFile {
            publicURL
          }
        }
        productFormat {
          formatContentType
          formatDescription
          formatName
          formatPublishers
          formatStyle
          formatTitle
          formatVideo
          videoOrientation
          formatImageTv {
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
          formatImageLaptop {
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
          formatImagePhone {
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
          formatIcon {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
