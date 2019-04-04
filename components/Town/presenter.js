import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Town = props => (
  <View style={styles.town}>
    <TouchableOpacity onPressOut={() => props.navigation.navigate("Sectors")}>
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
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 20
  },
  header: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "white"
  }
});

Town.propTypes = {};
export default withNavigation(Town);
