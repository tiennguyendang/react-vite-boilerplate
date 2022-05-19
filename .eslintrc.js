module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["filenames", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
          "unknown",
        ],
        alphabetize: { order: "asc" },
        pathGroups: [
          {
            pattern: "styles/**",
            group: "internal",
            position: "after",
          },
          { group: "builtin", pattern: "react", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "filenames/no-index": 2
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "filenames/match-regex": [2, "^[a-z-.]+$", true],
      },
    },
    {
      files: ["*.jsx"],
      rules: {
        "filenames/match-regex": [2, "^[A-Z][a-z].+(?:[A-Z][a-z].+)*$", true],
      },
    },
  ]
};
