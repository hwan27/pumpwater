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
    //const { params = {} } = navigation.state;
    return {
      title: navigation.getParam("sector_title"),
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

  state = {
    modalVisible: false,
    isFetching: false,
    number: ""
  };

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
  _connect = async () => {
    const { number } = this.state;
    const { connect } = this.props;
    if (number) {
      const connectResult = await connect(number);
    }
  };
  componentDidMount = async () => {
    this._refresh();
    //Alert.alert(JSON.stringify(this.props.navigation.state.params.sector.id));
    // const number = await this.props.navigation.state.params.sector.modem_number;
    // this.setState({ number: number });
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.sectorFeed) {
      this.setState({
        isFetching: false
      });
    }
  };

  _refresh = () => {
    const { getSector } = this.props;
    this.setState({
      isFetching: true
    });
    getSector(this.props.navigation.state.params.sector_id);
  };
  render() {
    const {
      navigation: {
        state: {
          params: { sector_id }
        }
      }
    } = this.props;
    const { loading } = this.state;

    return (
      <PumpScreen
        // pump={pump}
        // sector={sector}
        {...this.props}
        sector_id={sector_id}
        {...this.state}
        setModalVisible={this._setModalVisible}
        connect={this._connect}
        refresh={this._refresh}
      />
    );
  }
}
export default Container;
