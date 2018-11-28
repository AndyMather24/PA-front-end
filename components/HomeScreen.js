import React from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";
 //import MyCarousel from "./myCarousel"
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>

        <Button title="Show me more of the app" onPress={this.showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
