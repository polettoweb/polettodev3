import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
// import PaginationPosts from "../components/PaginationPosts";

const blog = ({ data }) => {
  return (
    <Layout>
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
                <span className="ml-2">{post.node.frontmatter.timeToRead} min read</span>
              </div>

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

export const query = graphql`
  query Getblog {
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
`;

