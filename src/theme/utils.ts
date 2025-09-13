import { themes, type ThemeName } from "./themes";

export const getThemeColors = (theme: ThemeName) => themes[theme];
