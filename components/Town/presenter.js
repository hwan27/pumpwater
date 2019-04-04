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

const { width, height } = Dimensions.get("window");

const Town = props => (
  <View style={styles.town}>
    <TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  town: {
    width: width * 0.3,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "blue",
    borderRadius: 10
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "column",
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 20,
    color: "white"
  }
});

Town.propTypes = {};
export default Town;
