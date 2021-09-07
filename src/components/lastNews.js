import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const LastNews = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpNews(limit: 9) {
        nodes {
          id
          title
          link
        }
      }
    }
  `)

  const news = data.allWpNews.nodes
  return (
    <div className="last-news">
      <h1>Last Posts</h1>
      {news?.map((post) => {
        const { title, link, id } = post
        return (
          <h3 key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
        )
      })}
    </div>
  )
}

export default LastNews
