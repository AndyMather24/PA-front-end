import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
class User extends Component {
  static navigationOptions = {
    title: "profile!",
    header: "profile"
  };
  state = {
    username: "peterPlant",
    avatar:
      "https://pickaface.net/gallery/avatar/unr_goateebald_170216_1834_yvoxe.png"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://pickaface.net/gallery/avatar/unr_goateebald_170216_1834_yvoxe.png"
            }}
          />
          <Text style={styles.text}>
            {this.state.username.toLocaleUpperCase()}
          </Text>
        </View>
        <View style={styles.settings}>
          <Button color="white"
            title="Settings"
            onPress={() => this.props.navigation.navigate("Setting")}
          />
          <Button
            color= "white"
            title="Sign out"
            onPress={() => this.props.navigation.navigate("Auth")}
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
    alignItems: "center",
    backgroundColor: "#151E29"
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 20
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  settings: {
    flex: 2,
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
