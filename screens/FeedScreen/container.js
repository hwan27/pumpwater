import React, { Component } from "react";
import FeedScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";
import { Icon } from "native-base";
import { Alert, TouchableOpacity, Text } from "react-native";

class Container extends Component {
  static propsTypes = {
    feed: PropsTypes.object,
    getFeed: PropsTypes.func.isRequired
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "상수도 가압장 관측 제어 설비",
      headerStyle: {
        backgroundColor: "#008de6"
      },
      headerTitleStyle: { color: "white", marginLeft: 30 },
      headerRight: (
        <TouchableOpacity>
          <Text
            style={{ paddingRight: 10, fontSize: 16, color: "white" }}
            onPress={navigation.getParam("logout")}
          >
            LOGOUT
          </Text>
        </TouchableOpacity>
      )
    };
  };
  state = {
    isFetching: false
  };

  _logout = () => {
    const { logout } = this.props;
    logout();
  };

  // componentWillMount() {
  //   getFeed();
  // }

  componentDidMount() {
    this._refresh();
    this.props.navigation.setParams({ logout: this._logout });
  }
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
