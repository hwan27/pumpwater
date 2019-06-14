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
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("Sectors", {
          //sector: props.sector_set,
          town_id: props.id,
          town_title: props.title
          //refresh: props.refresh,
          //isFetching: props.isFetching
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

Town.propTypes = {};

export default withNavigation(Town);
