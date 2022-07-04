import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["node_modules/dotenv/config"],
    reporters: "verbose",
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
