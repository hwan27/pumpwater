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
          <Text style={styles.title}>PUMP TITLE</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.title} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP NAME</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.name} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>MODEM NUMBER</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.modem_number} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP LAT</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.latitude} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP LONG</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.longitude} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP COUNT</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_count} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>COMSTATE</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.comstate} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PRESSURE</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pressure} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP1 FREQ</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_1_freq} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP1 CURRENT</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_1_current} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP2 FREQ</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_2_freq} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP2 CURRENT</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_2_current} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP3 FREQ</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_3_freq} />
    </View>
    <View style={styles.row}>
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>PUMP3 CURRENT</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.input} value={props.pump_3_current} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  town: {
    flex: 1
  },
  header: {
    width: width * 0.4,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: "#fff",
    borderRadius: 35,
    margin: width * 0.02,
    marginRight: 0,
    alignItems:"flex-start",
    
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#397999"
  },
  input: {
    width: width * 0.5,
    margin: width * 0.02,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    // borderColor: "#dbdbdb",
    // borderWidth: 1,
    backgroundColor: "white"
  },
  row: { flexDirection: "row" }
});

PumpDetail.propTypes = {};

export default PumpDetail;
