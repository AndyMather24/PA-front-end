import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import * as api from './api/api'
import Spinner from "./components/Spinner"
export default class App extends React.Component {
  state = {
    events: []
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>header</Text>
        </View>
        
    <View style={styles.main}>
          <ScrollView style={styles.mainscroll}>
            {this.state.events.map(event => {
              return <View style={styles.event} key={event.id}>
                <Text> Summary: {event.summary}</Text>
                <Text>{event.location}</Text>
              </View>

            })}
          </ScrollView>
            <Spinner/>
   
        </View>

        <View style={styles.footer}/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  headerText: {
    textAlign: 'center'
  },

  main: {
    flex: 6,
    backgroundColor: 'skyblue',
  },
  mainscroll: {
    flex: 1,
    width: 400
  },

  footer: {

    flex: 1,
    backgroundColor: 'steelblue',

  },
  event: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  }
});
