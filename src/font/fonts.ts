export const fonts = {
  fira: "'Fira Code', monospace",
  jetbrains: "'JetBrains Mono', monospace",
  mono: "monospace",
} as const;

export type FontName = keyof typeof fonts;
