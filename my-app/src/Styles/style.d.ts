import "styled-components";

declare module "style-components" {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      primaryVariant: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
    };
  }
}
