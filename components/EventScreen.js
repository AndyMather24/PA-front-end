import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Card, PricingCard, Header } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import { Ionicons } from "@expo/vector-icons";
import * as api from "../api/api";
import { WebBrowser } from "expo";

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
    bookInfo: [],

    start: "home"
  };

  render() {
    const { bookInfo } = this.state;
    const { event } = this.props.navigation.state.params;
    console.log(bookInfo);
    return (
      <View>
        <Header
          leftComponent={
            <Ionicons
              size={18}
              color="#fff"
              name="ios-home"
              onPress={() => this.props.navigation.navigate("Events")}
            />
          }
        />
        <ScrollView>
          <Card title="Book" image={require("../assets/2nCt3Sbl.jpg")}>
            <Text style={{ marginBottom: 10 }}>
              {event.title} {event.subtitle}
            </Text>
            <SwitchSelector
              hasPadding={true}
              options={options}
              initial={0}
              onPress={value => this.toggleStart(value)}
            />
          </Card>

          <PricingCard
            color="#4f9deb"
            title="Transport"
            price="£0"
            info={[
              `from: ${bookInfo.departure_stop || "loading"}`,
              `to: ${bookInfo.arrival_stop || "loading"}`,
              `duration: ${bookInfo.duration || "loading"}`
            ]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
            onButtonPress={this.linkTo}
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
  componentDidUpdate(prevProp, prevState) {
    if (prevState.start !== this.state.start) {
      const { event } = this.props.navigation.state.params;
      this.FetchEvent(event.id, this.state.start);
    }
  }
  componentDidMount() {
    const { event } = this.props.navigation.state.params;
    this.FetchEvent(event.id, this.state.start);
  }
  FetchEvent = (id, start) => {
    api.getEventById(id, start).then(bookInfo => {
      this.setState({ bookInfo });
    });
  };
  toggleStart = start => {
    this.setState({ start });
  };

  linkTo = () => {
    WebBrowser.openBrowserAsync(this.state.bookInfo.booking_url);
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
