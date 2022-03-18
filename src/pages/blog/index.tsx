import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { SimpleLayout } from "../components/layouts/SimpleLayout";

const Blog = (): JSX.Element => {
  interface IBlogData {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
          date: string;
        };
        id: string;
        body: string;
      }[];
    };
  }
  const blogData: IBlogData = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          body
        }
      }
    }
  `);
  return (
    <SimpleLayout pageTitle="Blog Page">
      <>
        <p>Look at the blog page</p>
        {blogData.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </>
    </SimpleLayout>
  );
};

export default Blog;
