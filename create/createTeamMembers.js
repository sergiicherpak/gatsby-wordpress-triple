const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/teamMember.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
    query  {
      allWpTeamMember {
        nodes {
          uri
        }
      }
    }
  `

  const { createPage } = actions

  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpTeamMember.nodes

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
