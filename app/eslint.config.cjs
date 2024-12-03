const eslintPluginReact = require("eslint-plugin-react");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptEslintParser = require("@typescript-eslint/parser")
module.exports = [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
           parse: typescriptEslintParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: eslintPluginReact,
            "@typescript-eslint": typescriptEslintPlugin,
        },
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "single"],
            indent: ["error", 2],
        },
    },
];
