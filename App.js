import React from "react";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInScreen from "./components/SignInScreen";
import OtherScreen from "./components/OtherScreen";
import AuthLoadingScreen from "./components/AuthLoading";
import HomeBar from "./components/NavBar";
import Form from "./components/Form";
import Settings from "./components/Settings";
import EventScreen from "./components/EventScreen";
const AppStack = createStackNavigator({
  Home: {
    screen: HomeBar,
    navigationOptions: {
      header: null
    }
  },
  Other: OtherScreen,
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Form: Form,
      Setting: Settings,
      Event: EventScreen
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
