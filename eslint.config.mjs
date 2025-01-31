import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-useless-catch": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "prefer-const": "warn",
    },
  },
  {
    ignores: [
      "!node_modules/", // unignore `node_modules/` directory
      "node_modules/*", // ignore its content
      "!node_modules/mylibrary/", // unignore `node_modules/mylibrary` directory
      "dist/", // ignore `dist/` directory
      "jest.config.js", // ignore `jest.config.js` directory
    ],
  },
];
