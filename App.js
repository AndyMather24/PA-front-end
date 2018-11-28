import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInScreen from "./components/SignInScreen";
import OtherScreen from "./components/OtherScreen";
import AuthLoadingScreen from "./components/AuthLoading";
import HomeBar from "./components/NavBar"

const AppStack = createStackNavigator({ Home: HomeBar, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
