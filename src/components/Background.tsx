import { useTheme } from "../theme/useTheme";
import { getThemeColors } from "../theme/utils";

export default function Background({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-950"
      style={{
        background: colors.bg,
      }}
      onClick={() => {
        if (inputRef === null) return;
        const inputEl = inputRef?.current;
        if (inputEl) {
          inputEl.focus();

          const length = inputEl.value.length;
          inputEl.setSelectionRange(length, length);
        }
      }}
    />
  );
}
