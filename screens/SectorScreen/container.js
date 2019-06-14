import React, { Component } from "react";
import { Alert, Dimensions, Text } from "react-native";
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

  state = { isFetching: false };
  componentDidMount() {
    this._refresh();
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
