import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const BlogsPage = ({ data }: PageProps<Queries.BlogsPageQuery>) => {
  return (
    <VerticalPageLayout pageTitle="My Blog Posts">
      <p>Look at my blogs</p>
      {data.allMdx.nodes.map((node) => {
        // If the markdown does not have the required frontmatter
        if (!node.frontmatter?.title) {
          return null;
        }

        const {
          id,
          body,
          frontmatter: { title, date },
        } = node;

        return (
          <article key={id}>
            <h2>{title}</h2>
            <p>Posted: {date}</p>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        );
      })}
    </VerticalPageLayout>
  );
};

export default BlogsPage;

export const query = graphql`
  query BlogsPage {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fileAbsolutePath
        body
      }
    }
  }
`;
