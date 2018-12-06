import React from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";
import Headercomponent from "./Headercomponent";
import Spin from "./Carousel";
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };


  render() {
    return (
      <View style={styles.container}>
        <Headercomponent />
        <Spin />
      </View>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
