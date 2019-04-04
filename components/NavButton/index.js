import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
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
          color: "blue"
        }}
      />
    </View>
  </TouchableWithoutFeedback>
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

export default NavButton;
