import React from "react";
import PropTypes from "prop-types";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import { Icon } from "native-base";

const NavButton = props => (
  <TouchableWithoutFeedback onPressOut={props.onPress}>
    <View styel={styles.container}>
      <Icon
        type="FontAwesome"
        name={props.iconName}
        style={{
          paddingLeft: 10,
          fontSize: 25,
          paddingTop: 10,
          color: "white"
        }}
      />
    </View>
  </TouchableWithoutFeedback>
);

const LogoutButton = props => (
  <TouchableOpacity
    onPressOut={props.onPress}
    style={{ paddingRight: 15, color: "white" }}
  >
    <Text>LOGOUT</Text>
  </TouchableOpacity>
);
NavButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
});

export { LogoutButton };
export default NavButton;
