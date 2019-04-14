import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Pump = props => (
  <View style={styles.town}>
    <TouchableOpacity
      onPressOut={() =>
        props.navigation.navigate("PumpDetail", {
          pumpDetail: props
        })
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  town: {
    width: width * 0.3,
    height: 70,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 35,
    margin: width * 0.05
  },
  header: {
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999"
  }
});

Pump.propTypes = {};

export default withNavigation(Pump);
