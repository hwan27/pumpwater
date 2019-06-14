import React, { Component } from "react";
import { Alert, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import SectorScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import Sector from "../../components/Sector";

const { width } = Dimensions.get("window");

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("town_title"),
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 },
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam("logout")}>
          {/* <Text
            style={{ paddingRight: 10, fontSize: 16, color: "white" }}
            onPress={navigation.getParam("logout")}
          >
            LOGOUT
          </Text> */}
          <Image
            source={require("../../assets/images/logoutIcon.png")}
            style={{ resizeMode: "contain", width: 28, marginRight: 10 }}
          />
        </TouchableOpacity>
      )
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

  state = { isFetching: false };

  _logout = () => {
    const { logout } = this.props;
    logout();
  };
  componentDidMount() {
    this._refresh();
    this.props.navigation.setParams({ logout: this._logout });
    //Alert.alert(JSON.stringify(this.props.navigation.state.params.town_id));
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.townFeed) {
      this.setState({
        isFetching: false
      });
    }
  };
  render() {
    const {
      navigation: {
        state: {
          params: { town_id }
        }
      }
    } = this.props;
    return (
      <SectorScreen
        {...this.props}
        {...this.state}
        town_id={town_id}
        //sector_id={sector.id}
        refresh={this._refresh}
      />
    );
  }
  _refresh = () => {
    const { getTown } = this.props;
    this.setState({
      isFetching: true
    });
    getTown(this.props.navigation.state.params.town_id);
  };
}
export default Container;
