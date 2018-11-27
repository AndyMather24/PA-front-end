import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import OtherScreen from "./OtherScreen";

const Home = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: OtherScreen
});
const HomeBar = createAppContainer(Home);

export default HomeBar;
