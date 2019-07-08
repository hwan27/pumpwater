import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import Pump_1 from "./presenter";

class Container extends Component {
  render() {
    return <Pump_1 {...this.props} />;
  }
}

export default Container;
