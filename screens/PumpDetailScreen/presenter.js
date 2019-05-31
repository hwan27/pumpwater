import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import PumpDetail from "../../components/PumpDetail";

const PumpDetailScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    {/* {props.pump &&
        props.pump.map(pump =>  */}
    <PumpDetail {...props.pump} />
    {/* )} */}

    {/* <TouchableOpacity onPress={() => Alert.alert(props.data)}>
      <Text>getmodem</Text>
    </TouchableOpacity> */}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  }
});

PumpDetailScreen.propTypes = {};

export default PumpDetailScreen;
