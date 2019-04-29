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
import Grid from "react-native-grid-component";
import PumpDetail from "../../components/PumpDetail";

_renderItem = i => (
  <View style={[{ backgroundColor: blue }, styles.item]} key={i} />
);

_renderPlaceholder = i => <View style={styles.item} key={i} />;

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
    <Grid
      styles={styles.container}
      itemPerRow={3}
      renderItem={this._renderItem}
    >
      {/* {props.pump &&
        props.pump.map(pump =>  */}
      <PumpDetail {...props.pumpDetail} />
      {/* )} */}
    </Grid>
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
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  }
});

PumpDetailScreen.propTypes = {};

export default PumpDetailScreen;
