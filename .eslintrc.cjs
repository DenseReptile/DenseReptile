module.exports = {
  // TODO: Configure to be more opinionated.
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["svelte3", "@typescript-eslint", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:pii/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:sonarjs/recommended",
  ],
  ignorePatterns: ["*.cjs", "*.jsx", "*.tsx"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    // Specifies the runtime environment.
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    /*
			Style Rules.

			A subset of rules that define how code in the project should be
			styled as well as how it should be laid out. The rules here are
			free for you to change.
		 */
    "arrow-body-style": ["warn", "always"],
    "capitalized-comments": ["warn", "always"],
    curly: ["warn", "all"],
    "default-case-last": "warn",
    "default-param-last": "warn",
    "multiline-comment-style": ["warn", "starred-block"],
    "no-lonely-if": "warn",
    "sort-imports": "warn",
    "spaced-comment": ["warn", "always"],
    "eol-last": ["warn", "always"],
    "brace-style": ["warn", "1tbs"],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-style": ["warn", "last"],
    "func-call-spacing": ["warn", "never"],
    "function-paren-newline": ["warn", "multiline"],
    "no-extra-parens": ["warn", "functions"],
    "no-multi-spaces": "warn",
    "no-tabs": "error",
    "no-trailing-spaces": "warn",
    "yield-star-spacing": [
      "warn",
      {
        before: false,
        after: true,
      },
    ],
    "comma-spacing": [
      "warn",
      {
        before: false,
        after: true,
      },
    ],
    "generator-star-spacing": [
      "warn",
      {
        before: false,
        after: true,
      },
    ],
    "key-spacing": [
      "warn",
      {
        beforeColon: false,
        afterColon: true,
        align: "value",
      },
    ],
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "line-comment-position": 0,
    camelcase: 0,
    // //
    /*
			Behavioral Rules.

			A subset of rules that define how code should behave.
		*/
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-var": "error",
    "no-undef-init": "error",
    "require-yield": "error",
    "default-case": "warn",
    "no-empty-function": "warn",
    "no-unneeded-ternary": "warn",
    "no-unusued-expressions": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "prefer-const": "warn",
    "consistent-return": [
      "warn",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    "no-delete-var": 0,
  },
};
