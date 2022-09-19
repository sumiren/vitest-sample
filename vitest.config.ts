import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json-summary", "json"],
      lines: 70,
      branches: 70,
      functions: 70,
      statements: 70,
    },
  },
});
