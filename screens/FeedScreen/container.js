import React, { Component } from "react";
import FeedScreen from "./presenter";
import NavButton from "../../components/NavButton";
import PropsTypes from "prop-types";

class Container extends Component {
  static propsTypes = {
    feed: PropsTypes.array,
    getFeed: PropsTypes.func.isRequired
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
