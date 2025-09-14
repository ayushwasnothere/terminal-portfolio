export const fonts = {
  fira: "'Fira Code', monospace",
  jetbrains: "'JetBrains Mono', monospace",
  mono: "monospace",
} as const;

export type FontName = keyof typeof fonts;
export function isFontName(value: string): value is FontName {
  return value in fonts;
}
