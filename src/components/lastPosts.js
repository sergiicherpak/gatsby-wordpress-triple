import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LastPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 3) {
        nodes {
          ...postTemplateFragment
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes
  return (
    <div className="bland-section-container latest-blog-posts-section-container" id="blog">
      <div className="heading">
        <h2 className="h1 text-primaryGradient">Latest Blog Posts</h2>
        <p>A supportive company is a company that communicates.</p>
        <p>Here’s what we’ve been thinking about.</p>
      </div>
      <div className="bland-section-inner-container">
        {posts?.map((post) => {
          const { title, uri, id, date } = post
          const image = getImage(post.featuredImage?.node?.localFile)
          return (
            <a key={id}
              className="bland-section-inner-item blog-post-container shadow-1"
              href={uri}
              target="_blank"
              rel="noreferrer"
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
            </a>
          )
        })}
      </div>
      <a className="cta cta-style-2 right-text-align" href="/blog">
        <span>Read More</span>
        <img alt="arrow right" src="/images/arrow-right.svg" />
      </a>
    </div>
  )
}

export default LastPosts
