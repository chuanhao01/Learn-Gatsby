import path from "path";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
