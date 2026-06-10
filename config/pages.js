import { lazy } from "react";

// Lazy load all MDX pages for code splitting
// This reduces initial bundle size significantly
const HomeMDX = lazy(() => import("@pages/home.mdx"));
const BootstrapMDX = lazy(() => import("@pages/bootstrap.mdx"));
const ZshCommands = lazy(() => import("@pages/zsh-commands.mdx"));
const VSCodeConfiguration = lazy(() => import("@pages/vscode-configuration.mdx"));
const ObsidianConfiguration = lazy(() => import("@pages/obsidian-configuration.mdx"));

// Centralized pages configuration
// This controls both navigation and routing
export const pages = [
  {
    name: "Home",
    route: "/",
    component: HomeMDX,
    isDefault: true, // This will be used for the catch-all route
  },
  {
    name: "macOS Bootstrap",
    route: "/bootstrap",
    component: BootstrapMDX,
  },
  {
    name: "VS Code Configuration",
    route: "/vscode-configuration",
    component: VSCodeConfiguration,
  },
  {
    name: "Obsidian Configuration",
    route: "/obsidian-configuration",
    component: ObsidianConfiguration,
  },
  {
    name: "Zsh Commands",
    route: "/zsh-commands",
    component: ZshCommands,
  },
];
