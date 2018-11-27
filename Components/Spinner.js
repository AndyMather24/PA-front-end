import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import Carousel from "react-native-carousel-control";
import React, { Component } from 'react';


export default class Spinner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Carousel style={styles.container}>
                <Text style={styles.text } >Lorem ipsum dolor sit amet consectetur </Text>
                <Text style={styles.text}>Some Text</Text>
                <Text style={styles.text}>Some More</Text>
                </Carousel>
                

            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "stretch",
        borderColor: '#d6d7da',
       
        
    },
    shadowOffset:{ 
        width: 10, 
        height: 10, 
    },
    page: {
        flex: 1
    },
    text: {
  
        height: 300,
        padding: 20,
        textAlign: "center",
        backgroundColor: "lightblue", borderColor: "black"
    }
});

  
