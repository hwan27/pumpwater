import React from "react";
import SectorScreen from "../screens/SectorScreen";
import PumpScreen from "../screens/PumpScreen";
import PumpDetailScreen from "../screens/PumpDetailScreen";
import NavButton from "../components/NavButton";
import { LogoutButton } from "../components/NavButton";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const sharedRoutes = {
  Sectors: {
    screen: SectorScreen
  },
  Pumps: {
    screen: PumpScreen
  },
  PumpDetail: {
    screen: PumpDetailScreen
  }
};

const sharedOptions = {
  navigationOptions: {
    headerLeft: props => <NavButton iconName="chevron-left" {...props} />,
    // <NavButton iconName="home" {...props} />,
    headerStyle: {
      backgroundColor: "#FBFBFB"
    }
  }
};

export { sharedOptions };
export default sharedRoutes;
