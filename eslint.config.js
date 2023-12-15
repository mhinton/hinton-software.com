// eslint.config.js
import antfu from "@antfu/eslint-config";

const config = antfu({
  stylistic: {
    quotes: "double",
    semi: "always",
    trailingComma: "always",
  },

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    // "./fixtures",
    // ...globs
  ],
});

export default config;
