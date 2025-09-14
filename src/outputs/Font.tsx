import { isFontName } from "../font/fonts";
import useFont from "../font/useFont";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Font({ font: fontName }: { font: string }) {
  const { setFont } = useFont();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  if (isFontName(fontName)) {
    setFont(fontName);
    return (
      <div>
        <p style={{ color: colors.fg }}>
          Font set to{" "}
          <span style={{ color: colors.highlight }}>{fontName}</span>.
        </p>
      </div>
    );
  } else {
    return (
      <code style={{ color: colors.fg }}>
        Usage: <span style={{ color: colors.highlight }}>font</span>{" "}
        <span style={{ color: colors.muted }}>&lt;fira|jetbrains|mono&gt;</span>
      </code>
    );
  }
}
