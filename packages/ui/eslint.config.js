import baseConfig from "@raidready/eslint-config/base";
import reactConfig from "@raidready/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
