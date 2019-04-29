import React, { Component } from "react";
import { Alert, Dimensions } from "react-native";
import PumpDetailScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

const {width} = Dimensions.get('window')
class Container extends Component {
  static navigationOptions = {
    title: "PUMP DETAIL",
    headerStyle: {
      backgroundColor: "#008de6"
    },
    headerTitleStyle: { color: "white", marginLeft: width * 0.2 }
  };
  //   componentDidMount() {
  //     Alert.alert(JSON.stringify(this.props.navigation.state));
  //   }

  render() {
    const { data } = this.props;
    const {
      navigation: {
        state: {
          params: { pumpDetail }
        }
      }
    } = this.props;
    return (
      <PumpDetailScreen
        pumpDetail={pumpDetail}
        getModem={this._getModem}
        data={data}
      />
    );
  }

  _getModem = () => {
    const { getModem } = this.props;
    getModem();
  };
}
export default Container;
