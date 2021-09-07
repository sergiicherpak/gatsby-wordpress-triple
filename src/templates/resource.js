import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { title } = data.wpResource
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
    wpResource(uri: { eq: $uri }) {
      TypeProductOffer {
        resourceLink
      }
      content
      id
      slug
      title
      uri
    }
  }
`
