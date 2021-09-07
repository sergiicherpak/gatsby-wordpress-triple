import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const image = getImage(post.featuredImage?.node?.localFile)

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <div className="post-container">
        <div className="post-container-inner">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 className="h1" itemProp="headline">{parse(post.title)}</h1>

              <p className="meta-date">{post.date}</p>

              {image && (
                <GatsbyImage
                  image={image}
                  className="feature-image"
                  alt={post.featuredImage?.node?.alt || ``}
                  style={{ marginBottom: 50 }}
                />
              )}
            </header>

            {!!post.content && (
              <section
                itemProp="articleBody"
                className="entry-content">
                {parse(post.content)}
              </section>
            )}
          </article>

          <div className="pagination">
            <ul className="nav">
              <li>
                {previous && (
                  <Link to={previous.uri} rel="prev">
                    ← {parse(previous.title)}
                  </Link>
                )}
              </li>

              <li>
                {next && (
                  <Link to={next.uri} rel="next">
                    {parse(next.title)} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      ...postTemplateFragment
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
