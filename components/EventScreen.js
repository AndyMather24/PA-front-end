import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

class EventScreen extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Event Page</Text>
          <Button
            title="Save changes"
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

export default EventScreen;
