import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Card, Button, PricingCard } from "react-native-elements";
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
        color="orange"
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
        color="orange"
        name="ios-briefcase"
        style={{ paddingRight: 10 }}
      />
    )
  }
];
class EventScreen extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card
            title="Book"
            image={require("../assets/dancer-1904467_960_720.png")}
          >
            <Text style={{ marginBottom: 10 }}>event name - date ...etc</Text>
            <SwitchSelector
              hasPadding={true}
              options={options}
              initial={0}
              onPress={value =>
                console.log(`Call onPress with value: ${value}`)
              }
            />
          </Card>

          <PricingCard
            color="#4f9deb"
            title="Transport"
            price="£0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
          />
          <PricingCard
            color="#4f9deb"
            title="Transport and Accommodation"
            price="£0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
          />
        </ScrollView>
      </View>
    );
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
