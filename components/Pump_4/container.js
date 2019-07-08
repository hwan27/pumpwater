import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import Pump_4 from "./presenter";

class Container extends Component {
  render() {
    return <Pump_4 {...this.props} />;
  }
}

export default Container;
