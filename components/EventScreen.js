import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Card, PricingCard, Header } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import moment from "moment";
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
        color="#0066CC"
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
        color="#0066CC"
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
    const { event } = this.props.navigation.state.params;
    { console.log(event) }
    {
      console.log(this.state.bookInfo)
    }
    return (

      <View style={styles.container} >
        <Header containerStyle={{
          backgroundColor: '#151E29',
          justifyContent: 'space-around',
        }} leftComponent={{ icon: "home", color: "#fff", }} />
        <ScrollView>
          <Card title="Travel">
            <Image
              style={styles.image}
              source={{ uri: event.illustration }}
            />
            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
              {event.title} {'in'} {event.subtitle}
            </Text>

            <Text style={{ paddingBottom: 10, fontStyle: "italic" }}>
              {moment(event.date).format("LLLL")}
            </Text>

            <SwitchSelector
              hasPadding={true}
              options={options}
              initial={0}
              onPress={value => this.toggleStart(value)}
            />
          </Card>
          {this.state.bookInfo.map((bookinginfo, i) => {

            return (
              <PricingCard styles={styles.transportCard} key={i}
                color="#1B2737"
                title={(bookinginfo.departure_time) ? 'Outgoing Transport' : 'Return Transport'}
                containerStyle={{ borderRadius: 15 }}
                info={
                  [
                    `Departure time: ${bookinginfo.departure_time || bookinginfo.r_departure_time}`,
                    `Arrival time: ${bookinginfo.arrival_time || bookinginfo.r_arrival_time}`,
                    `From: ${bookinginfo.departure_stop || bookinginfo.r_departure_stop}`,
                    `To: ${bookinginfo.arrival_stop || bookinginfo.r_arrival_stop}`,
                    `Duration: ${bookinginfo.duration || bookinginfo.r_duration}`
                  ]}
                button={{
                  title: "BOOK NOW", icon: 'train'
                }}
                onButtonPress={this.linkTo('http://ojp.nationalrail.co.uk/service/timesandfares/Liverpool%20Lime%20Street/Manchester%20Victoria/11122018/1856/dep?utm_source=googlemaps&utm_medium=web&utm_campaign=googlemaps')}
              />
            )
          })}

          {/* <PricingCard
            color="#4f9deb"
            title="Transport and Accommodation"
            price="£0"
            info={["1 passenger", "economy", "massage"]}
            button={{ title: "BOOK NOW", icon: "flight-takeoff" }}
            onButtonPress={() => this.props.navigation.navigate("App")}
          /> */}
        </ScrollView>
      </View >
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
    api.getEventById(id, start).then(transport => {
      this.setState({ bookInfo: transport });
    });


  };
  toggleStart = start => {
    this.setState({ start });
  };

  linkTo = (link) => {
    WebBrowser.openBrowserAsync(link);

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151E29"
  },
  transportCard: {
    backgroundColor: '#1B2737'
  }
});

export default EventScreen;
