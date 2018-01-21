import { Dimensions, TextStyle } from "react-native";

export const colors = {
  PRIMARY: "#306BAC",
  SECONDARY: "#918EF4",
  DISABLED: "grey",
  SUCCESS: "green",
  DANGER: "red",
  WHITE: "white",
  LIGHT: "#98B9F2",
  DARK: "#141B41"
};

export const PADDING = 8;

interface Fonts {
  [key: string]: TextStyle;
}
export const fonts: Fonts = {
  H1: {
    fontSize: 20
  },
  BUTTON: {
    fontSize: 16
  }
};
