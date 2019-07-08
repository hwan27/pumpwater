import React, { Component } from "react";
import { Alert, Dimensions, View, Text } from "react-native";
import PumpDetailScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

const { width } = Dimensions.get("window");
class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 }
    };
  };

  render() {
    //const { data } = this.props;
    const {
      navigation: {
        state: {
          params: { pump }
        }
      }
    } = this.props;
    return <PumpDetailScreen pump={pump} getModem={this._getModem} />;
  }

  // _getModem = () => {
  //   const { getModem } = this.props;
  //   getModem();
  // };
}
export default Container;
