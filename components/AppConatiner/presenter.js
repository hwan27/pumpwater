import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoggedIn && profile ? (
          <Text>Oh God Please</Text>
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default AppContainer;
