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
  Alert,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Sector = props => (
  <TouchableOpacity
    onPress={() =>
      props.navigation.navigate("Pumps", {
        // pump: props.pump_set,
        sector_title: props.title,
        sector_id: props.id
        // sector: props
      })
    }
  >
    <View elevation={3} style={styles.town}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            width: width * 0.3,
            height: height * 0.07,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/images/waterTap.gif")}
            style={{ resizeMode: "contain", width: 25 }}
          />
          {(Date.now() - Date.parse(props.updated_at)) / 3600000 > 2 ? null : (
            <Image
              source={require("../../assets/images/wifi02.png")}
              style={{ resizeMode: "contain", width: 30 }}
            />
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  town: {
    // width: width * 0.45,
    // height: height * 0.2,
    // // paddingHorizontal: 10,
    // // paddingVertical: 20,
    // backgroundColor: "#fff",
    borderRadius: 5,
    // margin: width * 0.05,
    // elevation: 5
    width: width * 0.4,
    height: height * 0.2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    //borderRadius: 35,
    margin: width * 0.05
  },
  header: {
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999",
    marginBottom: 20
  }
});

Sector.propTypes = {};

export default withNavigation(Sector);
