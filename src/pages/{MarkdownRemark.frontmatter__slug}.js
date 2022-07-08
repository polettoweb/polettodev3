import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"


export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container blog mx-auto my-16 post">
        <h1 className="text-4xl font-bold leading-tight">{frontmatter.title}</h1>
        <div className="text-xl text-copy-secondary mb-4">{frontmatter.date} - {markdownRemark.timeToRead} min read</div>
        <div className="flex mb-8 text-sm">
          {/* <Link
              to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
          className=" border border-copy-secondary rounded-full px-4 py-2 mr-4 hover:border-transparent hover:bg-copy-primary hover:text-white">
            {{ tag.title }}
          </Link> */}
        </div>
        <div className="markdown-body mb-24" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="mb-8 text-center">
          <Link to="/blog" className="uppercase border-2 py-1 px-2 rounded-md hover:border-transparent hover:bg-copy-primary hover:text-white">Back to Blog</Link>
        </div>
      </div>
    </Layout >
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;