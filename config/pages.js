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
    isDefault: true,
    title: "Quiet Mind — macOS Developer Setup & Configuration",
    description: "Personal developer wiki covering macOS bootstrap, VS Code configuration, terminal setup, Zsh, and dotfiles.",
  },
  {
    name: "macOS Bootstrap",
    route: "/bootstrap",
    component: BootstrapMDX,
    title: "macOS Bootstrap & Developer Setup — Quiet Mind",
    description: "Automated macOS developer setup: Homebrew, dotfiles, dev tools, and system configuration in one bootstrap script.",
  },
  {
    name: "VS Code Configuration",
    route: "/vscode-configuration",
    component: VSCodeConfiguration,
    title: "VS Code Configuration & Settings — Quiet Mind",
    description: "Complete VS Code settings, keybindings, extensions, and font configuration for a productive development environment.",
  },
  {
    name: "Obsidian Configuration",
    route: "/obsidian-configuration",
    component: ObsidianConfiguration,
    title: "Obsidian Configuration & Vault Setup — Quiet Mind",
    description: "Obsidian vault setup, plugin configuration, and personal knowledge management workflow.",
  },
  {
    name: "Zsh Commands",
    route: "/zsh-commands",
    component: ZshCommands,
    title: "Zsh Commands & Shell Aliases — Quiet Mind",
    description: "Reference for Zsh commands and shell aliases included in the Quiet Mind macOS bootstrap configuration.",
  },
];
