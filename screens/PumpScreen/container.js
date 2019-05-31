import React, { Component } from "react";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
import PumpScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";
import { Icon } from "native-base";

const { width } = Dimensions.get("window");

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 },

      headerRight: (
        <TouchableOpacity>
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
  };

  // componentDidMount() {
  //   console.log(JSON.stringify(this.props.navigation.state.params));
  // }
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
