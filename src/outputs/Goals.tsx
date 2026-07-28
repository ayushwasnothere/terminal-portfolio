import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Goals() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div style={{ color: colors.fg }}>
      <p style={{ color: colors.highlight, marginBottom: "0.5rem" }}>
        <strong>Current Engineering Goals & Aspirations:</strong>
      </p>
      <ul className="list-disc pl-5 flex flex-col space-y-1">
        <li>Build intelligent, autonomous CLI & terminal-native AI coding agents (Forge).</li>
        <li>Architect high-performance robotics software & ROS 2 motion planning packages.</li>
        <li>Master low-level systems programming in Rust and Go.</li>
        <li>Contribute impactful open-source tools to the developer ecosystem.</li>
        <li>Share technical insights, tutorials, and deep dives on my blog (citxruzz.tech).</li>
      </ul>
    </div>
  );
}

