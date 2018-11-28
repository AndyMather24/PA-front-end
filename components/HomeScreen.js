import React from "react";
import { AsyncStorage, Button, StyleSheet, View, Dimensions } from "react-native";
import Spinner from "./Spinner"
import Header from "./Header";
class HomeScreen extends React.Component {
  static navigationOptions = {

    title: "Home"
  };

  render() {
    return (


      <View style={styles.container}>
        <Header />
        <Spinner />
        {/* <Button title="Show me more of the app" onPress={this.showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} /> */}
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
