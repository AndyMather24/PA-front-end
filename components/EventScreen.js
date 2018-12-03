import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Card, PricingCard, Header } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import { Ionicons } from "@expo/vector-icons";
import * as api from "../api/api";

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
  state = {
    eventId: "068lhcsuvp4mfn9i350he6ue9d",
    event: {}
  };

  render() {
    const { event } = this.state;
    return (
      <View>
        <Header leftComponent={{ icon: "home", color: "#fff" }} />
        <ScrollView>
          <Card title="Book" image={require("../assets/2nCt3Sbl.jpg")}>
            <Text style={{ marginBottom: 10 }}>{event.date}</Text>
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
            info={[
              `from: ${event.departure_stop || "loading"}`,
              `to: ${event.arrival_stop || "loading"}`,
              `duration: ${event.duration || "loading"}`
            ]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
            onButtonPress={() => this.props.navigation.navigate("App")}
          />
          <PricingCard
            color="#4f9deb"
            title="Transport and Accommodation"
            price="£0"
            info={["1 passenger", "economy", "massage"]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
            onButtonPress={() => this.props.navigation.navigate("App")}
          />
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    this.FetchEvent(this.state.eventId);
  }
  FetchEvent = id => {
    api.getEventById(id).then(event => this.setState({ event }));
  };
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
