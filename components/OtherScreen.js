import React from "react";
import * as api from "../api/api";
import locationImages from "./static/locationImages";
import moment from "moment";
import {
  Container,
  Header,
  View,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Card
} from "native-base";
import { StyleSheet, Button } from "react-native";
class OtherScreen extends React.Component {
  state = {
    events: []
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#151E29" }}>
        <Content>
          <List style={{ marginTop: 30 }}>
            {this.state.events.map(event => {
              return (
                <View key={event.id} style={styles.card}>
                  <ListItem thumbnail noBorder>
                    <Left>
                      <Thumbnail
                        style={styles.image}
                        square
                        source={{ uri: event.illustration }}
                      />
                    </Left>
                    <Body>
                      <Text style={styles.textTitle}>{event.title}</Text>
                      <Text style={styles.textLocation}>{event.subtitle}</Text>
                      <Text style={styles.textDate}>
                        {moment(event.date).format("LLLL")}
                      </Text>
                    </Body>
                    <Right>
                      <Button
                        color="white"
                        title="view"
                        onPress={() =>
                          this.props.navigation.navigate("Event", { event })
                        }
                      >
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </View>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
  componentDidMount = () => {
    this.fetchAllEvents();
  };

  fetchAllEvents = () => {
    api.getEvents().then(events => {
      events = events.map(event => {
        const locationArr = event.location.split(",");
        const location =
          locationArr[locationArr.length - 2] +
          " " +
          locationArr[locationArr.length - 1];
        return {
          id: event.id,
          title: event.summary,
          subtitle: location,
          date: event.start.dateTime,
          illustration: this.selectImage(event.location)
        };
      });
      this.setState({
        events
      });
    });
  };
  selectImage = location => {
    const matchingLocation = Object.keys(locationImages).filter(locate => {
      return location.includes(locate);
    });
    return locationImages[matchingLocation.join("")];
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#1B2737",
    margin: 10,
    borderRadius: 15
  },
  textTitle: {
    fontWeight: "bold",
    color: "white"
  },
  textLocation: {
    color: "white"
  },
  textDate: {
    color: "white"
  },
  image: {
    borderRadius: 15
  }
});

export default OtherScreen;
