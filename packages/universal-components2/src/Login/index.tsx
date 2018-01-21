import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Container, Button } from "..";
import { colors, fonts, PADDING } from "../styles";

let username = "";
let password = "";
let _username;
let _password;

const clearText = () => {
  username = "";
  password = "";
  _username.setNativeProps({ text: "" });
  _password.setNativeProps({ text: "" });
  _username.focus();
};

export default function Login({
  title,
  onSubmit
}: {
  title: string;
  onSubmit?: (userName: string, password: string) => void;
}) {
  return (
    <Container style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        ref={component => (_username = component)}
        style={styles.input}
        placeholder="Username"
        autoFocus={true}
        onChangeText={text => {
          username = text;
        }}
      />
      <TextInput
        ref={component => (_password = component)}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => {
          password = text;
        }}
      />
      <Button
        text="Submit"
        onPress={() => {
          onSubmit(username, password);
          clearText();
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 400,
    backgroundColor: colors.WHITE,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    borderRadius: PADDING / 2,
    padding: PADDING * 2
  },
  titleText: {
    ...fonts.H1,
    fontWeight: "bold",
    padding: PADDING
  },
  input: {
    padding: PADDING,
    borderWidth: 1,
    borderColor: colors.LIGHT,
    marginBottom: PADDING
  }
});
