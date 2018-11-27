import React from "react"
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import * as api from '../api/api'
export default class Spinner extends React.Component {
    state = {
        events: []
      }

    render() {
        return ( 
        <ScrollView style={styles.container}>

        <ScrollView horizontal >
        {this.state.events.map(event => {
              return <View style={styles.boxSmall} key={event.id}>
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
      flex: 1,
      width: 200,
      height: 200,
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: 'steelblue',
    }
  })