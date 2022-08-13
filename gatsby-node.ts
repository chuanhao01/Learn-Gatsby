import { GatsbyNode } from "gatsby";

import path from "path";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    const siteTypesDefs = `
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
    }
    `;

    createTypes(siteTypesDefs);
  };

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
