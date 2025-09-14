import { isThemeName } from "../theme/themes";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Theme({ theme: themeName }: { theme: string }) {
  const { theme, setTheme } = useTheme();
  if (isThemeName(themeName)) {
    setTheme(themeName);
    const colors = getThemeColors(theme);
    return (
      <div>
        <p style={{ color: colors.fg }}>
          Theme set to{" "}
          <span style={{ color: colors.highlight }}>{themeName}</span>.
        </p>
      </div>
    );
  } else {
    const colors = getThemeColors(theme);
    return (
      <code style={{ color: colors.fg }}>
        Usage: <span style={{ color: colors.highlight }}>theme</span>{" "}
        <span style={{ color: colors.muted }}>
          &lt;dracula|tokyonight|catppuccin&gt;
        </span>
      </code>
    );
  }
}
