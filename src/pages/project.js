import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostsCard from "../components/PostsCard";
import Jumbotron from "../components/Jumbotron";

export default function Project({ data }) {
  return (
    <Layout>
      <Seo title="My Project" />
      <Jumbotron
        headline="My Project"
        punchline="Learn Everything &amp; Expand Your Skills."
      />
      <div className="container">
        <h4>Project List</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query Project {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image
        }
      }
    }
  }
`;
