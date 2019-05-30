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
  Image,
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
        <Image
          source={require("../../assets/images/pump_02.gif")}
          style={{
            resizeMode: "contain",
            width: width * 0.8
            // marginBottom: -20
          }}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  town: {
    width: width * 0.3,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 35,
    margin: width * 0.05
  },
  header: {
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999"
  }
});

Pump.propTypes = {};

export default withNavigation(Pump);
