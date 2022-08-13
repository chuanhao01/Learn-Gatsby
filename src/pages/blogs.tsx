import { PageProps, graphql } from "gatsby";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const BlogsPage = ({ data }: PageProps<Queries.BlogsPageQuery>) => {
  return (
    <VerticalPageLayout pageTitle="My Blog Posts">
      <p>Look at my blogs</p>
      <ul>
        {data.allMdx.nodes.map((node) => {
          if (!node.frontmatter) {
            return null;
          }

          const {
            id,
            frontmatter: { title },
          } = node;

          return <li key={id}>{title}</li>;
        })}
      </ul>
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
