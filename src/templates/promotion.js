import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { title } = data.wpPromotion
  return (
    <Layout>
      <Seo title={title} />
      <h1 style={{ color: "red" }}>{title}</h1>
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query($uri: String!) {
    wpPromotion(uri: { eq: $uri }) {
      title
      uri
      slug
      content
      featuredImage {
        node {
          altText
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
`
