import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as api from "../api/api";

class TravelPage extends Component {
    state = {
        travel: []
    };

  render() {
    return (
      <View style={styles.textcontainer}>
          <Text style={styles.text}>Travel Information</Text>
          {this.state.travel.map((info, i) => {
            return <View key={i}> 
              <Text style={styles.text}> Start:    {info.start_address}</Text>
              <Text style={styles.text}> Station: {info.departure_stop}</Text>
              <Text style={styles.text}> Departure: {info.departure_time}</Text>
              <Text style={styles.text}> End: {info.end_address}</Text>
              <Text style={styles.text}> Arrival Location: {info.arrival_stop}</Text>
              <Text style={styles.text}> Arrival Time: {info.arrival_time}</Text>
              <Text style={styles.text}> Duration: {info.duration}</Text>
              <Text style={styles.text}> Travel Company: {info.train_company}</Text>
              </View>
          
          })}
          </View>
    
    );
  }

  componentDidMount() {
    this.fetchTravel()
  }

  fetchTravel = ()=> {
    api.getTravel().then(travel => {
      this.setState({
        travel: [travel]
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
    marginBottom: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    fontSize: 16,

  }
})
export default TravelPage;
