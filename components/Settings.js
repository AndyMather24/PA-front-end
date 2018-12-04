import React, { Component } from "react";
import { View, Button, StyleSheet, AsyncStorage } from "react-native";
import Forms from "./Form";

class Settings extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Forms
          settings={true}
          home={this.storagePref().home}
          office={this.storagePref().office}
        />


        <View style={styles.container}>
          <Button
            color="white"
            title="Save changes"
            onPress={() => this.props.navigation.navigate("User")}
          />
          <Button
            color="white"
            title="Discard"
            onPress={() => this.props.navigation.navigate("App")}
          />
        </View>
      </View>
    );
  }
  storagePref = async () => {
    const prefernce = await AsyncStorage.getItem("preference");
    return JSON.parse(prefernce);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2737"
  }
});

export default Settings;
