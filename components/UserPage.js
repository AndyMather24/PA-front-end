import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";
class User extends Component {
  static navigationOptions = {
    title: "Profile",
    header: "profile"
  };
  state = {
    user: {}
  };

  render() {
    let name = this.state.user.name || "john";
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{ uri: this.state.user.photoUrl }}
          />
          <Text style={styles.text}>{name.toLocaleUpperCase("en-US")}</Text>
        </View>
        <View style={styles.settings}>
          <Button
            color="white"
            title="Settings"
            onPress={() => this.props.navigation.navigate("Setting")}
          />
          <Button
            color="white"
            title="Sign out"
            onPress={async () => {
              this.props.navigation.navigate("Auth");
              await AsyncStorage.clear();
            }}
          />
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const { user } = JSON.parse(userToken);
    this.setState({ user });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151E29"
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 50
  },
  imgContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  settings: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff"
  }
});

export default User;
