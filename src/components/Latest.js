
import React from 'react'
import { Link } from 'gatsby';

const Latest = ({ data }) => {

  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-center py-16">
        <h2 className="font-bold text-4xl mb-6 text-center" id="projects">Latest from blog</h2>
      </div>
      {data && data.map(post => (
        <div
          key={post.node.id}
          className="post border-gray-400 border-b mb-12"
        >
          <h2 className="text-3xl font-bold  mb-3">
            <Link to={post.node.frontmatter.slug} className="text-copy-primary">{post.node.frontmatter.title}</Link>
          </h2>
          <div className="text-copy-secondary mb-4">
            <span className="mr-2">{post.node.frontmatter.date}</span>
            <span>&middot;</span>
            <span className="ml-2">{post.node.timeToRead} min read</span>
          </div>

          <div className="text-lg mb-4">
            <p className="text-copy-primary">{post.node.frontmatter.summary}</p>
          </div>

          <div className="mb-8">
            <Link to={post.node.frontmatter.slug} className="font-bold uppercase">Read More</Link>
          </div>
        </div >
      ))}
    </div>
  );
};

export default Latest;

