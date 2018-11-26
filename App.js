import React from 'react';
import { StyleSheet, Text, View, ScrollView, button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.main} />
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue'
  },

  main: {
    flex: 6,
    backgroundColor: 'skyblue',
  },

  footer: {
    flex: 1,
    backgroundColor: 'steelblue',

  }
});
