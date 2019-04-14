import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import PumpDetail from "./presenter";

class Container extends Component {
  render() {
    return <PumpDetail {...this.props} />;
  }
}

export default Container;
