import React from "react"
import { Link, graphql } from "gatsby"
// import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProfileArchive = ({ data, pageContext }) => {
  const posts = data.allWpProfile.nodes
  return (
    <Layout>
      <Seo title="All Profiles" />

      <div>
        {posts?.map((post) => {
          const { id, title, uri } = post

          return (
            <h3 key={id} style={{ color: "red" }}>
              <Link to={uri}>{title}</Link>
            </h3>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpProfile(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        TypeProfiles {
          profileColor
        }
        content
        slug
        title
        uri
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
  }
`

export default ProfileArchive
