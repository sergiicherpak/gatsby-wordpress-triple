import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"


// markup
const NotFoundPage = () => {
  
  useEffect( () => { 
    // Add custom class to body element
    document.querySelector("body").classList.add("page-error-404")
  })

  return (
    <Layout>
      <Seo title="Page Not Found" />
      <div className="bland-section-container error-404-content">
        <article className="entry">
          <h1 className="entry-title">404</h1>
          <h2>Page Not Found</h2>
           <Link to="/" className="button back-to-home">Back Home</Link>
        </article>
      </div>
    </Layout>
  )
}

export default NotFoundPage
