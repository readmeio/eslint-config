module.exports = {
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  plugins: ["jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "jest/consistent-test-it": "warn",
    "jest/expect-expect": "warn",
    "jest/no-disabled-tests": "off",
    "jest/no-duplicate-hooks": "warn",
    "jest/no-expect-resolves": "warn",
    "jest/no-if": "error",
    "jest/prefer-hooks-on-top": "warn",
    "jest/prefer-strict-equal": "error",
    "jest/valid-describe": "error",
    "jest/valid-title": "warn",

    "sonarjs/no-identical-functions": "off"
  }
};
