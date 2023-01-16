import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";

const THEME_COLORS = {
  primary: "#628ce1",
  info: "#1f3057",
  success: "#53a57c",
  warning: "#d09444",
  danger: "#f44336",
  white: "#F3F6F6",
  black: "#141d30",
  gray: "#727891",
  grayAlpha: "#72789133",
  primaryAlpha: "#628ce17d",
};
// NavigationDefaultTheme.colors.
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: THEME_COLORS.primary,
      background: THEME_COLORS.white,
      text: THEME_COLORS.info,
      border: THEME_COLORS.gray,
      card: THEME_COLORS.primary,
    },
  },
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    secondary: THEME_COLORS.primary,
  },
};

export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: THEME_COLORS.primary,
    background: THEME_COLORS.black,
    backdrop: THEME_COLORS.info,
    text: THEME_COLORS.white,
    secondary: THEME_COLORS.primary,
  },
};

const a = {
  backdrop: "rgba(50, 47, 55, 0.4)",
  background: "rgba(28, 27, 31, 1)",
  border: "rgba(147, 143, 153, 1)",
  card: "rgb(44, 40, 49)",
  elevation: {
    level0: "transparent",
    level1: "rgb(37, 35, 42)",
    level2: "rgb(44, 40, 49)",
    level3: "rgb(49, 44, 56)",
    level4: "rgb(51, 46, 58)",
    level5: "rgb(52, 49, 63)",
  },
  error: "rgba(242, 184, 181, 1)",
  errorContainer: "rgba(140, 29, 24, 1)",
  inverseOnSurface: "rgba(49, 48, 51, 1)",
  inversePrimary: "rgba(103, 80, 164, 1)",
  inverseSurface: "rgba(230, 225, 229, 1)",
  notification: "rgba(242, 184, 181, 1)",
  onBackground: "rgba(230, 225, 229, 1)",
  onError: "rgba(96, 20, 16, 1)",
  onErrorContainer: "rgba(242, 184, 181, 1)",
  onPrimary: "rgba(56, 30, 114, 1)",
  onPrimaryContainer: "rgba(234, 221, 255, 1)",
  onSecondary: "rgba(51, 45, 65, 1)",
  onSecondaryContainer: "rgba(232, 222, 248, 1)",
  onSurface: "rgba(230, 225, 229, 1)",
  onSurfaceDisabled: "rgba(230, 225, 229, 0.38)",
  onSurfaceVariant: "rgba(202, 196, 208, 1)",
  onTertiary: "rgba(73, 37, 50, 1)",
  onTertiaryContainer: "rgba(255, 216, 228, 1)",
  outline: "rgba(147, 143, 153, 1)",
  outlineVariant: "rgba(73, 69, 79, 1)",
  primary: "rgba(208, 188, 255, 1)",
  primaryContainer: "rgba(79, 55, 139, 1)",
  scrim: "rgba(0, 0, 0, 1)",
  secondary: "rgba(204, 194, 220, 1)",
  secondaryContainer: "rgba(74, 68, 88, 1)",
  shadow: "rgba(0, 0, 0, 1)",
  surface: "rgba(28, 27, 31, 1)",
  surfaceDisabled: "rgba(230, 225, 229, 0.12)",
  surfaceVariant: "rgba(73, 69, 79, 1)",
  tertiary: "rgba(239, 184, 200, 1)",
  tertiaryContainer: "rgba(99, 59, 72, 1)",
  text: "rgba(230, 225, 229, 1)",
};
