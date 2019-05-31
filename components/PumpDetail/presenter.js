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
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

const PumpDetail = props => (
  <View style={styles.town}>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>수동/자동</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} />
    </View>

    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>가동률</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.modem_number} />
    </View>

    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>전류</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.latitude} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>주파수</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.longitude} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>전압</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_count} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  town: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    width: width * 0.4,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: "#fff",
    borderRadius: 35,
    marginTop: width * 0.02,
    marginBottom: width * 0.02,
    marginRight: 0,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#4593bc",
    margin: 20
  },
  input: {
    width: width * 0.5,
    margin: width * 0.02,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

PumpDetail.propTypes = {};

export default PumpDetail;
