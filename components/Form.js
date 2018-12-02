import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Card
} from "native-base";
import { Button, StyleSheet, Text } from "react-native";
class Forms extends Component {
  state = {
    home: null,
    office: null
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
              <Label>Home Adress</Label>
              <Input
                defaultValue={this.state.home}
                onChangeText={data => this.handleChange(data, "home")}
              />
            </Item>
            <Item floatingLabel>
              <Label>Office Location</Label>
              <Input onChangeText={data => this.handleChange(data, "office")} />
            </Item>
            <Item floatingLabel>
              <Label>Station</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label color="white">Budget</Label>
              <Input />
            </Item>
            {!settings && <Button
              color="white"
              title="Submit"
              onPress={() => this.props.navigation.navigate("App")}
            />}
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
      () => console.log(this.state)
    );
  };
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: "white"
  }
});

export default Forms;
