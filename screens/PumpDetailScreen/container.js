import React, { Component } from "react";
import { Alert } from "react-native";
import PumpDetailScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

class Container extends Component {
  static navigationOptions = {
    title: "PUMP DETAIL",
    headerStyle: {
      backgroundColor: "#008de6"
    },
    headerTitleStyle: { color: "white", marginLeft: 30 }
  };
  //   componentDidMount() {
  //     Alert.alert(JSON.stringify(this.props.navigation.state));
  //   }

  render() {
    const {
      navigation: {
        state: {
          params: { pumpDetail }
        }
      }
    } = this.props;
    return <PumpDetailScreen pumpDetail={pumpDetail} />;
  }
}
export default Container;
