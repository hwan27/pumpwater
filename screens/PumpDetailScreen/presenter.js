import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
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
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  }
});

PumpDetailScreen.propTypes = {
  pump: PropTypes.array.isRequired
};

export default PumpDetailScreen;
