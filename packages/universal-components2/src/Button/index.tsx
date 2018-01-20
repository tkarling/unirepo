import * as React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity
} from "react-native";

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
    backgroundColor: "green",
    borderRadius: 3,
    padding: 8
  },
  text: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: Platform.OS === "web" ? "sans-serif" : undefined,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});
