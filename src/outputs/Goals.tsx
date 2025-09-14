import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Goals() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div>
      <p style={{ color: colors.highlight }}>My goals are:</p>
      <ul className="list-disc pl-5 flex flex-col flex-wrap">
        <li>To become a better developer.</li>
        <li>To contribute to open source.</li>
        <li>To learn new technologies.</li>
        <li>To help others in their coding journey.</li>
      </ul>
    </div>
  );
}
