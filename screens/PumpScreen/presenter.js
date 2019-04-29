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
import Grid from "react-native-grid-component";

_renderItem = (data, i) => (
  <View style={[{ backgroundColor: data }, styles.item]} key={i} />
);

_renderPlaceholder = i => <View style={styles.item} key={i} />;

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
    {/* <Grid
      styles={styles.container}
      itemPerRow={3}
      renderItem={this._renderItem}
      renderItem={this._renderPlaceholder}
      data={["black"]}
    > */}
    <View styles={styles.container}>
      {props.pump && props.pump.map(pump => <Pump {...pump} key={pump.id} />)}
    </View>
    {/* </Grid> */}
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

PumpScreen.propTypes = {
  pump: PropTypes.array.isRequired
};

export default PumpScreen;
