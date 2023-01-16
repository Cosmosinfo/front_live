module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 추가
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    //이 설정 해지시 react error missing in props validation 나타남.
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
};
