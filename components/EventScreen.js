import React, { Component } from "react";
import { View, StyleSheet, Button, Text, Image, ScrollView } from "react-native";
import { Card, PricingCard, Header } from "react-native-elements";
import SwitchSelector from "react-native-switch-selector";
import moment from "moment";
import Loading from './Loading'
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
        color="#151E29"
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
        color="#151E29"
        name="ios-briefcase"
        style={{ paddingRight: 10 }}
      />
    )
  }
];
class EventScreen extends Component {
  state = {
    bookInfo: [],
    start: "home",
    loading: true,
  };

  render() {
    const { event } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header

          rightComponent={
            <Ionicons
              size={26}
              color="#fff"
              name="ios-home"
              onPress={() => this.props.navigation.navigate("Events")}
            />
          }
        />
        <ScrollView>
          <Card title="Travel" titleStyle={{ color: 'white' }} containerStyle={{ borderRadius: 15, borderColor: "#1B2737", backgroundColor: "#1B2737" }}
            image={{ url: event.illustration }}>
            <Text style={{ color: 'white', marginBottom: 5, fontWeight: 'bold' }}>
              {event.title} {'in'} {event.subtitle}
            </Text>

            <Text style={{ color: 'white', paddingBottom: 10, fontStyle: "italic" }}>
              {moment(event.date).format("MMMM Do YYYY")} {event.date.slice(11, 16) + '-' + event.endDate.slice(11, 16)}

            </Text>

            <SwitchSelector
              buttonColor='#1D8DEE'
              hasPadding={true}
              options={options}
              initial={0}
              onPress={value => this.toggleStart(value)}
            />
          </Card>
          {this.state.loading && <Loading />}
          {this.state.bookInfo.map((bookinginfo, i) => {

            return (
              <Card key={i} containerStyle={{ borderRadius: 25, backgroundColor: "#1B2737", borderColor: "#1B2737" }}
              >
                <View>

                  <Text style={{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    textAlign: 'center'
                  }}>
                    {(bookinginfo.departure_time) ? 'Outgoing Transport' : 'Return Transport'}
                  </Text>
                  <Text style={styles.paddingText}>
                    {`Departure Time: ${bookinginfo.departure_time || bookinginfo.r_departure_time}`}
                  </Text>
                  <Text style={styles.paddingText}>
                    {`Arrival Time: ${bookinginfo.arrival_time || bookinginfo.r_arrival_time}`}
                  </Text>
                  <Text style={styles.paddingText}>
                    {`From: ${bookinginfo.departure_stop || bookinginfo.r_departure_stop}`}
                  </Text>
                  <Text style={styles.paddingText}>
                    {`To: ${bookinginfo.arrival_stop || bookinginfo.r_arrival_stop}`}
                  </Text>
                  <Text style={styles.paddingText}>
                    {`Destination: ${bookinginfo.arrival_stop || bookinginfo.r_arrival_stop}`}
                  </Text>
                </View>
              </Card>

            )
          })}
          {!this.state.loading && <Card containerStyle={{ backgroundColor: "white", borderColor: "white", borderRadius: 35, padding: 5 }} >
            <Button onPress={this.linkTo}
              title='BOOK TRANSPORT' />
          </Card>}
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
      this.setState({ bookInfo: transport, loading: false });
    });


  };
  toggleStart = start => {
    this.setState({ start });
  };


  linkTo = () => {
    const { event } = this.props.navigation.state.params;
    api.arrangeEvent(event.id)
    WebBrowser.openBrowserAsync(this.state.bookInfo[0].booking_url);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151E29"
  },
  paddingText: {
    paddingBottom: 5,
    color: 'white'
  }
});

export default EventScreen;
