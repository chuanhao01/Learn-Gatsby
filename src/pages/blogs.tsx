import { PageProps, graphql } from "gatsby";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const BlogsPage = ({ data }: PageProps<Queries.BlogsPageQuery>) => {
  return (
    <VerticalPageLayout pageTitle="My Blog Posts">
      <p>Look at my blogs</p>
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </VerticalPageLayout>
  );
};

export default BlogsPage;

export const query = graphql`
  query BlogsPage {
    allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`;
