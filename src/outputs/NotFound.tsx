import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function NotFound() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div>
      <p style={{ color: colors.error }}>Command not found.</p>
      <p>
        Type <span style={{ color: colors.fg }}>help</span> to see all available
        commands.
      </p>
    </div>
  );
}
