import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { SimpleLayout } from "../components/layouts/SimpleLayout";

const Blog = (): JSX.Element => {
  interface IBlogData {
    allFile: {
      nodes: {
        name: string;
        absolutePath: string;
        sourceInstanceName: string;
      }[];
    };
  }
  const blogData: IBlogData = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "blog" }, name: {} }) {
        nodes {
          name
          absolutePath
          sourceInstanceName
        }
      }
    }
  `);
  return (
    <SimpleLayout pageTitle="Blog Page">
      <>
        <p>Look at the blog page</p>
        <ul>
          {blogData.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </>
    </SimpleLayout>
  );
};

export default Blog;
