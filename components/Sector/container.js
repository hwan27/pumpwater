import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import Sector from "./presenter";

class Container extends Component {
  render() {
    return <Sector {...this.props} />;
  }
}

export default Container;
