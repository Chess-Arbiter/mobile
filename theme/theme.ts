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
    primary: THEME_COLORS.info,
    background: THEME_COLORS.white,
    text: THEME_COLORS.info,
    error: THEME_COLORS.danger,
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
    text: THEME_COLORS.white,
    secondary: THEME_COLORS.gray,
    error: THEME_COLORS.danger,
  },
};
