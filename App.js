import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseNavigator } from "./src/navigation";
export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#293656"
        }}
      >
        <BaseNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
