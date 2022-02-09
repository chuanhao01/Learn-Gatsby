module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [
    "node_modules",
    "bower_components",
    ".cache",
    "public",
    "gatsby-config.js",
  ],
  rules: {
    // "no-anonymous-exports-page-templates": "warn",
    // "limited-exports-page-templates": "warn",
  },
};
