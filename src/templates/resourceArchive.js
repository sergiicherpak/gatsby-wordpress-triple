import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ResourceArchive = ({ data, pageContext }) => {
  const posts = data.allWpResource.nodes
  return (
    <Layout>
      <Seo title="All resources" />

      <div>
        {posts?.map((post) => {
          const { id, title, uri, typeProductOffer, featuredImage } = post
          const extLink = typeProductOffer?.resourceLink
          // const link = extLink ? extLink : uri
          const image = getImage(featuredImage?.node?.localFile)
          return (
            <h3 key={id} style={{ color: "red" }}>
              {extLink ? (
                <a href={extLink} target="_blank" rel="noopener noreferrer">
                   <GatsbyImage image={image} alt={title} />
                </a>
              ) : (
                <Link to={uri}><GatsbyImage image={image} alt={title} /></Link>
              )}
            </h3>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpResource(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        content
        uri
        slug
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
        TypeProductOffer {
          resourceLink
        }
        topics {
          nodes {
            id
            slug
            name
            uri
          }
        }
        regions {
          nodes {
            id
            slug
            name
            uri
          }
        }
      }
    }
  }
`

export default ResourceArchive
