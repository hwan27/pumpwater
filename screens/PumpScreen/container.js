import React, { Component } from "react";
import { Alert, Dimensions, TouchableOpacity, View, Text } from "react-native";
import PumpScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";
import { Icon } from "native-base";

const { width } = Dimensions.get("window");

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: navigation.getParam("title"),
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 } //add this
      // headerRight: (
      //   <TouchableOpacity
      //     onPress={() => this.setModalVisible(!this.state.modalVisible)}
      //   >
      //     <Icon
      //       type="FontAwesome"
      //       name="map"
      //       style={{
      //         paddingRight: 10,
      //         fontSize: 25,
      //         color: "white"
      //       }}
      //     />
      //   </TouchableOpacity>
      //)
    };
  };

  state = { modalVisible: false, isFetching: false };

  // async componentDidMount() {
  //   await getFeed();
  //   Alert.alert(JSON.stringify(props));
  // }

  _setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  // _refresh = () => {
  //   const { getFeed } = this.props;
  //   this.setState({ isFetching: true });
  //   getFeed();
  // };
  render() {
    const {
      navigation: {
        state: {
          params: { pump, sector }
        }
      }
    } = this.props;
    return (
      <PumpScreen
        pump={pump}
        sector={sector}
        {...this.state}
        setModalVisible={this._setModalVisible}
        //refresh={this._refresh}
      />
    );
  }
}
export default Container;
