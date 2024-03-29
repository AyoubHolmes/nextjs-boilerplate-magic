import { themeColors } from "./emotionColors";

export interface IColor {
  [key: string]: string;
}
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      danger: string;
      info: string;
      white: string;
      black: string;
      grey: string;
    };
    fonts: {
      outrequeBlack: string;
    };
  }
}

export const emotionTheme = {
  colors: {
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    warning: themeColors.warning,
    danger: themeColors.danger,
    info: themeColors.info,
    white: themeColors.white,
    black: themeColors.black,
    grey: themeColors.grey,
  },
  fonts: {
    outrequeBlack: "OutrequeBlack",
  },
};
