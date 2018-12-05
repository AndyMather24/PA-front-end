import React from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  TextInput
} from "react-native";
import { googleApi } from "../api/googleApi";
import { WebBrowser, AuthSession } from "expo";

class SignInScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = {
    title: "sign in"
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Form");
  };

  linkTo = () => {
    WebBrowser.openBrowserAsync("https://projectpa-223310.firebaseapp.com/");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignInScreen;
