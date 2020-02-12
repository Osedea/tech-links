require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  pathPrefix: '/tech-links',
  siteMetadata: {
    title: 'Osedea Tech Links',
    description: 'Web version of the Osedea Tech Links',
    author: 'loteoo',
    siteUrl: 'https://osedea-tech-links.netlify.com',
    language: 'en'
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages'
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/App/index.jsx')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon-512x512.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          camelCase: true
        },
        postCssPlugins: [
          require('postcss-nested'),
          require('postcss-preset-env')
        ]
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        // Additional options to pass to node-fetch
        fetchOptions: {}
      }
    },
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap'
    // Google analytics is ready to go.
    // For configuration options, visit: https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: 'UA-XXXXXXXXX-X'
    //   }
    // },
    // Enable Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
