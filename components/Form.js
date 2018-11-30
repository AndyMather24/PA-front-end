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
import { Button, StyleSheet, Text } from "react-native";
class Forms extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Text> please provide this information </Text>
            <Item floatingLabel success>
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Home Adress</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Office Location</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Station</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Budget</Label>
              <Input />
            </Item>
            <Button
              title="Submit"
              onPress={() => this.props.navigation.navigate("App")}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Forms;
