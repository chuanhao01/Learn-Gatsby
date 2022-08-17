import { PageProps, graphql, navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const BlogPostPage = ({
  data: { mdx },
}: PageProps<Queries.BlogPostPageQuery>) => {
  if (!mdx) {
    return navigate("/404");
  }
  // TODO: Make a util function to check through properties I will use
  if (!mdx.frontmatter?.title || !mdx.frontmatter.date) {
    return navigate("/404");
  }

  const {
    body,
    frontmatter: { title, date },
  } = mdx;

  return (
    <VerticalPageLayout pageTitle={title}>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </VerticalPageLayout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
