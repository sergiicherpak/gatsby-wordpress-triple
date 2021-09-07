const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const pageTemplate = path.resolve(`./src/templates/resource.js`)
const archiveTemplate = path.resolve(`./src/templates/resourceArchive.js`)
const gql = require("fake-tag")

const GET_PAGES = gql`
  query($limit: Int) {
    allWpResource(limit: $limit, sort: { order: DESC, fields: date }) {
      nodes {
        uri
      }
    }
  }
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpResource.nodes

  //Create single resource

  pages.map(({ uri }) => {
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })

  //Creat resources archive

  paginate({
    createPage,
    pathPrefix: "/product-offers",
    component: archiveTemplate,
    items: pages,
    itemsPerPage: 100,
  })
}
