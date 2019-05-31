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
    return {
      title: navigation.getParam("title"),
      headerStyle: {
        backgroundColor: "#00a5dd",justifyContent:'center',alignItems:'center'
      },
      headerTitleStyle: {  textAlign: 'center',
      color:'#fff',
      flexGrow:1,
      alignSelf:'center',  },
      headerLeft:<View style={{padding:6}}></View>, //add this
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

  render() {
    const {
      navigation: {
        state: {
          params: { pump, sector }
        }
      }
    } = this.props;
    return <PumpScreen pump={pump} sector={sector} />;
  }
}
export default Container;
