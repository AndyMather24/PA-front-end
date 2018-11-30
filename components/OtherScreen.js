import React from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Card
} from "native-base";
import { StyleSheet } from "react-native";
class OtherScreen extends React.Component {
  state = {
    events: [
      {
        id: 1,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 2,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 3,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 4,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 5,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 6,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 7,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 8,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 9,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 10,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 11,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      },
      {
        id: 12,
        title: "meeting with lucy",
        describtion: "another position",
        img: "http://i.imgur.com/2nCt3Sbl.jpg"
      }
    ]
  };
  render() {
    return <Container style={{ backgroundColor: "#151E29" }}>
        <Header transparent />
        <Content>
          <List>
            {this.state.events.map(event => {
              return <Card key={event.id}>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: event.img }} />
                    </Left>
                    <Body>
                      <Text>{event.title}</Text>
                      <Text note numberOfLines={1}>
                        {event.describtion}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={() => alert("Lucy!")}>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </Card>;
            })}
          </List>
        </Content>
      </Container>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OtherScreen;
