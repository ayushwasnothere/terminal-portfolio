import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Help() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const commands = [
    { cmd: "about", desc: "Learn a bit about me." },
    { cmd: "projects", desc: "Explore the stuff I’ve built." },
    { cmd: "skills", desc: "See what I’m good at." },
    { cmd: "resume", desc: "Check out my resume." },
    { cmd: "goals", desc: "Discover my future aspirations." },
    { cmd: "socials", desc: "Know where to find me." },
    { cmd: "clear", desc: "Clear the screen instantly." },
    {
      cmd: "theme",
      desc: "Change the terminal’s look. Usage: theme <tokyonight|catppuccin|dracula>",
    },
    {
      cmd: "font",
      desc: "Switch the terminal font. Usage: font <fira|jetbrains|mono>",
    },
    { cmd: "help", desc: "Show this help menu again." },
    { cmd: "exit", desc: "Vanish into the void." },
  ];

  return (
    <div>
      <p style={{ color: colors.heading, marginBottom: "0.5rem" }}>
        <strong>Available Commands:</strong>
      </p>
      {commands.map(({ cmd, desc }) => (
        <div
          key={cmd}
          className="flex items-start mb-1"
          style={{ color: colors.fg }}
        >
          <span className="w-44" style={{ color: colors.subtext }}>
            {cmd}
          </span>
          <span className="flex-1 min-w-0" style={{ color: colors.muted }}>
            {desc}
          </span>
        </div>
      ))}
    </div>
  );
}
