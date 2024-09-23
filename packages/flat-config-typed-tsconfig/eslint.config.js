import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allow: [
            {
              from: "package",
              name: "Uuid",
              package: "@company/core",
            },
          ],
        },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.eslint.json",
      },
    },
  }
);
