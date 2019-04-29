import React, { Component } from "react";
import { Alert, Dimensions } from "react-native";
import PumpScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

const { width } = Dimensions.get('window')

class Container extends Component {
  static navigationOptions = {
    
    headerStyle: {
      backgroundColor: "#008de6"
    },
    headerTitleStyle: { color: "white", marginLeft: width * 0.28},
    title: "PUMP"
  };

  render() {
    const {
      navigation: {
        state: {
          params: { pump }
        }
      }
    } = this.props;
    return <PumpScreen pump={pump} />;
  }
}
export default Container;
