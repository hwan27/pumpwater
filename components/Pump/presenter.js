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
  Alert,
  ImageBackground
} from "react-native";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Pump = props => (
  <View>
    <TouchableOpacity
      onPressOut={() =>
        props.navigation.navigate("PumpDetail", {
          pump: props,
          title: props.title
        })
      }
    >
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/pumpNone.gif")}
          style={{
            // resizeMode: "contain",
            width: width,
            padding: 20,
            position: "relative",
            alignItems: "center"
          }}
          imageStyle={{ resizeMode: "contain", height: height * 0.07 }}
        >
          <View style={{ height: height * 0.07, width: width }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#678293",
                position: "absolute",
                top: height * 0.035 - 20,
                right: width * 0.33,
                marginTop: -15
              }}
            >
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
    <View style={{ flexDirection: "row" }}>
      {props.auto ? (
        <Text style={styles.input}>자동</Text>
      ) : (
        <Text style={styles.input}>수동</Text>
      )}
      <Text>{props.operating_rate}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  // town: {
  //   width: width * 0.3,
  //   height: 50,
  //   paddingHorizontal: 10,
  //   paddingVertical: 20,
  //   backgroundColor: "#fff",
  //   borderRadius: 35,
  //   margin: width * 0.05
  // },
  header: {
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999"
  }
});

Pump.propTypes = {};

export default withNavigation(Pump);
