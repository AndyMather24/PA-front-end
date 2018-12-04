import React from "react"
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground } from 'react-native';
import * as api from '../api/api'
export default class Spinner extends React.Component {


  static navigationOptions = {
    title: "Spinner"
  };
  state = {
    events: []
  }
  
  render() {
    const resizeMode = 'center';
    const remote = "https://london.ac.uk/sites/default/files/styles/promo_mobile/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=ekaaHHpi";
    return (
      <ScrollView style={styles.container}>
        <ScrollView horizontal >
          {this.state.events.map(event => {
            return <View style={styles.boxSmall} key={event.id}>
              <ImageBackground
                style={{ flex: 1, resizeMode, width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: remote }} >
                <View style={styles.textcontainer}>
                  <Text style={styles.headerText}> {event.summary}</Text>
                  <Text style={styles.text}> Start Time: {event.start.dateTime}</Text>

                  <Text style={styles.text}>{event.location}</Text>
                </View>
              </ImageBackground>

            </View>
          })}
        </ScrollView>

      </ScrollView>
    );
  }

  componentDidMount = () => {
    this.fetchAllEvents();

  }

  fetchAllEvents = () => {
    api.getEvents().then(events => {
      this.setState({
        events
      })
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textcontainer: {
    backgroundColor: 'rgba(34,34,34,0.2)',
    padding: 2
  },
  boxSmall: {
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    width: 350,
    height: 475,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  headerText: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255,1.0)',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  text: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'left'
  }
})