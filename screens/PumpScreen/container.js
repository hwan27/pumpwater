import React, { Component } from "react";
import { Alert } from "react-native";
import PumpScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

class Container extends Component {
  static navigationOptions = {
    title: "PUMP",
    headerStyle: {
      backgroundColor: "#008de6"
    },
    headerTitleStyle: { color: "white", marginLeft: 30 }
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
