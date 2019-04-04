import { createStackNavigator } from "react-navigation";
import SettingScreen from "../screens/SettingScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const SettingRoute = createStackNavigator(
  {
    Setting: {
      screen: SettingScreen,
      navigationOptions: ({ screenProps }) => ({
        headerTitle: screenProps.username
      })
    },
    ...sharedRoutes
  },
  { ...sharedOptions }
);

export default SettingRoute;
