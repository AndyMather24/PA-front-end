import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Forms from "./Form";

class Settings extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Forms />

        <View style={styles.container}>
          <Text>Setting Page</Text>
          <Button
            title="Save changes"
            onPress={() => this.props.navigation.navigate("App")}
          />
          <Button
            title="Discard"
            onPress={() => this.props.navigation.navigate("App")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Settings;
