import * as path from "path";
import type { GatsbyConfig } from "gatsby";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const plugins: GatsbyConfig["plugins"] = [
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-plugin-emotion",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-tsconfig-paths",
  {
    resolve: "gatsby-plugin-eslint",
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // Default settings that may be ommitted or customized
      stages: ["develop"],
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: ["node_modules", "bower_components", ".cache", "public"],
      // Any additional eslint-webpack-plugin options below
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${process.cwd()}/data/blog/`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `images`,
      path: `${process.cwd()}/data/images/`,
    },
  },
  "gatsby-theme-material-ui",
];

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  title: "Learn Gatsby Site",
  siteUrl: "https://somedomain.tld/",
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default config;
