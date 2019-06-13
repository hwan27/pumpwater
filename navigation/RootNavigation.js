import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TownScreen from "../screens/TownScreen";
import TabNavigation from "../navigation/TabNavigation";
import HomeRoute from "../routes/HomeRoute";

const RootNavigation = createStackNavigator(
  {
    // Tabs: {
    //   screen: TabNavigation,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="FontAwesome"
            name="home"
            style={{ fontSize: 27, color: tintColor }}
          />
        )
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
