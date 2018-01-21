import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { PADDING } from "../styles";

export default function Container({
  style,
  children
}: {
  style?: ViewStyle;
  children: any;
}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: PADDING
  }
});
