import { Link, PageProps, graphql } from "gatsby";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const BlogsPage = ({ data }: PageProps<Queries.BlogsPageQuery>) => {
  return (
    <VerticalPageLayout pageTitle="My Blog Posts">
      <p>Look at my blogs</p>
      {data.allMdx.nodes.map((node) => {
        // If the markdown does not have the required frontmatter
        if (!node.frontmatter?.title || !node.slug) {
          return null;
        }

        const {
          id,
          slug,
          frontmatter: { title, date },
        } = node;

        return (
          <article key={id}>
            <h2>
              <Link to={`/blogs/${slug}`}>{title}</Link>
            </h2>
            <p>Posted: {date}</p>
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
