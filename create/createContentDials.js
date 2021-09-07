const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/contentDial.js`)
const archiveTemplate = path.resolve(`./src/templates/contentDialArchive.js`)
const gql = require("fake-tag")
const { paginate } = require(`gatsby-awesome-pagination`)

const GET_PAGES = gql`
  query($limit: Int) {
    allWpContentDial(limit: $limit, sort: { order: DESC, fields: date }) {
      nodes {
        uri
      }
    }
  }
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpContentDial.nodes

  pages.map(({ uri }) => {
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })

  paginate({
    createPage,
    pathPrefix: "/contentdial/publishers",
    component: archiveTemplate,
    items: pages,
    itemsPerPage: 100,
  })
}
