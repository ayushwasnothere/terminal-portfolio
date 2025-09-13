import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Header() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div className="text-white mb-10 w-full">
      <pre
        className="mx-auto mb-5 text-center"
        style={{ lineHeight: 1, color: colors.secondary }}
      >
        {` █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
███████║ ╚████╔╝ ██║   ██║███████╗███████║
██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║  ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝
                                          `}
      </pre>
      <p>Welcome to my portfolio!</p>
      <p>
        Type <span style={{ color: colors.highlight }}>help</span> to get the
        list of all available commands.
      </p>
      <p>
        Use <span style={{ color: colors.highlight }}>↑</span> and{" "}
        <span style={{ color: colors.highlight }}>↓</span> to navigate command
        history.
      </p>
    </div>
  );
}
