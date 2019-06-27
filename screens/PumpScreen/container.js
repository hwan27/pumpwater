import React, { Component } from "react";
import {
  Alert,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  Text
} from "react-native";
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
      headerTitleStyle: { color: "white", marginLeft: width * 0.3 }, //add this
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
    isRefreshing: false,
    number: ""
  };

  // async componentDidMount() {
  //   await getFeed();
  //   Alert.alert(JSON.stringify(props));
  // }

  _logout = () => {
    const { logout } = this.props;
    logout();
  };
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
    //Alert.alert(JSON.stringify(this.props.sectorFeed.modem_number));
    this._refresh();
    this.props.navigation.setParams({ logout: this._logout });
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

  _refreshInterval = number => {
    const { getSector, connect } = this.props;
    connect(this.props.sectorFeed.modem_number);
    Alert.alert(JSON.stringify(this.props.sectorFeed.modem_number));
    this.setState({ isRefreshing: true });
    let interval = setInterval(() => this._refresh(), 2000);
    setTimeout(() => {
      clearInterval(interval);
      this.setState({ isRefreshing: false });
    }, 30000);
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
        refreshInterval={this._refreshInterval}
      />
    );
  }
}
export default Container;
