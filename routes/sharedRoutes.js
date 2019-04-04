import React from "react";
import SectorScreen from "../screens/SectorScreen";
import PumpScreen from "../screens/PumpScreen";
import NavButton from "../components/NavButton";

const sharedRoutes = {
  Sectors: {
    screen: SectorScreen
  },
  Pumps: {
    screen: PumpScreen
  }
};

const sharedOptions = {
  navigationOptions: {
    headerLeft: props => <NavButton iconName="chevron-left" {...props} />,
    headerStyle: {
      backgroundColor: "#FBFBFB"
    }
  }
};

export { sharedOptions };
export default sharedRoutes;
