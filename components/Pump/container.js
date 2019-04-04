import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import Pump from "./presenter";

class Container extends Component {
  render() {
    return <Pump {...this.props} />;
  }
}

export default Container;
