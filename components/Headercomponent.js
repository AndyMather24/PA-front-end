import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
export default class Headercomponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#151E29",
    padding: 20,
    width: viewportWidth,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginTop: 45,
    paddingTop: 20,
    fontSize: 40,
    fontFamily: 'SinhalaSangamMN-Bold',
    color: "white",
    fontWeight: "bold"
  }
});
