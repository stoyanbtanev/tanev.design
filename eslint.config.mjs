import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "_legacy-backup/**",
      "assets/**",
      "work/**",
      "*.html"
    ]
  }
];

export default config;
