import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Card, PricingCard, Header } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import { Ionicons } from "@expo/vector-icons";

const options = [
  {
    label: "Home",
    value: "home",
    customIcon: (
      <Ionicons
        name="ios-home"
        size={18}
        color="red"
        style={{ paddingRight: 10 }}
      />
    )
  },
  {
    label: "Office",
    value: "office",
    customIcon: (
      <Ionicons
        size={18}
        color="red"
        name="ios-briefcase"
        style={{ paddingRight: 10 }}
      />
    )
  }
];
class EventScreen extends Component {
  state = {};

  render() {
    return <View>
      <Header leftComponent={{ icon: 'back', color: '#fff' }}/>
        <ScrollView>
          <Card title="Book" image={require("../assets/2nCt3Sbl.jpg")}>
            <Text style={{ marginBottom: 10 }}>
              event name - date ...etc
            </Text>
            <SwitchSelector hasPadding={true} options={options} initial={0} onPress={value => console.log(`Call onPress with value: ${value}`)} />
          </Card>

          <PricingCard color="#4f9deb" title="Transport" price="£0" info={["1 passenger", "economy", "massage"]} button={{ title: "BOOK NOW", icon: "flight-takeoff" }} onButtonPress={() => this.props.navigation.navigate("App")} />
          <PricingCard color="#4f9deb" title="Transport and Accommodation" price="£0" info={["1 passenger", "economy", "massage"]} button={{ title: "BOOK NOW", icon: "flight-takeoff" }} onButtonPress={() => this.props.navigation.navigate("App")} />
        </ScrollView>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15
  }
});

export default EventScreen;
