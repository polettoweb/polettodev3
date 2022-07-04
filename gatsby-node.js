import { graphql } from 'gatsby';
import { paginate } from 'gatsby-awesome-pagination';

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Fetch your items (blog posts, categories, etc).
  const blogPosts = doSomeMagic();

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: blogPosts, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('...'), // Just like `createPage()`
  })
}