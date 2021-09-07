const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const gql = require("fake-tag")
const archiveTemplate = path.resolve(`./src/templates/profileArchive.js`)
const pageTemplate = path.resolve(`./src/templates/profile.js`)

const GET_PAGES = gql`
  query($limit: Int) {
    allWpProfile(limit: $limit, sort: { order: DESC, fields: date }) {
      nodes {
        uri
      }
    }
  }
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpProfile.nodes

  //Single profile

  pages.map(({ uri }) => {
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })

  //Profile archive

  paginate({
    createPage,
    pathPrefix: "/exchange-trade-deals",
    component: archiveTemplate,
    items: pages,
    itemsPerPage: 100,
  })
}
