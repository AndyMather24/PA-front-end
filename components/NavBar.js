import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import HomeScreen from "./HomeScreen";
import OtherScreen from "./OtherScreen";

const HomeBar = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: OtherScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            iconName = `ios-home`;
          } else if (routeName === "Settings") {
            iconName = `ios-options`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      },
      animationEnabled: false,
      swipeEnabled: false
    }
  )
);

export default HomeBar;
