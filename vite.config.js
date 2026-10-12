import { readdir, readFile, writeFile } from "fs/promises";
import { join, resolve } from "path";
import { defineConfig } from "vite";
import { createMdxDocsConfig } from "@quietmind/mdx-docs/vite";

const GLOBAL_STYLE_PATTERN = /<style data-emotion="css-global [^"]*"[^>]*>[\s\S]*?<\/style>/g;

// Prerendered pages get MUI's CSS variables (both color schemes, spacing) in a
// <style> after the footer. Until the parser reaches it every var(--mui-*) is
// undefined, so a reload paints unstyled light colors before the saved mode.
// Moving emotion's global styles into <head> defines them before first paint.
// Emotion moves them into <head> itself on load, so hydration is unaffected.
const hoistGlobalStyles = () => {
  let outDir = "";

  return {
    name: "hoist-global-styles",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle: {
      order: "post",
      async handler() {
        const files = await readdir(outDir, { recursive: true });
        for (const file of files.filter((name) => name.endsWith("index.html"))) {
          const path = join(outDir, file);
          const html = await readFile(path, "utf8");
          const styles = html.match(GLOBAL_STYLE_PATTERN);
          if (!styles) continue;

          const hoisted = html
            .replace(GLOBAL_STYLE_PATTERN, "")
            .replace("</head>", () => `  ${styles.join("")}\n</head>`);
          await writeFile(path, hoisted);
        }
      },
    },
  };
};

const config = createMdxDocsConfig({ rootDir: import.meta.dirname });
config.plugins.push(hoistGlobalStyles());

export default defineConfig(config);
