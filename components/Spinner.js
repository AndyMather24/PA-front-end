import React from "react"
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
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
              <Image
       style={{ flex: 1, resizeMode, width: "100%", height: "100%"}} source={{ uri: remote }}/>
                <Text> Summary: {event.summary}</Text>
              
                <Text>{event.location}</Text>
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
    boxSmall: {
      borderWidth: 0.5,
      borderColor: "#CF4527",
      flex: 1,
      width: 200,
      height:350,
      marginBottom: 10,
      marginRight: 10
    },
    text: {

    }
  })