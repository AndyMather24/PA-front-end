import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class Form extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="test form"  />
        <Button
          title="submit"
          onPress={() => this.props.navigation.navigate("App")}
        />
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

export default Form;
