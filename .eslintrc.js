/**
 * @type {require("eslint").Linter.Config}
 */

const { eslintConfig } = require("./.eslintrc.gatsby-default.js");
const defaultEslintConfig = eslintConfig().baseConfig;

module.exports = {
  // General .js and files
  extends: ["eslint:recommended", "prettier"],
  globals: {
    ...defaultEslintConfig.globals,
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  ignorePatterns: [
    "node_modules",
    "bower_components",
    ".cache",
    "public",
    "lib",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    // Specifically for typescript in main gatsby src code
    {
      files: ["*.ts", "*.tsx"],
      processor: "@graphql-eslint/graphql",
      plugins: ["jsx-a11y", "import", "react", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      rules: {
        ...defaultEslintConfig.rules,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "jsx" },
        ],
        "import/no-unresolved": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
          },
          {
            selector: "function",
            format: ["camelCase"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
        ],
        "@typescript-eslint/ban-ts-comment": [
          "error",
          { "ts-ignore": "allow-with-description" },
        ],
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: { alwaysTryTypes: true },
        },
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
    },
  ],
};
