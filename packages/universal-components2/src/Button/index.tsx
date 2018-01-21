import * as React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { colors, fonts, PADDING } from "../styles";

export default function Button({
  text,
  onPress
}: {
  text: string;
  onPress: any;
}) {
  const fn = () => {
    onPress();
    alert("taalla");
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: PADDING / 2,
    padding: PADDING
  },
  text: {
    ...fonts.BUTTON,
    backgroundColor: "transparent",
    color: colors.WHITE,
    fontFamily: Platform.OS === "web" ? "sans-serif" : undefined,
    fontWeight: "bold",
    textAlign: "center"
  }
});
