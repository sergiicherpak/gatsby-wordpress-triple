const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/product.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
    query  {
      allWpProduct {
        nodes {
          uri
        }
      }
    }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpProduct.nodes

  pages.map(({ uri }) => {
    createPage({
      path: uri,
      component: pageTemplate,
      context: {
        uri,
      },
    })
  })
}
