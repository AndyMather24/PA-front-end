import React, { Component } from "react";
import { View, StyleSheet, Button, Text, Image, ScrollView } from "react-native";
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
          <Card title="Travel">
            <Image
              style={{}}
              source={{ uri: 'https://www.birmingham.ac.uk/Images/News/dubai-image.jpg' }}
            />
            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
              {event.title} {'in'} {event.subtitle}
            </Text>

            <Text style={{ paddingBottom: 10, fontStyle: "italic" }}>
              {moment(event.date).format("LLLL")}
            </Text>

            <SwitchSelector
              buttonColor='#1D8DEE'
              hasPadding={true}
              options={options}
              initial={0}
              onPress={value => this.toggleStart(value)}
            />
          </Card>
          {this.state.bookInfo.map((bookinginfo, i) => {

            return (
              <Card key={i}
              >
                <View>
                  <Text style={{
                    fontSize: 25,
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
                    {`Duration: ${bookinginfo.arrival_stop || bookinginfo.r_arrival_stop}`}
                  </Text>
                </View>
              </Card>

            )
          })}
          <Card>
            <Button onPress={this.linkTo}
              // icon={<Icon name='train' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='BOOK TRANSPORT' />
          </Card>


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


  linkTo = () => {
    WebBrowser.openBrowserAsync(this.state.bookInfo.booking_url);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151E29"
  },

  paddingText: {
    paddingBottom: 5
  }
});

export default EventScreen;
