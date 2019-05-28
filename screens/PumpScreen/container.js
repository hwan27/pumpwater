import React, { Component } from "react";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
import PumpScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";
import { Icon } from "native-base";

const { width } = Dimensions.get('window')

class Container extends Component {
  static navigationOptions = {
    
    headerStyle: {
      backgroundColor: "#00a5dd"
    },
    headerTitleStyle: { color: "white", marginLeft: width * 0.28},

    title: "PUMP",

    headerRight: (
      <TouchableOpacity
      >
        <Icon
        type="FontAwesome"
        name="map"
        style={{
          paddingRight: 10,
          fontSize: 25,
          color: "white"
        }}
      />
      </TouchableOpacity>
      )
    
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
