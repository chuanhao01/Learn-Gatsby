module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  importOrder: [
    // For modules I want to see at the top of the page
    "^(react|gatsby)",
    "<THIRD_PARTY_MODULES>",
    // For any local modules
    "^(component)",
    // Anything relative
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
