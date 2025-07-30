import baseConfig, { restrictEnvAccess } from "@raidready/eslint-config/base";
import nextjsConfig from "@raidready/eslint-config/nextjs";
import reactConfig from "@raidready/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
