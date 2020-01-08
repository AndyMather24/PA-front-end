import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
export default class Headercomponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Image style={{ height: 100, width: 200, alignItems: 'center', marginTop: 50 }} source={require('../assets/PocketPA(4).png')} />
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    backgroundColor: "#151E29",
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
