import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";
import firebase from "react-native-firebase";

class Container extends Component {
  state = {
    username: "",
    password: "",
    fcmToken: "",
    isSubmitting: false
  };
  static propTypes = {
    login: PropTypes.func.isRequired
  };
  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }
  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("  ","Check your ID & Password");
          this.setState({ isSubmitting: false });
        } else {
          await this._chenckPermission(username);
        }
      } else {
        Alert.alert("  ","All fields are required");
      }
    }
  };
  _chenckPermission = async username => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this._updateTokenToServer(username);
    } else {
      this._requestPermission();
    }
  };
  _requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      await this._updateTokenToServer();
    } catch (err) {
      alert("  ","You can't handle push notification");
    }
  };
  async _updateTokenToServer(username) {
    const { updateFcm } = this.props;
    const fcmToken = await firebase.messaging().getToken();
    //console.log(fcmToken);
    updateFcm(username, fcmToken);
    //alert(fcmToken);
  }
}

export default Container;
