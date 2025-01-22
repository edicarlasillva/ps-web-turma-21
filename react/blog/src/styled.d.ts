import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      backgroundColor: string;
      textColor: string;
      title: string;
      border: string;
    };
  }
}
