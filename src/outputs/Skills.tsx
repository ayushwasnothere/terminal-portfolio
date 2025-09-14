import { skills } from "../skills";
import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Skills() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div className="flex flex-col justify-center pt-2 gap-2">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col">
          <span style={{ color: colors.contrast }}>{skill.name}</span>
          <span style={{ color: colors.muted }}>{skill.items.join(", ")}</span>
        </div>
      ))}
    </div>
  );
}
