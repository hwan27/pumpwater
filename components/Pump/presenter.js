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
      onPress={() =>
        props.navigation.navigate("PumpDetail", {
          // pump: props,
          // title: props.title
          pump_title: props.title,
          pump_id: props.id
        })
      }
    >
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/whitePump.gif")}
          style={{
            // resizeMode: "contain",
            width: width,
            padding: 20,
            position: "relative",
            alignItems: "center"
          }}
          imageStyle={{ resizeMode: "contain", height: height * 0.1 }}
        >
          <View style={{ height: height * 0.07, width: width }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#678293",
                position: "absolute",
                top: height * 0.05 - 20,
                left: width * 0.7,
                marginTop: -15
              }}
            >
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
    <View
      style={{
        width: width,
        justifyContent: "center",
        flexDirection: "row",
        paddingRight: 30,
        marginBottom: 20
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 3,
          borderRadius: 8,
          flexDirection: "row",
          padding: 10,
          marginLeft: 105
        }}
      >
        {props.auto ? (
          <Text style={styles.input}>자동</Text>
        ) : (
          <Text style={styles.input}>수동</Text>
        )}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            flexDirection: "row",
            borderRadius: 8,
            padding: 10,
            marginLeft: 15
          }}
        >
          <Text style={{ color: "#00a5dd", fontSize: 20, fontWeight: "400" }}>
            가동률: {props.operating_rate}
          </Text>

          <Text
            style={{
              marginLeft: 10,
              color: "#00a5dd",
              fontSize: 20,
              fontWeight: "400"
            }}
          >
            전류: {props.current}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            flexDirection: "row",
            borderRadius: 8,
            padding: 10,
            marginLeft: 15
          }}
        >
          <Text style={{ color: "#00a5dd", fontSize: 20, fontWeight: "400" }}>
            주파수: {props.freq}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              color: "#00a5dd",
              fontSize: 20,
              fontWeight: "400"
            }}
          >
            전압: {props.power}
          </Text>
        </View>
      </View>
      <View />
    </View>
    <Text>최종 업데이트: {props.updated_at}</Text>
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
  },
  input: {
    color: "#678293",
    fontSize: 20,
    fontWeight: "400",
    marginRight: 5
  }
});

Pump.propTypes = {};

export default withNavigation(Pump);
