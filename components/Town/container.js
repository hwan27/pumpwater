import React, { Component } from "react";
import PropTypes from "prop-types";
import Town from "./presenter";

class Container extends Component {
  render() {
    return <Town {...this.props} />;
  }
}

export default Container;
