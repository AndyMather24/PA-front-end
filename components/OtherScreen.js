import React from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  StatusBar
} from "react-native";
class OtherScreen extends React.Component {
  static navigationOptions = {
    title: "other"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this.signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

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

export default OtherScreen;
