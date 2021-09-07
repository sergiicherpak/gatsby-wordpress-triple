import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const News = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const posts = data.allWpNews.nodes
  return (
    <Layout isHomePage>
      <Seo title="TripleLift in the Press" />
      <div className="archive-news">
        <div className="news-container">
          <h1 className="news-header-title">TripleLift in the Press</h1>
          <hr className="title-hr" />
          <div className="articles-container">
            <div className="articles">
              {posts.map((post) => {
                const { title, link, date } = post

                return (
                  <article className="shadow-1" key={link}>
                    <div className="entry-content">
                      <h3 className="entry-title">
                        <a className="entry-title-link" rel="noreferrer noopener" href={link} target="_blank" >
                          {title}
                        </a>
                      </h3>
                      <p className="entry-meta">
                        <time className="entry-time">{date}</time>
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
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

export default News

export const pageQuery = graphql`
  query WordPressNews($offset: Int!, $postsPerPage: Int!) {
    allWpNews(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        id
        title
        link
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
