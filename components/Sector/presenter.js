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
  <View style={styles.town}>
    <TouchableOpacity
      onPressOut={() =>
        props.navigation.navigate("Pumps", {
          pump: props.pump_set
        })
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
          <View style={{flexDirection:'row',width:width*0.3,height:height*0.07, justifyContent:'space-between',alignItems:'center',}}>
            <Image
            source={require('../../assets/images/waterTap.gif')}
            style={{resizeMode:'contain',width:25}} 
            />
            <Image
            source={require('../../assets/images/wifi02.png')}
            style={{resizeMode:'contain',width:30}} 
            />
          </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  town: {
    width: width * 0.45,
    height: height * 0.2,
    // paddingHorizontal: 10,
    // paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 35,
    margin: width * 0.05,
    elevation:5
  },
  header: {
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999",
    marginBottom:20,
    marginTop:20
  }
});

Sector.propTypes = {};

export default withNavigation(Sector);