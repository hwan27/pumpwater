import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Sector from "../../components/Sector";

const SectorScreen = props => (
  <ScrollView
    horizontal={false}
    contentContainerStyle={styles.contentContainer}
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {props.townFeed &&
        props.townFeed.sector_set.map(sector => (
          <Sector {...sector} key={sector.id} />
        ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row"
  },

  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

SectorScreen.propTypes = {};

export default SectorScreen;
