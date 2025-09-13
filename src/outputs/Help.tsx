import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Help() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div style={{ color: colors.fg }}>
      <p style={{ color: colors.secondary }}>
        <strong>Available Commands:</strong>
      </p>
      <ul>
        <li>
          <span style={{ color: colors.highlight }}>clear</span> - Clear the
          terminal.
        </li>
        <li>
          <span style={{ color: colors.highlight }}>help</span> - Show this help
          message.
        </li>
        <li>
          <span style={{ color: colors.highlight }}>about</span> - Show
          information about this terminal.
        </li>
        <li>
          <span style={{ color: colors.highlight }}>projects</span> - List my
          projects.
        </li>
        <li>
          <span style={{ color: colors.highlight }}>contact</span> - Contact me
          via email.
        </li>
      </ul>
    </div>
  );
}
