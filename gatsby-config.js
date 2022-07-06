const path = require(`path`)
const siteUrl = process.env.URL || `https://www.poletto.dev`

module.exports = {
  siteMetadata: {
    title: `polettodev`,
    siteUrl: `https://www.poletto.dev`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-shiki`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // maxWidth: 590
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(node => {
                return Object.assign({}, node.node.frontmatter, {
                  title: node.node.frontmatter.title,
                  description: node.node.frontmatter.summary,
                  date: node.node.frontmatter.date,
                  url: node.node.frontmatter.slug
                })
              })
            },
            query: `
              {
                allMarkdownRemark(skip: 0, sort: { fields: [frontmatter___date], order: DESC }) {
                  edges {
                    node {
                      html
                      id
                      timeToRead
                      frontmatter {
                        # Assumes you're using title in your frontmatter.
                        title
                        slug
                        tags
                        date (formatString: "MMMM D, Y")
                        summary
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => page)
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
        output: '/',
      },
    },

  ]
}