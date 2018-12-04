import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { Button, StyleSheet, Text, AsyncStorage, View } from "react-native";
import * as api from "../api/api";
class Forms extends Component {
  state = {
    user: "Peter Plant (fake)",
    office_address: "Manchester,UK",
    home_address: "Rochdale,UK"
  };

  render() {
    const { settings } = this.props;
    return (
      <Container style={{ backgroundColor: "#1B2737" }}>
        <Header transparent />
        <Content style={{ marginTop: 80 }}>
          <Form transparent color="white">
            <View style={styles.text}>
              <Text style={styles.text}> Please provide these information </Text>
            </View>
            <Item floatingLabel>
              <Label color="white">Home Address</Label>
              <Input
                onChangeText={data => this.handleChange(data, "home_address")}
              />
            </Item>
            <Item floatingLabel>
              <Label>Office Location</Label>
              <Input
                onChangeText={data => this.handleChange(data, "office_address")}
              />
            </Item>
            {!settings && (
              <Button
                color="white"
                title="Submit"
                onPress={() => {
                  this.preferenceAsync();
                  this.handleSubmit(this.state);
                  this.props.navigation.navigate("App");
                }}
              />
            )}
          </Form>
        </Content>
      </Container>
    );
  }
  handleChange = (event, name) => {
    this.setState(
      {
        [name]: event
      },
      () => console.log("this.state")
    );
  };
  preferenceAsync = async () => {
    const preference = JSON.stringify(this.state);
    await AsyncStorage.setItem("preference", preference);
  };

  handleSubmit = addresses => {
    api.postAddressPref(addresses);
  };
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25
  }
});

export default Forms;
