import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Pump from "../../components/Pump";

const PumpScreen = props => (
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
      {props.pump && props.pump.map(pump => <Pump {...pump} key={pump.id} />)}
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

PumpScreen.propTypes = {
  pump: PropTypes.array.isRequired
};

export default PumpScreen;
