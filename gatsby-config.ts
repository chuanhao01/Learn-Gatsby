import type { GatsbyConfig } from "gatsby";
import * as path from "path";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const plugins: GatsbyConfig["plugins"] = [
  "gatsby-plugin-emotion",
  "gatsby-theme-material-ui",
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
];

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  title: "Learn Gatsby",
  siteUrl: "https://somedomain.tld/",
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default config;
