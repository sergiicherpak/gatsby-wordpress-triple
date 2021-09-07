const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/promotion.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
    query  {
      allWpPromotion {
        nodes {
          uri
        }
      }
    }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPromotion.nodes

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
