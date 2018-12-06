import React from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  StatusBar
} from "react-native";
import { Thumbnail } from "native-base";
import { googleApi } from "../api/googleApi";
import Headercomponent from "./Headercomponent";

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
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <Headercomponent />
        </View>
        <View style={styles.googleContainer}>
          <Thumbnail
            square
            source={require("../assets/googleLogin.png")}
            style={{ marginBottom: 20 }}
          />
          <View style={styles.buttonStyle}>
            <Button
              color="#151E29"
              title="Sign in with Google"
              onPress={this.googleSignIn}
            />
          </View>

        </View>
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Form");
  };

  googleSignIn = async () => {
    try {
      const token = await googleApi.loginSync();
      await AsyncStorage.setItem("userToken", JSON.stringify(token));
      this.props.navigation.navigate("Form");
    } catch (err) {
      console.log(err);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#151E29",
    color: "white"
  },
  headerContainer: {
    marginTop: 70
  },
  googleContainer: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151E29",
    color: "white"
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 25,

  }
});

export default SignInScreen;
