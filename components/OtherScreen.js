import React from "react";
import { AsyncStorage, StyleSheet, View, Text } from "react-native";
class OtherScreen extends React.Component {
  static navigationOptions = {
    title: "other"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>All events here</Text>
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
