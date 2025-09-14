export const themes = {
  dracula: {
    bg: "#282a36",
    fg: "#f8f8f2",
    accent: "#bd93f9",
    success: "#50fa7b",
    error: "#ff5555",
    highlight: "#ff79c6",
    secondary: "#6272a4",
    muted: "#6d7085",
    heading: "#f1fa8c",
    subtext: "#8be9fd",
    contrast: "#ffb86c",
  },
  tokyonight: {
    bg: "#1a1b26",
    fg: "#c0caf5",
    accent: "#7aa2f7",
    success: "#9ece6a",
    error: "#f7768e",
    highlight: "#bb9af7",
    secondary: "#3b4261",
    muted: "#565f89",
    heading: "#7dcfff",
    subtext: "#9aa5ce",
    contrast: "#ff9e64",
  },
  catppuccin: {
    bg: "#1e1e2e",
    fg: "#cdd6f4",
    accent: "#f5c2e7",
    success: "#a6e3a1",
    error: "#f38ba8",
    highlight: "#f5bde6",
    secondary: "#6c7086",
    muted: "#9399b2",
    heading: "#fab387",
    subtext: "#b4befe",
    contrast: "#f9e2af",
  },
} as const;

export type ThemeName = keyof typeof themes;
export function isThemeName(value: string): value is ThemeName {
  return value in themes;
}
