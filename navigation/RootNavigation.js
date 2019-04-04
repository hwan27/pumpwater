import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TownScreen from "../screens/TownScreen";
import TabNavigation from "../navigation/TabNavigation";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    Town: {
      screen: TownScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

export default RootNavigation;
