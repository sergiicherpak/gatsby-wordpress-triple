import React from "react"
import { Link, graphql } from "gatsby"
// import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <div className="blog-page">
        <div className="bland-section-container">
          <div className="bland-section-inner-container">
            {posts.map((post) => {
              const { title, uri, date } = post
              const image = getImage(post.featuredImage?.node?.localFile)

              return (
                <a key={post.uri} href={uri} className="bland-section-inner-item blog-post-container shadow-1">
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={post.featuredImage?.node?.alt || ``}
                      />
                    )}
                    <div className="copy-container">
                      <span className="title">
                        {title}
                      </span>
                      <div>
                        <span className="date">{date}</span>
                      </div>
                    </div>
                  </article>
                </a>
              )
            })}
          </div>
          <div className="pagination">
            <ul className="nav">
              {previousPagePath && (
                <>
                  <li><Link to={previousPagePath}>Previous</Link></li>
                </>
              )}
              {nextPagePath && (
                <>
                  <li><Link to={nextPagePath}>Next</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        ...postTemplateFragment
      }
    }
  }
`
