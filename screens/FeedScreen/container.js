import React, { Component } from "react";
import FeedScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";

class Container extends Component {
  static propsTypes = {
    feed: PropsTypes.object,
    getFeed: PropsTypes.func.isRequired
  };
  static navigationOptions = {
    title: "상수도 가압장 관측 제어 설비",
    headerStyle: {
      backgroundColor: "#008de6"
    },
    headerTitleStyle: { color: "white", marginLeft: 30 }
  };
  state = {
    isFetching: false
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
