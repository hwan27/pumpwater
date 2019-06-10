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

  // componentDidMount() {
  //   Alert.alert(JSON.stringify(this.props.navigation.state.params.sector));
  // }
  // shouldComponentUpdate(nextProps) {
  //   const propsChange =
  //     this.props.navigation.state.params.sector !==
  //     nextProps.navigation.state.params.sector;
  //   return propsChange;
  // }

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps) {
  //     Alert.alert(JSON.stringify(nextProps));
  //   }
  // };

  // state = { update: null };

  // _update() {
  //   this.setState({ update: this.props });
  //   Alert.alert(JSON.stringify(this.props.navigation.state.params.sector));
  // }
  // componentDidMount() {
  //   setInterval(() => {
  //     this._update();
  //   }, 2000);
  // }

  render() {
    const {
      navigation: {
        state: {
          params: { sector, refresh, isFetching }
        }
      }
    } = this.props;
    return (
      <SectorScreen sector={sector} refresh={refresh} isFetching={isFetching} />
    );
  }
}
export default Container;
