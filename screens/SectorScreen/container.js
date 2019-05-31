import React, { Component } from "react";
import { Alert, Dimensions } from "react-native";
import SectorScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

const { width } = Dimensions.get("window");

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("town"),
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 }
    };
  };

  render() {
    const {
      navigation: {
        state: {
          params: { sector }
        }
      }
    } = this.props;
    return <SectorScreen sector={sector} />;
  }
}
export default Container;
