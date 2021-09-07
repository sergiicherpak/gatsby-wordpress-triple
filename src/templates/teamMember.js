import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { title } = data.wpTeamMember
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
    wpTeamMember(uri: { eq: $uri }) {
      title
      uri
      TypeTeamMember {
        biography
        jobTitle
      }
      id
      slug
    }
  }
`
