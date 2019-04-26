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
    <View styles={styles.container}>
      {/* {props.pump &&
        props.pump.map(pump =>  */}
      <PumpDetail {...props.pumpDetail} />
      {/* )} */}
    </View>
    <TouchableOpacity onPress={() => Alert.alert(props.data)}>
      <Text>getmodem</Text>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  }
});

PumpDetailScreen.propTypes = {};

export default PumpDetailScreen;
