const globImporter = require("node-sass-glob-importer");

module.exports = {
  siteMetadata: {
    title: "Triplelift Gatsby",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `node-sass-glob-importer`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://triplelift.wpengine.com/graphql`,
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 2,
            },
          },
        },
        html: {
          imageMaxWidth: 1200,
          fallbackImageMaxWidth: 1200,
        },
        schema: {
          timeout: 120000,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        production: {
          // hardCacheMediaFiles: true,
          allow404Images: true,
        },
      },
    },
    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        sassOptions: {
          importer: globImporter(),
        },
      },
    },

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WQZ8HX2",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-use-query-params",
  ],
};
