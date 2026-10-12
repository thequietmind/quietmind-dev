import { defineConfig } from "vite";
import { createMdxDocsConfig } from "@quietmind/mdx-docs/vite";

export default defineConfig(
  createMdxDocsConfig({ rootDir: import.meta.dirname })
);
