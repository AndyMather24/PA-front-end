import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  TextInput,
  Input,
  Label
} from "native-base";
import {
  Button,
  StyleSheet,
  Text,

  AsyncStorage,
  View,
  StatusBar
} from "react-native";
import * as api from "../api/api";
class Forms extends Component {
  state = {
    user: "Peter Plant (fake)",
    office_address: "Manchester,UK",
    home_address: "Rochdale,UK",
    user: {}
  };

  render() {
    const { settings } = this.props;

    return (
      <Container style={{ backgroundColor: "#1B2737" }}>
        <StatusBar barStyle="light-content" />
        <Header transparent />
        <Content style={{ marginTop: 80 }}>
          <Form transparent color="white">
            {(!settings && (
              <View style={styles.text}>
                <Text style={styles.text}>Hi {this.state.user.givenName}</Text>
                <Text style={styles.text}>
                  Please provide these information{" "}
                </Text>
              </View>
            )) || (
                <Text style={styles.text}>Change your Home/Office Address</Text>
              )}
            <View style={{ backgroundColor: 'white', borderRadius: 15, margin: 25, borderBottomColor: '#151E29' }}>
              <Item floatingLabel>
                <Label color="white">Home Station</Label>
                <TextInput
                  inputStyle={{ color: 'white' }}
                  onChangeText={data => this.handleChange(data, "home_address")}
                />
              </Item>
              <Item floatingLabel>
                <Label>Office Station</Label>
                <Input
                  onChangeText={data => this.handleChange(data, "office_address")}
                />
              </Item>
            </View>

            {
              <Button
                color="white"
                title="Submit"
                onPress={() => {
                  this.preferenceAsync();
                  this.handleSubmit(this.state);
                  this.props.navigation.navigate("User");
                }}
              />
            }
          </Form>
        </Content>
      </Container>
    );
  }
  componentDidMount() {
    this.getUserInfo();
  }
  handleChange = (event, name) => {
    this.setState({
      [name]: event
    });
  };
  getUserInfo = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const { user } = JSON.parse(userToken);
    this.setState({ user });
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
