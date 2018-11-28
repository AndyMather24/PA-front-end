import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Header extends Component {

    render() {
        return (
            <View style={styles.headerContainer} >
                <Text style={styles.text}> APP NAME </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',

    }
});
