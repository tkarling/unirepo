import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { SIMPLE_API_ENDPOINT } from "react-native-dotenv";

import { Button } from "@amyllykoski/universal-components";

import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import ListPage from "./src/components/ListPage";

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: SIMPLE_API_ENDPOINT });
console.log("endpoint", SIMPLE_API_ENDPOINT);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Button
            text="Press on Native!"
            onPress={() => Alert.alert("Button Pressed!")}
          />
          <ListPage />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  }
});
