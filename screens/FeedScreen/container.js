import React, { Component } from "react";
import FeedScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import { Icon } from "native-base";
import { Alert, TouchableOpacity, Text, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
class Container extends Component {
  // static propsTypes = {
  //   feed: PropsTypes.object,
  //   getFeed: PropsTypes.func.isRequired
  // };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "상수도 가압장 관측 제어 설비",
      headerStyle: {
        backgroundColor: "#00a5dd"
      },
      headerTitleStyle: { color: "white", marginLeft: width * 0.15 },
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
  state = {
    isFetching: false,
    data: {}
  };

  _logout = () => {
    const { logout } = this.props;
    logout();
  };

  // componentWillMount() {
  //   getFeed();
  // }

  componentDidMount = async () => {
    await this._refresh();
    // let data = JSON.stringify(this.props.feed.town_set);
    // this.setState({ data: data });
    this.props.navigation.setParams({ logout: this._logout });
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    return (
      <FeedScreen {...this.props} {...this.state} refresh={this._refresh} />
    );
  }
  _refresh = () => {
    const { getFeed } = this.props;
    this.setState({
      isFetching: true
    });
    getFeed();
  };
}

export default Container;
