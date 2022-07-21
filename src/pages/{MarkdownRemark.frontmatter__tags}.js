import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const blog = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <Helmet>
        <title>Blog | Poletto.dev | Marco Poletto | Engineering Manager | Mentor</title>
        <meta charSet="utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="author" content="Marco Poletto" />
        <meta name="description" content="Marco Poletto, Engineering Manager, Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor" />
      </Helmet>
      <div className="container blog mx-auto py-16 flex-grow">
        {
          data && data.allMarkdownRemark.edges.map(post => (

            <div
              key={post.node.id}
              className="post border-gray-400 border-b mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">
                <Link
                  to={post.node.frontmatter.slug}
                  className="text-copy-primary"
                >{post.node.frontmatter.title}</Link>
              </h2>
              <div className="text-copy-secondary mb-4">
                <span className="mr-2">{post.node.frontmatter.date}</span>
                <span>&middot;</span>
                <span className="ml-2">{post.node.timeToRead} min read</span>
              </div>
              {
                post.node.frontmatter.tags && ( // if tags exist
                  <div className="tags mb-4">
                    {
                      post.node.frontmatter.tags.map(tag => ( // map through tags array
                        <span key={tag} className="tag text-copy-secondary  border border-copy-secondary rounded px-2 py-1 mr-2 text-xs">{tag}</span>
                      ))

                    }
                  </div>
                )}

              <div className="text-lg mb-4">{post.node.frontmatter.summary}</div>

              <div className="mb-8">
                <Link to={post.node.frontmatter.slug} className="uppercase">Read More</Link>
              </div>
            </div >
          ))
        }
      </div >
    </Layout >
  )
}

export default blog

export const pageQuery = graphql`
  query Getblogfortags($tag: String) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
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
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
      }
    }
  }
`;

