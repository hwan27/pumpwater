import React from "react";
import { createBottomTabNavigator, TabBarBottom } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SettingRoute from "../routes/SettingRoute";
import sharedRoute from "../routes/sharedRoutes";
import SearchRoute from "../routes/SearchRoute";
import NotificationRoute from "../routes/NotificationRoute";
import { Icon } from "native-base";
import { tsPropertySignature } from "@babel/types";

const TabNavigation = createBottomTabNavigator(
  {
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
    },

    Notification: {
      screen: NotificationRoute,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="FontAwesome"
            name="exclamation-circle"
            style={{ fontSize: 27, color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      },
      swipeEnabled: true,
      animationEnabled: true,
      activeTintColor: "blue"
    }
  }
);

export default TabNavigation;
