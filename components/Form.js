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
import { Button, StyleSheet, Text, AsyncStorage } from "react-native";
import * as api from "../api/api";
import Axios from "../node_modules/axios";
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
            <Text style={styles.text}> please provide this information </Text>
            <Item floatingLabel success color="white">
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Home Address</Label>
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
            <Item floatingLabel>
              <Label>Station</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label color="white">Budget</Label>
              <Input />
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
    color: "white"
  }
});

export default Forms;
